import React, { useEffect, useRef } from 'react';
import './Portfolio1.css';
import ScrollMagic from 'scrollmagic';
import java from './images/java.gif';
import ps3 from './images/ps3.png';
import py1 from './images/py1.png';
import ht1 from './images/ht1.png';
import css from './images/css.avif';
import js from './images/js.avif';
import fi from './images/fi.webp';                  
import da1 from './images/da1.jpg';

const skills = [
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
    description: 'I have experience with Python, a versatile programming language. I have worked on various Python projects, including scripting, data analysis, and web development. Im comfortable with Pythons syntax and libraries, and I can efficiently write and debug Python code. While I continue to learn and improve my skills, I am confident in my ability to work with Python for a variety of tasks.',
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
  const portfolioRef = useRef(null); // Create a ref for the "portfolio" element
  useEffect(() => {
    console.log('useEffect is running');
    const controller = new ScrollMagic.Controller();

    if (portfolioRef.current) { // Check if the ref is available
      new ScrollMagic.Scene({
        triggerElement: portfolioRef.current, // Use the ref
        triggerHook: 'onEnter',
        offset:0,
      })
        .setClassToggle('#portfolio', 'animate')
        .addTo(controller);
    }
  }, []);

  const skillsData = [
    {
      title: 'Skills',
      elements: ["Java", 'Photoshop Express', "Python", 'HTML', 'CSS', 'JavaScript', 'Filmora', 'Davinci code'],
    },
  ];
  // Rest of your component code...


  const professionalOverviewStyle = {
    fontFamily: 'Roboto',
    backgroundColor: '#E9F1FA',
  };

  return (
    <div>
    <div id="portfolio" className='bg-white' ref={portfolioRef}>
        <div className='bg-#60A5FA flex items-center text-black justify-center gap-7 flex-col m-3'>
          <div className='rounded-lg shadow-lg h-full p-3 professional-overview' style={professionalOverviewStyle}>
            <div className='lg:m-4 m-1 text-xl lg:text-2xl font-semibold text-black Portfolio1-font'>My Professional Overview</div>
            <div className='flex flex-col items-center justify-between gap-10 lg:flex-row'>
              <div className='p-3 lg:p-4 text-md text-black w-full font-serif lg:w-3/4 bg-white rounded-lg shadow-md skills'>
                I am a dedicated and aspiring individual currently in my second year of Computer Science and Engineering at Dhirajlal Gandhi College of Technology. My passion for technology has led me to become proficient in a versatile set of programming languages and web development tools, including Java, Python, CSS, HTML, C, and JavaScript. I am committed to expanding my knowledge and skills in these domains, driven by the ambition to become a proficient web developer.

                Throughout my academic journey, I have had the opportunity to work on a variety of projects, each of which has added to my practical experience and problem-solving skills. I believe in the power of technology to bring positive change, and I'm excited to use my skills to create applications that simplify everyday tasks and improve people's lives. Whether it's developing responsive websites, creating efficient algorithms, or designing user interfaces, I approach every project with enthusiasm and a determination to deliver high-quality results.
              </div>
            
              <div className='flex flex-col bg-#2272FF p-2 gap-10 rounded-lg text-black font-semibold text-md items-start justify-center w-full lg:w-1/4 shadow-md bg-white' >
                {skillsData.map((skillSection, index) => (
                  <div key={index} className='flex flex-row'>
                    <p className='px-5'>{skillSection.title}:</p>
                    <ul>
                      {skillSection.elements.map((skill, skillIndex) => (
                        <li key={skillIndex} className='text-left'>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='bg- p-2 rounded-md text-white m-2'>
          Checkout my Twitter & Instagram profiles for audio and video editing's...
        </div>
      </div>

      {/* "Skills" section */}
      <div className='bg-white'>
        <div className='text-xl font-bold text-black mt-5 mb-3 text-left pl-5'>Skills</div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {skills.map((skill, index) => (
            <div key={index} className='bg-white p-3 rounded-lg shadow-md mb-4'>
              <img src={skill.image} alt={skill.title} className='w-full h-auto' />
              <h3 className='text-lg font-semibold text-black mt-2'>{skill.title}</h3>
              <p className='text-sm text-gray-600'>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
