"use client";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SendMessageFrom = () => {

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
    <div class="bg-white w-full p-8 rounded-2xl shadow-md">
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
  );
};

export default SendMessageFrom;