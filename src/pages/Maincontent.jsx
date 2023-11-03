import React from 'react';
import empty from './images/itzme8.jpg';
import rahul from './images/itzme10.jpg';
import Typewriter from 'typewriter-effect';

export default function Maincontent() {
  const typeStrings = ['CSE Student', 'Designer', 'Developer']; // Add more strings as needed

  const scrollDownToContactMe = () => {
    const contactMeSection = document.getElementById('contactMe');
    if (contactMeSection) {
      contactMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="mainContent" className="w-full -mt-3 font-roboto lg:flex-row flex-col flex items-center justify-center bg-white main-content" >
      <div className="flex items-center justify-center main-content">
        <img src={empty} alt="" className="bg-cover h-full w-full" />
        <div className="absolute inset-0 flex flex-col text-left px-16 items-start lg:px-28 justify-start mt-20">
          <h1 className="text-2xl lg:text-3xl font-semibold text-black my-3">I'm</h1>
          <p className="text-3xl lg:text-6xl font-bold text-gray-900 my-3">Rahul Krishna</p>
          <div className="text-2xl font-semibold items-center flex justify-start w-[300px] mt-3">
            <Typewriter
              options={{
                strings: typeStrings,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div
            onClick={() => scrollDownToContactMe()}
            className="bg-black hover-bg-gray-600 text-white text-xl p-4 my-3 items-center justify-center w-[200px] cursor-pointer rounded-full mt-7"
            style={{ zIndex: 1 }} // Keep a higher z-index for the "Connect with Me" box
          >
            Connect with Me
          </div>
        </div>
      </div>
      <img src={rahul} alt="" className="bg-cover lg:w-1/2 w-full h-full" />


    </div>
  );
}
