import React from 'react';
import './Contactme.css'; // You should have a CSS file for styling
import { FaLinkedin, FaInstagram, FaWhatsapp, FaPhone, FaTwitter } from 'react-icons/fa';
import contact from "./images/Contact us-bro.svg";
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


export default function Contactme() {
  const [ref, inView] = useInView();

  const contactFormAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 400 },
  });

  


  return (
   
    <animated.div
    id="contactMe"
      ref={ref}
      style={contactFormAnimation}
      
      className='bg-white shadow-xl  shadow-gray-600 dark:shadow-gray-600  dark:bg-black  border-black dark:border-white  w-[340px] lg:w-full m-1 lg:px-10 p-1 flex flex-col rounded-md  border-2 dark:border-1 dark:shadow-none border-opacity-50  items-center justify-center'
    >
      <div className='w-full'>
        <h2 className="text-2xl text-black p-2 dark:text-white font-semibold">Contact Me</h2>
        <div className='flex justify-between px-0 lg:px-10 gap-1 lg:gap-10 w-full items-center lg:flex-row flex-col'>

          <img src={contact} alt="rahul" className='h-[350px] lg:h-[600px]' />

          <div>
            <form action="#" method="post" className='p-2 flex items-start flex-col '>
              <div className="mb-4 flex items-start flex-col right-1 w-[290px] lg:w-[400px]">
                <label className="dark:text-white text-gray-600">Your Name</label>
                <input className="w-full p-2 border border-gray-300 text-white dark:text-gray-600 rounded-lg" placeholder="Enter your name" required />
              </div>
              <div className="mb-4 flex items-start flex-col w-[290px] lg:w-[400px]">
                <label htmlFor="email" className="dark:text-white text-gray-600">Your Email</label>
                <input type="email" placeholder="Enter your email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>
              <div className="mb-4 flex items-start flex-col w-[290px] lg:w-[400px]">
                <label htmlFor="message" className="block dark:text-white text-gray-600">Your Message</label>
                <textarea id="message" name="message" className="w-full p-2 border border-gray-300 dark:text-white text-gray-600 rounded-lg" required></textarea>
              </div>
              <div className='flex items-center justify-center w-full p-2'>
                <button type="submit" className="bg-black dark:bg-white hover:bg-gray-500 text-white dark:text-gray-800 p-1 px-5 rounded-full cursor-pointer">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center flex-row p-2 gap-8'>

        <a href="https://www.linkedin.com/in/rahul-t-8855b7290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="mr-2 text-black dark:text-white hover:text-gray-500" />
        </a>

        <a href="https://instagram.com/itzme_rahul___?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="mr-2 text-black dark:text-white hover:text-gray-500" />
        </a>

        <a href="https://wa.me/8015262976" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} className="mr-2 text-black dark:text-white hover:text-gray-500" />
        </a>

        <a href="tel:+919047196476">
          <FaPhone size={25} className="text-black dark:text-white hover:text-gray-700" />
        </a>
        <a href="https://x.com/itzme_Rahul___?s=20" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={25} className="text-black dark:text-white hover:text-gray-700" />
        </a>
      </div>
      </animated.div>
    
  );
}