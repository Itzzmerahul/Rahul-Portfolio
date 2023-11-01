import React, { useEffect } from 'react';
import './Contactme.css'; // You should have a CSS file for styling
import { FaLinkedin, FaInstagram, FaWhatsapp, FaPhone, FaTwitter } from 'react-icons/fa';
import contact from "./images/Contact us-bro.svg";
import ScrollMagic from 'scrollmagic';

export default function Contactme() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: '#contactMe', // Use the correct ID of your contact form
      // Use a unique trigger element
      triggerHook: 'onEnter', // Start the animation when the element enters the viewport
      reverse: true, // Reverse the animation when the element leaves the viewport
    })
      .setClassToggle('#contactMe', 'animate') // Add a CSS class to make it visible
      .addTo(controller);
  }, []);

  return (
   
    <div id="contactMe" className='bg-emerald-50 w-full m-1 lg:px-10 p-2 flex flex-col items-center justify-center animate contact-form contact-trigger visible'>
      <div className='w-full'>
        <h2 className="text-2xl text-black font-semibold">Contact Me</h2>
        <div className='flex justify-between px-0 lg:px-10 gap-1 lg:gap-10 w-full items-center lg:flex-row flex-col'>

          <img src={contact} alt="rahul" className='h-[350px] lg:h-[600px]' />

          <div>
            <form action="#" method="post" className='p-2 flex items-start flex-col '>
              <div className="mb-4 flex items-start flex-col w-[300px] lg:w-[400px]">
                <label className="text-gray-600">Your Name</label>
                <input className="w-full p-2 border border-gray-300 text-black rounded-lg" placeholder="Enter your name" required />
              </div>
              <div className="mb-4 flex items-start flex-col w-[300px] lg:w-[400px]">
                <label htmlFor="email" className="text-gray-600">Your Email</label>
                <input type="email" placeholder="Enter your email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>
              <div className="mb-4 flex items-start flex-col w-[300px] lg:w-[400px]">
                <label htmlFor="message" className="block text-gray-600">Your Message</label>
                <textarea id="message" name="message" className="w-full p-2 border border-gray-300 text-black rounded-lg" required></textarea>
              </div>
              <div className='flex items-center justify-center w-full p-2'>
                <button type="submit" className="bg-black hover:bg-gray-500 text-white p-1 px-5 rounded-full cursor-pointer">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center flex-row p-2 gap-10'>

        <a href="https://www.linkedin.com/in/rahul-t-8855b7290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="mr-2 text-black hover:text-gray-500" />
        </a>

        <a href="https://instagram.com/itzme_rahul___?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="mr-2 text-black hover:text-gray-500" />
        </a>

        <a href="https://wa.me/8015262976" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} className="mr-2 text-black hover:text-gray-500" />
        </a>

        <a href="tel:+919047196476">
          <FaPhone size={25} className="text-black hover:text-gray-700" />
        </a>
        <a href="https://x.com/itzme_Rahul___?s=20" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={25} className="text-black hover:text-gray-700" />
        </a>
      </div>
    </div>
  );
}