import React, { useState } from 'react';
import useDarkSide from './UseDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className='fixed top-16 right-24 p-2 rounded-xl border-2 border-black dark:border-white'>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={25} />
      </div>
    </>
  );
}