import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from './Themes'




const Logo = styled.h1`
display: inline-block;
color: gray;
font-family: 'Pacifico',cursive;

position: fixed;
left: 1.5rem;
top: 4.5rem;
z-index:3;

@media (max-width: 767px) {
  left: 2rem;
  top: 5.6rem;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          RK
        </Logo>
    )
}

export default LogoComponent