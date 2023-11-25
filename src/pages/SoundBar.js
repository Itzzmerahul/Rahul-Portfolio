import React, { useRef, useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";

// ... (previous imports)

import music1 from "../pages/assets/audio/21.mp3";
import music2 from "../pages/assets/audio/20.mp3";
import music3 from "../pages/assets/audio/22.mp3";
import { mediaQueries } from "../components/Themes";
import Typewriter from 'typewriter-effect';


const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 5rem;
  top: 4.7rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }

  ${mediaQueries(40)`
  left: 4rem;
  top: 1.6rem;
`};

`;

const play = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2);
  }
  100% {
    transform: scaleY(1);
  }
`;

const Line = styled.span`
  background: gray;
  border: 1px solid gray;
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
  color: gray;


  ${mediaQueries(40)`
   height:1.3rem;
   margin-top:-0.1rem;
`};

  // ... (media queries)
`;

const NextButton = styled.div`
  background-color: yellow;
  width: 25px;
  height: 25px;
  top: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:1.5rem;
  margin-top: -5px;
  color:black;
  margin-left: 1rem;
  cursor: pointer;

  ${mediaQueries(40)`
  left: 4rem;
  margin-top: -0.3rem;
`};

`;

const SongText = styled.div`
  position: fixed;
  left: 5rem;
  top: 6rem;
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  font-size: 0.8rem;
  z-index: 11;
  white-space: nowrap;
  overflow: hidden;
  opacity: ${(props) => (props.isPlaying ? "1" : "0")}; /* Initial opacity is set to 0 */
  transition: opacity 1s ease-in-out; /* Use a transition to animate opacity */

  &:before {
    content: "";
    display: inline-block;
    vertical-align: top;
    height: 1.3rem;
    width: ${(props) => `${props.textWidth}px`};
    background: linear-gradient(to right, transparent 50%);
    background-size: 200% 100%;
    animation: ${(props) =>
      props.isPlaying ? `typing 3s steps(20, end) 1s infinite` : "none"};
  }

  @keyframes typing {
    0%, 100% {
      background-position: 100% 0;
    }
    25%, 75% {
      background-position: 0 0;
    }
  }

  ${mediaQueries(40)`
    left: 4rem;
    top: 3.4rem;
  `};
`;

const songsData = [
  { id: 1, title: "Currently Playing - 'Sunflower'" },
  { id: 2, title: "Currently Playing - 'Am I Dreaming'" },
  { id: 3, title: "Currently Playing - 'Calling'" },
];

const SoundBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(1);
  const [firstClick, setFirstClick] = useState(true);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const ref = useRef(new Audio());
  const songs = [music1, music2, music3];

  const handleClick = async () => {
    if (!isPlaying && firstClick) {
      // If it's the first click, set currentSong to 1
      setCurrentSong(1);
      setFirstClick(false);
    }

    if (!isPlaying) {
      try {
        await ref.current.play();
        ref.current.addEventListener("ended", handleNext);
      } catch (error) {
        console.error("Play error:", error);
      }
    } else {
      ref.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = useCallback(() => {
    ref.current.pause();
    ref.current.currentTime = 0;
    setCurrentSong((prevSong) => (prevSong === songs.length ? 1 : prevSong + 1));
    setIsPlaying(true);
  }, [songs]);

  

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (isPlaying) {
          if (ref.current.currentTime === 0) {
            await ref.current.play();
          } else {
            ref.current.play();
          }
        }
      } catch (error) {
        console.error("Play error:", error);
      }
    };

    ref.current.src = songs[currentSong - 1];
    ref.current.addEventListener("ended", handleNext);
    ref.current.addEventListener("canplaythrough", playAudio);

    playAudio();

    return () => {
      ref.current.removeEventListener("ended", handleNext);
      ref.current.removeEventListener("canplaythrough", playAudio);
    };
  }, [currentSong, songs, handleNext, isPlaying]);

  return (
    
    <>
      <Box>
        <Line click={isPlaying} onClick={handleClick} />
        <Line click={isPlaying} onClick={handleClick} />
        <Line click={isPlaying} onClick={handleClick} />
        <Line click={isPlaying} onClick={handleClick} />
        <Line click={isPlaying} onClick={handleClick} />

        <NextButton onClick={handleNext}>➡</NextButton>
      </Box>

      {currentSong === 1 && !firstClick && (
        <SongText
          textWidth={songsData[0].title.length * 8.2}
          isPlaying={isPlaying}
        >
          <Typewriter
            options={{
              strings: [songsData[0].title],
              autoStart: true,
              loop: true,
            }}
          />
        </SongText>
      )}

      {currentSong === 2 && (
        <SongText
          textWidth={songsData[1].title.length * 8.2}
          isPlaying={isPlaying}
        >
          <Typewriter
            options={{
              strings: [songsData[1].title],
              autoStart: true,
              loop: true,
            }}
          />
        </SongText>
      )}

      {currentSong === 3 && (
        <SongText
          textWidth={songsData[2].title.length * 8.2}
          isPlaying={isPlaying}
        >
          <Typewriter
            options={{
              strings: [songsData[2].title],
              autoStart: true,
              loop: true,
            }}
          />
        </SongText>
      )}
    </>
  );
};

export default SoundBar;