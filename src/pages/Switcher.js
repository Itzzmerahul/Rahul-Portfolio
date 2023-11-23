import React, { useState } from 'react';
import useDarkSide from './UseDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useMediaQuery } from 'react-responsive';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'dark' ? true : false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const moonColor = 'white';
  const sunColor = 'orange';

  return (
    <>
      <div className={`fixed ${isMobile ? 'top-4 right-16' : 'top-20 right-5'} rounded-lg border-3 border-black dark:border-gray z-index:3`}>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={25}
          moonColor={moonColor}
          sunColor={sunColor}
        />
      </div>
    </>
  );
}
