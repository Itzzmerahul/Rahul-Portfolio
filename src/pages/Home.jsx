// Home.js
import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import MainContent from './Maincontent';
import Portfolio from './Portfolio';
import ContactMe from './contactme';
import Switcher from './Switcher';
import Card from './Card';
import Skill from './Skill';
import Maincontent from './Maincontent';
import MainPage from './MainPage';
import SkillCard from './SkillCard';



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

  

  return ( // <div className="  font-roboto bg-white dark:bg-black justify-between flex-col flex items-center transition duration-200  ">
      
    //    <div className=''>
    //    <NavBar show={showNavbar}  />

    //    </div>
    //    <MainPage/>
    //  <Maincontent/>

    //     <Portfolio />
    //     <Skill/>
    
        
    //     <ContactMe />
   
     
        
    // </div>
   
    <div className="w-full h-full bg-white dark:bg-black font-roboto  flex items-center justify-between transition duration-200  flex-col">
      
   
    
 
      {/* <MainContent /> */}
      <MainPage/>
      <div className=''>
        <Portfolio />
      </div>
      <div>
        <Skill/>
      </div>
      <div id="contactme" className="bg-white">
        <ContactMe />
        
      </div> 
     
     </div> 
  );
}
