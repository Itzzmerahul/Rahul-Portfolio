import React from 'react'
import { ThemeProvider } from 'styled-components';
import { lazy, Suspense } from "react";

import Main from './Header/Main';
import LogoComponent from './Header/LogoComponent';
import PowerButton from './Header/PowerButton';
import Switcher from './Switcher';



export default function MainPage() {
            





  const theme = {
    body: 'your-text-color',
    text: 'your-body-color',
   
    // Add other theme properties as needed
  };
  return (
   
     <div>
       
       
   
        

 

<ThemeProvider theme={theme}>
       <Main/>
       <Switcher/>
       </ThemeProvider>
    </div>
  )
}
