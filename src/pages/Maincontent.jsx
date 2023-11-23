import React from 'react';
import empty from './images/itzme8.jpg';
import rahul from './images/itzme10.jpg';
import Typewriter from 'typewriter-effect';
import Switcher from './Switcher';
import SoundBar from './SoundBar';

export default function Maincontent() {
  const typeStrings = ['CSE Student', 'Designer', 'Developer']; // Add more strings as needed

  const scrollDownToContactMe = () => {
    const contactMeSection = document.getElementById('contactMe');
    if (contactMeSection) {
      contactMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="mainContent" className="w-full -mt-3  flex-col flex items-center justify-center bg-white dark:bg-gray-800 main-content" >
     <div className='flex justify-end items-end w-full p-4 z-10'>
      <Switcher/>
      </div>
      <div className="flex items-center justify-center main-content">
    
       
          <button
            onClick={() => scrollDownToContactMe()}
            className="hover-bg-gray-600 dark:bg-white bg-gray-800 text-white dark:text-gray-800 text-sm px-3 py-2 font-medium my-4 items-center justify-start w-[100px] cursor-pointer rounded-full just"
            style={{ position: 'fixed', top: 55, left: 1050, zIndex: 1 }} // Position the button to the top-left corner
          >
              Say hi
          </button>
          
        </div>
      </div>
    

      
  
  );
}
