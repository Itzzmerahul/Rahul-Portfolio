import React from 'react'

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
    description: 'Photoshop Express, a user-friendly photo editing software. I can efficiently use Photoshop Express for tasks like cropping, adjusting colors, and applying filters, making basic photo enhancements and edits with ease.',
    image: ps3,
  },
 
  {
    title: 'HTML',
    description: 'HTML, a fundamental language for crafting web content. I use HTML to structure and design web pages, making information accessible and visually appealing. My familiarity with HTML includes building web pages,designing and many..',
    image: ht2,
  },
  {
    title: 'CSS',
    description: 'CSS (Cascading Style Sheets), which is a fundamental web development technology used to enhance the visual appearance and layout of websites. With CSS, I can style HTML elements, create responsive designs, and improve the overall look and feel of web pages.',
    image: css,
  },
  {
    title: 'JavaScript',
    description: 'JavaScript, a versatile programming language commonly used in web development. With JavaScript, I can add interactivity and dynamic elements to websites, enhancing their functionality. I have experience in creating dynamic web features, managing user interactions, many... ',
    image: js,
  },
  {
    title: 'Filmora',
    description: 'Filmora, a user-friendly video editing software. With Filmora, I can easily create and edit videos by adding special effects, transitions, and audio enhancements. My experience with Filmora includes editing and producing captivating video content..',
    image: fi,
  },
  {
    title: 'Davinci Resolve',
    description: 'DaVinci Resolve, a robust video editing and color correction software. DaVinci Resolve allows me to edit and enhance videos, apply professional-grade color grading, and create high-quality video content. ',
    image: da1,
  },
  // Repeat for the other 6 skills
];
export default function Skill() {
  return (
    <div>  <div className="bg-white dark:bg-black m-3 rounded-">
        
    <div className="text-4xl font-bold dark:text-white text-white flex items-center justify-left p-2  ">Skills</div>
    <div className=" md:p-2 lg:p-5 md:m-1 lg:m-5 my-2   flex items-center justify-center flex-wrap  gap-2 lg:gap-4">
      {skillsData.map((skill, index) => (
        <SkillCard key={index} skill={skill} index={index} />
      ))}
    </div>
  </div></div>
  )
}
