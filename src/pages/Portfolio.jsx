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
              <div  className='dark:text-white text-gray-800 quick bg-white dark:bg-black p-4 text-lg ' id='quick'  style={{ letterSpacing: '0px', fontFamily:  "'Space Mono', monospace"  }} >
                I am a dedicated and aspiring individual currently in my second year of Computer Science and Engineering at Dhirajlal Gandhi College of Technology. My passion for technology has led me to become proficient in a versatile set of programming languages and web development tools, including Java, Python, CSS, HTML, C, and JavaScript. I am committed to expanding my knowledge and skills in these domains, driven by the ambition to become a proficient web developer.
                Throughout my academic journey, I have had the opportunity to work on a variety of projects, each of which has added to my practical experience and problem-solving skills. I believe in the power of technology to bring positive change, and I'm excited to use my skills to create applications that simplify everyday tasks and improve people's lives. Whether it's developing responsive websites, creating efficient algorithms, or designing user interfaces, I approach every project with enthusiasm and a determination to deliver high-quality results. In summary, my journey as a Computer Science and Engineering student has been filled with learning, growth, and a deep-seated passion for technology. I'm excited to embark on a lifelong journey of continuous learning and innovation, using my skills to make a positive impact on the world.
              </div>
            </div>
          </animated.div>
        </div>
      </div>
      {/* "Skills" section with animation */}
    
    </div>
  );
}