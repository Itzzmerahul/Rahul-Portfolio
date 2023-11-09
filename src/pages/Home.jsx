// Home.js
import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import MainContent from './Maincontent';
import Portfolio from './Portfolio';
import ContactMe from './contactme';

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
    <div className="w-full h-full font-roboto  flex items-center justify-between flex-col">
      
      <NavBar show={showNavbar} />
      <MainContent />
      <div className=''>
        <Portfolio />
      </div>
      <div id="contactme" className="bg-white">
        <ContactMe />
      </div>
    </div>
  );
}
