import React, { useEffect, useState } from 'react';

function Typewriter() {
  const [text, setText] = useState('');
  const toRotate = ["Hi, I'm Si.", "I am Creative.", "I Love Design.", "I Love to Develop."];
  const period = 2000;
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let i = loopNum % toRotate.length;
    let fullTxt = toRotate[i];
    let delta = 200 - Math.random() * 100;

    if (isDeleting) {
      setText(fullTxt.substring(0, text.length - 1));
    } else {
      setText(fullTxt.substring(0, text.length + 1));
    }

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && text === fullTxt) {
      delta = period;
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      delta = 500;
    }

    const timeout = setTimeout(() => {
      // Recursively call the effect
      setText(fullTxt);
    }, delta);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [text, loopNum, toRotate, period, isDeleting]);

  return (
    <h1>
      <span className="wrap">{text}</span>
    </h1>
  );
}

export default Typewriter;
