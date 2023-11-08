import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({
    
  });

  const skillCardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 600 },
  });

  return (
    <animated.div
      ref={ref}
      style={skillCardAnimation}
      className="bg-white p-3 rounded-lg shadow-md mb-4"
    >
      <div className="mb-2">
        <img src={skill.image} alt={skill.title} className="" />
      </div>
      <div className="text-xl font-semibold text-black">{skill.title}</div>
      <p className="text-gray-600">{skill.description}</p>
    </animated.div>
  );
};

export default SkillCard;
