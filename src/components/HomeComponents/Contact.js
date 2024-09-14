"use client";

import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.init("9ms6th_t81CpzqhZc")

        emailjs.sendForm('service_6c4n1nk', 'template_tq686aw', e.target)
            .then((result) => {
                console.log('Email sent successfully:', result.text);

                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Email sent successfully!\nThank you very much!',
                });

                e.target.reset();

            }, (error) => {
                console.error('Error sending email:', error.text);
                // Optionally, show an error message to the user
                Swal.fire({
                    icon: 'error',
                    title: 'Oops 🥴',
                    text: 'Failed to send email. Please try again later.',
                });

            });

    }
    return (
        <div class="bg-gray-100 flex justify-center items-center w-screen pb-36">
            <div class="container mx-auto my-4 px-4 lg:px-28">
                <div class="bg-white w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-md">
                    <h1 class="font-bold uppercase text-xl">Send us a message</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" name="name" placeholder="Name" required />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" name="email" placeholder="Email" required />
                        </div>
                        <div class="my-4">
                            <textarea name="message" placeholder="Enter your message" required class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div class="my-2 w-1/2 lg:w-1/4">
                            <button class="uppercase text-sm font-bold tracking-wide bg-[#581412] text-gray-100 p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                <div
                    class="w-full lg:-mt-[350px] lg:w-2/6 px-8 py-12 ml-auto bg-[#581412] rounded-2xl">
                    <div class="flex flex-col text-white">
                        <div class="flex flex-col mb-4">
                            <h2 class="text-xl uppercase mb-2">Location</h2>
                            <p class="text-gray-300"><FontAwesomeIcon icon={faLocationDot} className="mr-2" />Dhaka - Uttara - Sector - 9 (Beside Milestone College)
                            PO Box: 100101, Uttara, Bangladesh</p>
                        </div>

                        <div class="flex flex-col">
                            <h2 class="text-xl uppercase mb-2">Marketing & Sales Enquiries</h2>
                            <p class="text-gray-300"><FontAwesomeIcon icon={faPhone} className="mr-2" /> <Link href='tel:+88011 91919191'>
                            +88011 91919191
                            </Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;