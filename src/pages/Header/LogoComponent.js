import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from './Themes'




const Logo = styled.h1`

color: gray;
font-family: 'Pacifico',cursive;

background-color: #FCF6F4;
padding: 0.4rem;
border-radius: 80%;
border: 1px solid #000;
width: 2.3rem;
height: 2.3rem;

position: fixed;
left: 1.5rem;
top: 4.0rem;
z-index:3;

@media (max-width: 767px) {
  left: 1rem;
  top: 1rem;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          RK
        </Logo>
    )
}

export default LogoComponent