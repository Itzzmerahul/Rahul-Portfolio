import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";

//Components
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";

import { mediaQueries } from "./Themes";

const PowerButton = lazy(() => import("../Header/PowerButton"));
const SocialIcons = lazy(() => import("./../Header/SocialIcons"));

const LogoComponent = lazy(() => import("./../Header/LogoComponent"));

const MainContainer = styled(motion.div)`
  background: ${(props) => (props.isMobile ? "black" : "white")};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;
    `};

    ${mediaQueries(30)`
      font-size:1em;
    `};
  }

  @media only screen and (max-width: 50em) {
    background: ${(props) => (props.initialLoad && props.isMobile ? "white" : "black")};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
from {
    transform: rotate(0) ;
  }
  to {
    transform: rotate(360deg) ;
  }
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index:2;
  transition: all 1s ease;
  & > *:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > *:last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
    
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
    
  }
`;

const Contact = styled.a`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const BLOG = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;



const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.visible ? "50%" : "0%")};
  background-color: yellow;
  height: ${(props) => (props.visible ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(props) =>
    props.visible
      ? mediaQueries(50)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;
  `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;

const LightDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: ${(props) => (props.visible ? "50%" : "0%")};
  background-color: ${(props) => (props.isMobile ? "yellow" : "black")};
  height: ${(props) => (props.visible ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(props) =>
    props.visible
      ? mediaQueries(50)`
       height: 50%;
  left:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;
  `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;



/*
Music by <a href="/users/wataboi-12344345/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=1167">Wataboi</a> from <a href="https://pixabay.com/music/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=1167">Pixabay</a>
*/

const Main = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Set initialLoad to false after a short delay
    const timeoutId = setTimeout(() => {
      setInitialLoad(false);
    }, 100); // You can adjust the delay as needed

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setIsBackgroundVisible(!isBackgroundVisible);
  };

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;
  const isMobile = window.innerWidth <= 768;



  return (
    
      <MainContainer
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={path === "about" || path === "skills" ? moveY : moveX}
      transition={{ duration: 0.5 }}
      isMobile={isMobile}
      initialLoad={initialLoad}
    >
      <DarkDiv visible={isBackgroundVisible} />
      <LightDiv visible={isBackgroundVisible} isMobile={isMobile} />
       

        <Container>
          <LogoComponent theme={click ? "dark" : "light"} />
          <PowerButton />
          {mq ? (
            <SocialIcons theme="light" />
          ) : (
            <SocialIcons theme={click ? "dark" : "light"} />
          )}
          <Center click={click}>
            {mq ? (
              <YinYang
                onClick={() => handleClick()}
                width={click ? 80 : 150}
                height={click ? 80 : 150}
                fill="white"
              />
            ) : (
              <YinYang
                onClick={() => handleClick()}
                width={click ? 120 : 200}
                height={click ? 120 : 200}
                fill="gray"
              />
            )}

            <span className="text-gray-600">click here</span>
          </Center>

         
          {mq ? (
            <BLOG click={+click} onClick={() => setpath("blog")} to="/blog">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                
              </motion.h2>
            </BLOG>
          ) : (
            <BLOG click={+false} onClick={() => setpath("blog")} to="/blog">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                
              </motion.h2>
            </BLOG>
          )}

          <WORK click={+click} to="/work">
            <motion.h2
              onClick={() => setpath("work")}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              
            </motion.h2>
          </WORK>

         
            <ABOUT
              onClick={() => setClick(false)}
              click={mq ? +false : +click}
              to="/about"
            >
              <motion.h2
                onClick={() => setpath("about")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                
              </motion.h2>
            </ABOUT>

            <SKILLS to="/skills">
              <motion.h2
                onClick={() => setpath("skills")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                
              </motion.h2>
            </SKILLS>
       
        </Container>

        {click ? <Intro click={click} /> : null}
      </MainContainer>
   
  );
};

export default Main;
