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
    <div
      className={`absolute ${
        isMobile ? 'top-4 right-16' : 'top-16 right-16 md:top-16 md:right-28'
      } rounded-lg border-20 border-red dark:border-gray z-30`}
    >
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={25}
        moonColor={moonColor}
        sunColor={sunColor}
      />
    </div>
  );
}
