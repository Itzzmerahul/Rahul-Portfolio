import React, { useState } from 'react';
import useDarkSide from './UseDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useMediaQuery } from 'react-responsive';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'dark' ? true : false);

  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the max width based on your responsive criteria

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  // Define custom colors for the sun and moon symbols
  const moonColor = 'gray'; // Replace with your desired color
  const sunColor = 'orange'; // Replace with your desired color

  return (
    <>
      <div className={`fixed ${isMobile ? 'top-20 right-16' : 'top-16 right-24'} p-2 rounded-xl border-2 border-black dark:border-gray`}>
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
