import React, { useState, useEffect,useRef  } from 'react';
import { useSpring, animated } from 'react-spring';
import './Portfolio1.css';
import SkillCard from './SkillCard';




import java from './images/java.gif';
import ps3 from './images/ps3.png';
import py1 from './images/py1.png';
import ht1 from './images/ht1.png';
import css from './images/css.avif';
import js from './images/js.avif';
import fi from './images/fi.webp';
import da1 from './images/da1.jpg';

const skillsData = [
  {
    title: 'Java',
    description: 'Through my experience and education, I have developed competence in Java programming. I am comfortable with writing Java code, working with its libraries, and solving various coding tasks using this language.',
    image: java,
  },
  {
    title: 'Photoshop Express',
    description: 'I am familiar with Photoshop Express, a user-friendly photo editing software. I have used it for basic photo editing tasks like cropping, adjusting colors, and applying filters. While I may not be an expert, I can confidently navigate and use Photoshop Express for simple photo enhancements and edits',
    image: ps3,
  },
  {
    title: 'Python',
    description: 'I have experience with Python, a versatile programming language. I have worked on various Python projects, including scripting, data analysis, and web development. I am comfortable with Pythons syntax and libraries, and I can efficiently write and debug Python code. While I continue to learn and improve my skills, I am confident in my ability to work with Python for a variety of tasks.',
    image: py1,
  },
  {
    title: 'HTML',
    description: 'I am familiar with HTML, a fundamental language for crafting web content. I use HTML to structure and design web pages, making information accessible and visually appealing. My experience with HTML includes building web pages, designing forms, and contributing to user-friendly website experiences.',
    image: ht1,
  },
  {
    title: 'CSS',
    description: 'I have a good grasp of CSS, an essential skill for enhancing the visual appeal of web pages. I have used CSS to make web content look better and more user-friendly. I am comfortable with styling HTML elements, creating responsive designs, and improving the overall aesthetics of websites',
    image: css,
  },
  {
    title: 'JavaScript',
    description: 'I also know JavaScript, a versatile programming language for web development. I use JavaScript to enhance the functionality and interactivity of websites. My experience with JavaScript includes creating dynamic web elements, handling user interactions, and building responsive web applications',
    image: js,
  },
  {
    title: 'Filmora',
    description: 'I also know Filmora, a video editing software that allows me to create and edit videos with ease. I use Filmora to add special effects, transitions, and audio to my video projects. My experience with Filmora includes editing and producing engaging video content',
    image: fi,
  },
  {
    title: 'Davinci Resolve',
    description: 'I also know DaVinci Resolve, a powerful video editing and color correction software. I use DaVinci Resolve to edit and enhance videos, apply color grading, and create professional-quality video content. My experience with DaVinci Resolve includes working on video projects and achieving the desired visual effects.',
    image: da1,
  },
  // Repeat for the other 6 skills
];

export default function Portfolio() {
  const [scrolling, setScrolling] = useState(false);
  const [skillsAnimationTriggered, setSkillsAnimationTriggered] = useState(false);

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
    fontFamily: 'Roboto',
    backgroundColor: '#E9F1FA',
  };

  return (
    <div>
      <div id="portfolio" className="bg-white">
        <div className="bg-#60A5FA flex items-center text-black justify-center gap-7 flex-col m-3">
          <animated.div style={{ ...professionalOverviewAnimation }} className="p-3  flex flex-col items-center justify-between gap-10 lg:flex-row lg:p-4 text-md text-black w-full font-serif rounded-lg shadow-md">
            <div className="rounded-lg shadow-lg h-full p-3 professional-overview" style={professionalOverviewStyle}>
              <div className="lg:m-4 m-1 text-xl lg:text-2xl font-semibold text-black Portfolio1-font">My Professional Overview</div>
              I am a dedicated and aspiring individual currently in my second year of Computer Science and Engineering at Dhirajlal Gandhi College of Technology. My passion for technology has led me to become proficient in a versatile set of programming languages and web development tools, including Java, Python, CSS, HTML, C, and JavaScript. I am committed to expanding my knowledge and skills in these domains, driven by the ambition to become a proficient web developer.
              Throughout my academic journey, I have had the opportunity to work on a variety of projects, each of which has added to my practical experience and problem-solving skills. I believe in the power of technology to bring positive change, and I'm excited to use my skills to create applications that simplify everyday tasks and improve people's lives. Whether it's developing responsive websites, creating efficient algorithms, or designing user interfaces, I approach every project with enthusiasm and a determination to deliver high-quality results.
            </div>
          </animated.div>
        </div>
        <div className="bg- p-2 rounded-md text-white m-2">
          Checkout my Twitter & Instagram profiles for audio and video editing...
        </div>
      </div>
      {/* "Skills" section with animation */}
      <div className="bg-white">
        <div className="text-xl font-bold text-black mt-5 mb-3 text-left pl-5">Skills</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}