// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from './AllSvgs'


const Power = styled.button`
 
  position:fixed;
  top: 3.7rem;
  left: 94%;
  transform: translate(-50%, 0);

  background-color: #FCF6F4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.3rem;
  height: 2.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index:3;
 

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 50em) {
    /* Adjust the position for smaller screens */
    top: 0.8rem;
    left: 92%;
  }
`;

const PowerButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


return (
  <Power onClick={scrollToTop}>
    <PowerBtn width={30} height={30} fill='currentColor' />
  </Power>
);
}

export default PowerButton