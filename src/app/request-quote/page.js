"use client";

import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/firebaseConfig.js"
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Image from "next/image";

const RequestQuotePage = ({ searchParams }) => {


  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.init("9ms6th_t81CpzqhZc")

    emailjs.sendForm('service_6c4n1nk', 'template_muf7139', e.target)
      .then((result) => {
        console.log('Quotation sent successfully:', result.text);

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Quotation sent successfully!\nThank you very much!',
        });

        e.target.reset();

      }, (error) => {
        console.error('Error sending quotation:', error.text);
        // Optionally, show an error message to the user
        Swal.fire({
          icon: 'error',
          title: 'Oops 🥴',
          text: 'Failed to send quotation. Please try again later.',
        });

      });

  }

  const id = searchParams.id;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productRef = ref(database, `products/${id}`);

    get(productRef).then((snapshot) => {
      if (snapshot.exists()) {

        setProduct(snapshot.val());

      }
    }).catch((error) => {
      console.error(error);
    });

  }, [id]);

  let name = product.productName, images = product.images, code = product.productCode, brand = product.productBrand;

  console.log(product);

  return (
    <div>
      {images ?

        <div>
          <h1 className="text-center text-4xl text-white uppercase bg-[#581412] py-8">Request For Quotation</h1>
          <div className="lg:hidden block p-5">
              <Image className="shadow-md rounded-lg" src={images[0]} width={500} height={500} alt={name} />
            </div>
          <div className="lg:flex lg:px-24 px-5 lg:py-16 gap-5">

            <div className="bg-white w-full p-8 rounded-2xl shadow-md">
              <h1 className="text-xl font-bold capitalize">{name}</h1>
              <form onSubmit={handleSubmit} className="quotation-message-send-form">
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <div>
                    <label htmlFor="productName"><b className="text-red-500">*</b>Product</label>
                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="productName" placeholder="Name" readOnly value={name} />
                  </div>
                  <div>
                    <label htmlFor="productBrand"><b className="text-red-500">*</b>Brand</label>
                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="productBrand" placeholder="Brand" readOnly value={brand} />
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <div>
                    <label htmlFor="name"><b className="text-red-500">*</b>Name</label>
                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="name" placeholder="Name" required />
                  </div>

                  <div>
                    <label htmlFor="email"><b className="text-red-500">*</b>Email</label>
                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Email" required />
                  </div>

                </div>

                <div className="mt-5">

                  <label htmlFor="subject"><b className="text-red-500">*</b>Subject</label>
                  <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 mb-5 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="subject" placeholder="Subject" required />

                  <label htmlFor="message"><b className="text-red-500">*</b>Message</label>
                  <textarea class="w-full bg-gray-100 text-gray-900 mt-2 p-3 h-32 rounded-lg focus:outline-none focus:shadow-outline" name="message" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="bg-[#581412] text-white px-6 mt-5 py-2 rounded">
                  SEND
                </button>
              </form>
            </div>

            <div className="lg:block hidden">
              <Image className="shadow-md rounded-lg" src={images[0]} width={500} height={500} alt={name} />
            </div>

          </div>

        </div>

        : <div className="overlay">

          <div className="loader"><div></div><div></div><div></div></div>

        </div>}
    </div>
  );
};

export default RequestQuotePage;