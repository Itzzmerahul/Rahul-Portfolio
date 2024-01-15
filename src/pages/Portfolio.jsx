import React, { useState, useEffect  } from 'react';
import { useSpring, animated } from 'react-spring';
import './Portfolio1.css';

export default function Portfolio() {
  const [scrolling, setScrolling] = useState(false);
  

  // UseEffect to trigger the scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation for professional overview (no change needed for this)
  const professionalOverviewAnimation = useSpring({
    opacity: scrolling ? 1 : 0,
    transform: scrolling ? 'translate(0px, 0px)' : 'translate(0px, 200px)',
    config: { duration: 600 }, // Adjust the duration to control the animation speed (in milliseconds)
  });

  // const professionalOverviewStyle = {
  //   fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  
  // };


 

  return (
    <div className='w-full'>
      <div id="" className="">
        <div className=" flex items-center dark:text-white text-gray-800 justify-center gap-7 flex-col m-2 mt-10">
        <animated.div
  style={{
    ...professionalOverviewAnimation,
    
  }}
  className="flex flex-col items-center justify-between p-2 shadow-xl rounded-lg shadow-gray-300 dark:shadow-gray-600 bg-white dark:bg-black border border-black dark:border-white gap-10 lg:flex-row lg:p-2 text-md text-black"
>
            <div className="rounded-lg  h-full px-2 " style={{ fontFamily: "'Space Mono', monospace" }}>
              <div className="lg:m-4 m-1  text-xl lg:text-2xl  dark:text-white text-gray-800 Portfolio1-font">My Overview</div>
              <div  className='dark:text-white text-gray-800 quick bg-white dark:bg-black p-4 text-lg ' id='quick'  style={{ letterSpacing: '1px', fontFamily:  "'Space Mono', monospace"  }} >
              Hello there! I'm Rahul Krishna, a second-year Computer Science and Engineering student at Dhirajlal Gandhi College of Technology. My passion lies in the dynamic intersection of web development, design, machine learning, app development, and artificial intelligence. I thrive on the challenge of crafting intuitive and engaging user interfaces that not only meet but exceed user expectations 
In addition to my academic pursuits, I am deeply involved in various projects that allow me to apply my skills and knowledge in practical settings. I believe in staying on the cutting edge of technology, constantly exploring new tools and frameworks to enhance my capabilities. Whether it's creating visually stunning websites, implementing machine learning algorithms, developing innovative applications, or exploring the frontiers of artificial intelligence, each endeavor contributes to my growth as a versatile and forward-thinking developer. I am particularly drawn to projects that not only challenge my technical skills but also spark my creativity. Collaborating with like-minded individuals to solve complex problems is a source of inspiration for me My journey as a computer science and engineering student is not just about learning the intricacies of code; it's about embracing the dynamic and ever-evolving nature of technology with a spirit of innovation and a commitment to creating positive change.
              </div>
            </div>
          </animated.div>
        </div>
      </div>
      {/* "Skills" section with animation */}
    
    </div>
  );
}