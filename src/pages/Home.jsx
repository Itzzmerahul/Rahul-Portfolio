// Home.js
import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import MainContent from './Maincontent';
import Portfolio from './Portfolio';
import ContactMe from './contactme';
import Switcher from './Switcher';
import Card from './Card';
import Skill from './Skill';
import Main from './Header/Main';


export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  return (
    // <div className="w-full h-full font-roboto  flex items-center justify-between flex-col">
      
   
      <div className="min-h-screen  w-full h-full font-roboto bg-white dark:bg-black   justify-between flex-col flex  items-center transition duration-200 gap-5  p-10">
       <Main/>
      <NavBar show={showNavbar} />
     
<MainContent/>
        <Portfolio />
        <Skill/>
    
        
        <ContactMe />
   
     
  
    </div>
  /* <NavBar show={showNavbar} />
      <MainContent />
      <div className=''>
        <Portfolio />
      </div>
      <div id="contactme" className="bg-white">
        <ContactMe />
      </div> */
    /* </div> */
  );
}
