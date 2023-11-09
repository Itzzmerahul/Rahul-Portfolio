import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({
    
  });

  const skillCardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(150px)',
    config: { duration: 600 },
  });

  return (
    <animated.div
      ref={ref}
      style={skillCardAnimation}
      className="border border-blue-700 bg-white  hover:border-orange-300 p-3 mx-2 rounded-xl shadow-xl  mb-4 "
    >
      <div className=' h-[410px]  lg:h-[405px] w-[350px] lg:w-[350px]  flex flex-col items-center justify-center lg:p-0 p-5 hover:p-3'>
      <div className="mb-2">
        <img src={skill.image} alt={skill.title} className=" h-[160px] lg:h-[100px] w-full my-4" />
      </div>
      {/* <div className="text-xl font-semibold text-black items-center justify-center flex">{skill.title}</div> */}
      <p className="text-gray-600 font-semibold flex items-center justify-center p-3 text-center"style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", fontSize: '16px' }}>{skill.description}</p>
      </div>
    </animated.div>
  );
};

export default SkillCard;
