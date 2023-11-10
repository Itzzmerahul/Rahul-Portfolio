import React, { useState, useEffect  } from 'react';
import { useSpring, animated } from 'react-spring';
import './Portfolio1.css';
import SkillCard from './SkillCard';




import java from './images/java.svg';
import ps3 from './images/ps3.png';
import py1 from './images/py1.svg';
import ht2 from './images/ht2.svg';
import css from './images/css.svg';
import js from './images/js1.svg';
import fi from './images/fi.webp';
import da1 from './images/da1.svg';

const skillsData = [
  {
    title: 'Java',
    description: 'Through my experience and education, I have developed competence in Java programming. I am comfortable with writing Java code, working with its libraries, and solving various coding tasks using this language.',
    image: java,
  },
  {
    title: 'Photoshop Express',
    description: 'I have experience with Photoshop Express, a user-friendly photo editing software. I can efficiently use Photoshop Express for tasks like cropping, adjusting colors, and applying filters, making basic photo enhancements and edits with ease.',
    image: ps3,
  },
  {
    title: 'Python',
    description: 'I am familiar with Python, a versatile programming language. I have experience working with Python on various projects, which include scripting, data analysis, and web development. I am comfortable with Pythons syntax and libraries, and I can efficiently write and debug Python code.',
    image: py1,
  },
  {
    title: 'HTML',
    description: 'I have experience with HTML, a fundamental language for crafting web content. I use HTML to structure and design web pages, making information accessible and visually appealing. My familiarity with HTML includes building web pages,designing and many..',
    image: ht2,
  },
  {
    title: 'CSS',
    description: 'I have a good understanding of CSS (Cascading Style Sheets), which is a fundamental web development technology used to enhance the visual appearance and layout of websites. With CSS, I can style HTML elements, create responsive designs, and improve the overall look and feel of web pages.',
    image: css,
  },
  {
    title: 'JavaScript',
    description: 'I am familiar with JavaScript, a versatile programming language commonly used in web development. With JavaScript, I can add interactivity and dynamic elements to websites, enhancing their functionality. I have experience in creating dynamic web features, managing user interactions, many... ',
    image: js,
  },
  {
    title: 'Filmora',
    description: 'I am proficient in using Filmora, a user-friendly video editing software. With Filmora, I can easily create and edit videos by adding special effects, transitions, and audio enhancements. My experience with Filmora includes editing and producing captivating video content..',
    image: fi,
  },
  {
    title: 'Davinci Resolve',
    description: 'I am also familiar with DaVinci Resolve, a robust video editing and color correction software. DaVinci Resolve allows me to edit and enhance videos, apply professional-grade color grading, and create high-quality video content. ',
    image: da1,
  },
  // Repeat for the other 6 skills
];

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

  const professionalOverviewStyle = {
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  
  };

  const professionalOverviewTextStyle = {
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",

    padding: '10px',
    
  };

  return (
    <div className='w-full'>
      <div id="portfolio" className="bg-white">
        <div className="bg-white flex items-center text-black justify-center gap-7 flex-col m-3">
          <animated.div style={{ ...professionalOverviewAnimation }} className=" flex flex-col items-center justify-between p-4 bg-white gap-10 lg:flex-row lg:p-2 text-md text-black  font-serif  shadow-md">
            <div className="rounded-lg  h-full px-2 professional-overview" style={professionalOverviewStyle}>
              <div className="lg:m-4 m-1  text-xl lg:text-2xl font-semibold text-secondary  Portfolio1-font">My Overview</div>
              <div style={professionalOverviewTextStyle} className='text-secondary font-semibold bg-white-200 p-4'>
                I am a dedicated and aspiring individual currently in my second year of Computer Science and Engineering at Dhirajlal Gandhi College of Technology. My passion for technology has led me to become proficient in a versatile set of programming languages and web development tools, including Java, Python, CSS, HTML, C, and JavaScript. I am committed to expanding my knowledge and skills in these domains, driven by the ambition to become a proficient web developer.
                Throughout my academic journey, I have had the opportunity to work on a variety of projects, each of which has added to my practical experience and problem-solving skills. I believe in the power of technology to bring positive change, and I'm excited to use my skills to create applications that simplify everyday tasks and improve people's lives. Whether it's developing responsive websites, creating efficient algorithms, or designing user interfaces, I approach every project with enthusiasm and a determination to deliver high-quality results. In summary, my journey as a Computer Science and Engineering student has been filled with learning, growth, and a deep-seated passion for technology. I'm excited to embark on a lifelong journey of continuous learning and innovation, using my skills to make a positive impact on the world.
              </div>
            </div>
          </animated.div>
        </div>
      </div>
      {/* "Skills" section with animation */}
      <div className="bg-white m-3 rounded-">
        
        <div className="text-4xl font-bold text-black flex items-center justify-left p-2  ">Skills</div>
        <div className=" md:p-2 lg:p-5 md:m-1 lg:m-5 my-2   flex items-center justify-center flex-wrap  gap-2 lg:gap-4">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}