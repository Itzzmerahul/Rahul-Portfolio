import React, { useRef, useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";

// ... (previous imports)

import music1 from "../pages/assets/audio/21.mp3";
import music2 from "../pages/assets/audio/20.mp3";
import music3 from "../pages/assets/audio/22.mp3";
import music4 from "../pages/assets/audio/2.mp3";
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
  position: fixed;
  width: 25px;
  height: 25px;
  top: 75px;
  left: 120px;
  border-radius: 50%;
  display: flex;
  z-index: 11;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: black;
  cursor: pointer;

  ${mediaQueries(40)`
    left: 7rem;
    margin-top: -3.2rem;
  `};

  &:hover {
    background-color: orange; /* Change the background color on hover if needed */
  }
`;

const SongText = styled.div`
  position: fixed;
  left: 5rem;
  top: 6rem;
  font-weight: bold;
  color: green;
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
    top: 3rem;
    
  `};
`;

const songsData = [
  { id: 1, title: "Currently Playing - 'Na Ready'" },
  { id: 2, title: "Currently Playing - 'Sunflower'" },
  { id: 3, title: "Currently Playing - 'Am I Dreaming'" },
  { id: 4, title: "Currently Playing - 'Calling'" },
];

// ... (imports and styled components)

// ... (imports and styled components)

// ... (imports and styled components)

const SoundBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0); // Start with 0 to handle the initial setup
  const [firstClick, setFirstClick] = useState(true);
  const ref = useRef(new Audio());
  const songs = [music1, music2, music3,music4];

  const handleSoundBarClick = async () => {
    if (!isPlaying && firstClick) {
      setCurrentSong(1); // Start with the first song
      setFirstClick(false);
    }

    if (!isPlaying) {
      try {
        if (ref.current.currentTime > 0) {
          // If paused, set currentTime before playing
          await ref.current.play();
        } else {
          ref.current.src = songs[currentSong];
          await ref.current.play();
        }
      } catch (error) {
        console.error("Play error:", error);
      }
    } else {
      ref.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextButtonClick = () => {
    ref.current.pause();
    ref.current.currentTime = 0;
    handleNextSong();
  };

  const handleNextSong = () => {
    setCurrentSong((prevSong) => (prevSong === songs.length - 1 ? 0 : prevSong + 1));
    // Update the audio source and play
    ref.current.src = songs[currentSong];
    ref.current.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleEnded = () => {
      // Pause and reset currentTime before playing the next song
      ref.current.pause();
      ref.current.currentTime = 0;
      handleNextSong();
    };

    // Add event listener for the 'ended' event
    ref.current.addEventListener("ended", handleEnded);

    return () => {
      // Remove event listener when component unmounts
      ref.current.removeEventListener("ended", handleEnded);
    };
  }, [currentSong, songs]);

  return (
    <>
      <Box>
        <Line click={isPlaying} onClick={handleSoundBarClick} />
        <Line click={isPlaying} onClick={handleSoundBarClick} />
        <Line click={isPlaying} onClick={handleSoundBarClick} />
        <Line click={isPlaying} onClick={handleSoundBarClick} />
        <Line click={isPlaying} onClick={handleSoundBarClick} />
      </Box>
      <NextButton onClick={handleNextButtonClick}>➡</NextButton>
    
      {currentSong === 0 && !firstClick && (
        <SongText
          textWidth={songsData[0].title.length * 8.2}
          isPlaying={isPlaying}
        >
          <Typewriter
            options={{
              strings: [songsData[0].title],
              autoStart: true,
              loop: false,
            }}
          />
        </SongText>
      )}

      {currentSong === 1 && (
        <SongText
          textWidth={songsData[1].title.length * 8.2}
          isPlaying={isPlaying}
        >
          <Typewriter
            options={{
              strings: [songsData[1].title],
              autoStart: true,
              loop: false,
            }}
          />
        </SongText>
      )}

      {currentSong === 2 && (
        <SongText
          textWidth={songsData[2].title.length * 8.2}
          isPlaying={isPlaying}
        >
          <Typewriter
            options={{
              strings: [songsData[2].title],
              autoStart: true,
              loop: false,
            }}
          />
        </SongText>
      )}

{currentSong === 3 && (
        <SongText
          textWidth={songsData[3].title.length * 8.2}
          isPlaying={isPlaying}
        >
          <Typewriter
            options={{
              strings: [songsData[3].title],
              autoStart: true,
              loop: false,
            }}
          />
        </SongText>
      )}

    </>
  );
};

export default SoundBar;