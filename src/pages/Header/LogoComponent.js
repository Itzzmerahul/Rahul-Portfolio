import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from './Themes'




const Logo = styled.h1`
display: inline-block;
color: gray;
font-family: 'Pacifico',cursive;

position: relative;
left: 4.3rem;
top: 2.5rem;
z-index:3;

@media (max-width: 767px) {
  left: -0.6rem;
  top: -0.8rem;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          RK
        </Logo>
    )
}

export default LogoComponent