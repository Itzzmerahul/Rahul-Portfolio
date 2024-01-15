import React, { Component } from 'react';
import { gsap, Sine, Elastic } from 'gsap';

class DoorUI extends Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
        this.tl = gsap.timeline({});
        this.hitBtnRef = React.createRef();
      }
      
  onLoaded() {}

  componentDidMount() {
    this.onLoaded();
  }

  componentDidUpdate() {
    this.animateDoor();
  }
  

  setBtnEnabled = (e) => {
    this.hitBtnRef.current.setAttribute('class', !e ? 'disabled' : 'enabled');
  };
  

  animateDoor = () => {
    this.tl
      .staggerTo('.radialGroup g', 1, {
        fill: this.state.open ? '#41E969' : '#F70048',
      }, 0.2)
      .to('.bar', 0.4, {
        strokeWidth: this.state.open ? 0 : 4,
        transformOrigin: '50% 50%',
        stroke: this.state.open ? '#41E969' : '#F70048',
        ease: 'power4.inOut',
      }, 0)
      .to('.ring', 0.4, {
        stroke: this.state.open ? '#41E969' : '#F70048',
      }, 0)
      .to('.ring', 0.4, {
        stroke: this.state.open ? '#41E969' : '#F70048',
      }, 0)
      .staggerTo('.radialGroup g', 0.3, {
        cycle: {
          alpha: [0],
        },
        repeat: 1,
        ease: Sine.easeOut,
        yoyoEase: Sine.easeOut,
      }, 0.1, 0)
      .staggerTo('.radialGroup g path', 0.3, {
        cycle: {
          scale: [0.95],
        },
        repeat: 1,
        svgOrigin: '400 300',
        ease: Sine.easeIn,
        yoyoEase: Sine.easeOut,
      }, 0.0163, 0.1)
      .to('.radialGroup', 1, {
        svgOrigin: '400 300',
        ease: Elastic.easeOut.config(0.5, 0.75),
        rotation: '+=36',
      }, 0)
      .to('.icon', 1, {
        svgOrigin: '400 300',
        transformOrigin: '50% 50%',
        ease: Sine.easeOut,
        rotation: this.state.open ? '+=0' : '-=180',
      }, 0.1)
      .to('.icon', 0.4, {
        scale: 0.9,
        svgOrigin: '400 300',
        transformOrigin: '50% 50%',
        ease: Sine.easeOut,
        yoyoEase: Elastic.easeOut.config(0.5, 0.75),
        repeat: 1,
      }, 0);

    // Uncomment the following line if you need to enable the button after the animation
    // this.setBtnEnabled(true);
  };

  toggle = () => {
    console.log("Toggle function called");
    this.setBtnEnabled(false);
    this.setState({ open: !this.state.open });
  };
  

  render() {
    return (
      <svg viewBox="200 150 400 300" preserveAspectRatio="xMidYMid meet">
        <title>uiDoorLock</title>
        <defs>
          <circle
            id="ring"
            cx="400"
            cy="300"
            r="23"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <circle
            id="hitRing"
            cx="400"
            cy="300"
            r="100"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
          <clipPath id="ringMask">
            <use xlinkHref="#ring" fill="red" />
          </clipPath>
        </defs>
        <g className="radialGroup">
        <g opacity="0.6" fill="#47ac51">
          <path d="M405.89,246.78l-1.14,7.2a1,1,0,0,1-1.06.84,45.61,45.61,0,0,0-21.17,3.34,1,1,0,0,1-1.27-.47l-3.32-6.5a1,1,0,0,1,.5-1.38A54.84,54.84,0,0,1,405,245.62,1,1,0,0,1,405.89,246.78Z"/>
          <path d="M376.79,260a1,1,0,0,1-.38,1.3,45.81,45.81,0,0,0-8.48,6.68,45.34,45.34,0,0,0-6.67,8.48,1,1,0,0,1-1.31.38l-6.49-3.32a1,1,0,0,1-.42-1.4,54.33,54.33,0,0,1,19-19,1,1,0,0,1,1.4.42Z"/>
          <path d="M452.45,289.17l-7.22,1.14a1,1,0,0,1-1.12-.77,45,45,0,0,0-9.71-19.09,1,1,0,0,1,.05-1.36l5.16-5.17a1,1,0,0,1,1.46,0,54.39,54.39,0,0,1,12.21,24A1,1,0,0,1,452.45,289.17Z"/>
          <path d="M390.3,345.23l-1.13,7.22a1,1,0,0,1-1.21.83,54.39,54.39,0,0,1-24-12.21,1,1,0,0,1,0-1.46l5.17-5.16a1,1,0,0,1,1.36-.05,45,45,0,0,0,19.09,9.71A1,1,0,0,1,390.3,345.23Z"/>
          <path d="M448.81,322.07l-6.5-3.32a1,1,0,0,1-.47-1.27,45.61,45.61,0,0,0,3.34-21.17,1,1,0,0,1,.84-1.06l7.2-1.14a1,1,0,0,1,1.16.89,54.84,54.84,0,0,1-4.19,26.57A1,1,0,0,1,448.81,322.07Z"/>
          <path d="M446.54,326.52a1,1,0,0,1,.42,1.4,54.25,54.25,0,0,1-19,19,1,1,0,0,1-1.4-.42l-3.31-6.49a1,1,0,0,1,.38-1.3,45.78,45.78,0,0,0,15.16-15.16,1,1,0,0,1,1.3-.38Z"/>
          <path d="M421.57,350.19A54.84,54.84,0,0,1,395,354.38a1,1,0,0,1-.89-1.16l1.14-7.2a1,1,0,0,1,1.06-.84,45.61,45.61,0,0,0,21.17-3.34,1,1,0,0,1,1.27.47l3.32,6.5A1,1,0,0,1,421.57,350.19Z"/>
          <path d="M365.55,330.91l-5.16,5.17a1,1,0,0,1-1.46,0,54.39,54.39,0,0,1-12.21-24,1,1,0,0,1,.83-1.21l7.22-1.13a1,1,0,0,1,1.12.76,45,45,0,0,0,9.71,19.09A1,1,0,0,1,365.55,330.91Z"/>
          <path d="M354,304.75l-7.2,1.14a1,1,0,0,1-1.16-.89,54.84,54.84,0,0,1,4.19-26.57,1,1,0,0,1,1.38-.5l6.5,3.32a1,1,0,0,1,.47,1.27,45.61,45.61,0,0,0-3.34,21.17A1,1,0,0,1,354,304.75Z"/>
          <path d="M436.08,260.39l-5.17,5.16a1,1,0,0,1-1.36.05,45,45,0,0,0-19.09-9.71,1,1,0,0,1-.76-1.12l1.13-7.22a1,1,0,0,1,1.21-.83,54.39,54.39,0,0,1,24,12.21A1,1,0,0,1,436.08,260.39Z"/>
        </g>
        <g opacity="0.4" fill="#47ac51">
          <path d="M466.58,286.92l-7.21,1.14a1,1,0,0,1-1.12-.77,59.37,59.37,0,0,0-13.72-27,1,1,0,0,1,0-1.37l5.15-5.15a1,1,0,0,1,1.45,0,68.56,68.56,0,0,1,16.24,31.88A1,1,0,0,1,466.58,286.92Z"/>
          <path d="M388.06,359.37l-1.14,7.21a1,1,0,0,1-1.19.83,68.56,68.56,0,0,1-31.88-16.24,1,1,0,0,1,0-1.45l5.15-5.15a1,1,0,0,1,1.37,0,59.37,59.37,0,0,0,27,13.72A1,1,0,0,1,388.06,359.37Z"/>
          <path d="M461.57,328.57l-6.5-3.32a1,1,0,0,1-.46-1.29,59.8,59.8,0,0,0,4.7-29.87,1,1,0,0,1,.83-1.09l7.2-1.14a1,1,0,0,1,1.16.89A69.25,69.25,0,0,1,463,328.09,1,1,0,0,1,461.57,328.57Z"/>
          <path d="M428.09,363a69.25,69.25,0,0,1-35.34,5.55,1,1,0,0,1-.89-1.16l1.14-7.2a1,1,0,0,1,1.09-.83,60,60,0,0,0,29.87-4.7,1,1,0,0,1,1.29.46l3.32,6.5A1,1,0,0,1,428.09,363Z"/>
          <path d="M459.29,333a1,1,0,0,1,.42,1.4,68.54,68.54,0,0,1-25.3,25.3,1,1,0,0,1-1.4-.42l-3.3-6.5a1,1,0,0,1,.39-1.31,59.53,59.53,0,0,0,21.38-21.38,1,1,0,0,1,1.31-.39Z"/>
          <path d="M446.18,250.28,441,255.43a1,1,0,0,1-1.37,0,59.37,59.37,0,0,0-27-13.72,1,1,0,0,1-.77-1.12l1.14-7.21a1,1,0,0,1,1.19-.83,68.56,68.56,0,0,1,31.88,16.24A1,1,0,0,1,446.18,250.28Z"/>
          <path d="M355.43,341l-5.15,5.15a1,1,0,0,1-1.45,0,68.56,68.56,0,0,1-16.24-31.88,1,1,0,0,1,.83-1.19l7.21-1.14a1,1,0,0,1,1.12.77,59.37,59.37,0,0,0,13.72,27A1,1,0,0,1,355.43,341Z"/>
          <path d="M408.14,232.66l-1.14,7.2a1,1,0,0,1-1.09.83,59.8,59.8,0,0,0-29.87,4.7,1,1,0,0,1-1.29-.46l-3.32-6.5a1,1,0,0,1,.48-1.38,69.25,69.25,0,0,1,35.34-5.55A1,1,0,0,1,408.14,232.66Z"/>
          <path d="M339.86,307l-7.2,1.14a1,1,0,0,1-1.16-.89,69.25,69.25,0,0,1,5.55-35.34,1,1,0,0,1,1.38-.48l6.5,3.32a1,1,0,0,1,.46,1.29,59.8,59.8,0,0,0-4.7,29.87A1,1,0,0,1,339.86,307Z"/>
          <path d="M370.29,247.21a1,1,0,0,1-.39,1.31,59.53,59.53,0,0,0-21.38,21.38,1,1,0,0,1-1.31.39l-6.5-3.3a1,1,0,0,1-.42-1.4,68.54,68.54,0,0,1,25.3-25.3,1,1,0,0,1,1.4.42Z"/>
        </g>
        <g opacity="0.15" fill="#47ac51">
          <path d="M434.58,375.68a83.52,83.52,0,0,1-44.07,6.93,1,1,0,0,1-.88-1.15l1.14-7.2a1,1,0,0,1,1.1-.83,74.22,74.22,0,0,0,38.58-6.06,1,1,0,0,1,1.3.45l3.31,6.49A1,1,0,0,1,434.58,375.68Z"/>
          <path d="M472,339.51a1,1,0,0,1,.42,1.38,82.68,82.68,0,0,1-31.56,31.56,1,1,0,0,1-1.38-.42l-3.31-6.49a1,1,0,0,1,.4-1.32,74.14,74.14,0,0,0,15.68-11.94,73.37,73.37,0,0,0,11.94-15.69,1,1,0,0,1,1.32-.4Z"/>
          <path d="M480.7,284.68l-7.2,1.15a1,1,0,0,1-1.13-.79,73.35,73.35,0,0,0-17.72-34.8,1,1,0,0,1,0-1.37l5.15-5.16a1,1,0,0,1,1.45,0,82.69,82.69,0,0,1,20.26,39.76A1,1,0,0,1,480.7,284.68Z"/>
          <path d="M385.83,373.5l-1.15,7.2a1,1,0,0,1-1.18.83,82.69,82.69,0,0,1-39.76-20.26,1,1,0,0,1,0-1.45l5.16-5.15a1,1,0,0,1,1.37,0A73.35,73.35,0,0,0,385,372.37,1,1,0,0,1,385.83,373.5Z"/>
          <path d="M474.31,335.06l-6.49-3.31a1,1,0,0,1-.45-1.3,74.22,74.22,0,0,0,6.06-38.58,1,1,0,0,1,.83-1.1l7.2-1.14a1,1,0,0,1,1.15.88,83.52,83.52,0,0,1-6.93,44.07A1,1,0,0,1,474.31,335.06Z"/>
          <path d="M345.33,351.13l-5.15,5.16a1,1,0,0,1-1.45,0,82.69,82.69,0,0,1-20.26-39.76,1,1,0,0,1,.83-1.18l7.2-1.15a1,1,0,0,1,1.13.79,73.35,73.35,0,0,0,17.72,34.8A1,1,0,0,1,345.33,351.13Z"/>
          <path d="M410.37,218.54l-1.14,7.2a1,1,0,0,1-1.1.83,74.22,74.22,0,0,0-38.58,6.06,1,1,0,0,1-1.3-.45l-3.31-6.49a1,1,0,0,1,.48-1.37,83.52,83.52,0,0,1,44.07-6.93A1,1,0,0,1,410.37,218.54Z"/>
          <path d="M456.29,240.18l-5.16,5.15a1,1,0,0,1-1.37,0A73.35,73.35,0,0,0,415,227.63a1,1,0,0,1-.79-1.13l1.15-7.2a1,1,0,0,1,1.18-.83,82.69,82.69,0,0,1,39.76,20.26A1,1,0,0,1,456.29,240.18Z"/>
          <path d="M325.74,309.23l-7.2,1.14a1,1,0,0,1-1.15-.88,83.52,83.52,0,0,1,6.93-44.07,1,1,0,0,1,1.37-.48l6.49,3.31a1,1,0,0,1,.45,1.3,74.22,74.22,0,0,0-6.06,38.58A1,1,0,0,1,325.74,309.23Z"/>
          <path d="M363.81,234.46a1,1,0,0,1-.4,1.32,73.37,73.37,0,0,0-15.69,11.94,74.14,74.14,0,0,0-11.94,15.68,1,1,0,0,1-1.32.4L328,260.49a1,1,0,0,1-.42-1.38,82.68,82.68,0,0,1,31.56-31.56,1,1,0,0,1,1.38.42Z"/>
        </g>
        <g opacity="0.05" fill="#47ac51">
          <path d="M494.81,282.45l-7.19,1.14a1,1,0,0,1-1.13-.79,87.72,87.72,0,0,0-21.71-42.68,1,1,0,0,1,0-1.38l5.16-5.16a1,1,0,0,1,1.44,0,96.91,96.91,0,0,1,24.25,47.66A1,1,0,0,1,494.81,282.45Z"/>
          <path d="M487.05,341.55l-6.5-3.32a1,1,0,0,1-.45-1.3,88.54,88.54,0,0,0,7.46-47.3,1,1,0,0,1,.83-1.1l7.19-1.14a1,1,0,0,1,1.16.87,97.9,97.9,0,0,1-8.32,52.82A1,1,0,0,1,487.05,341.55Z"/>
          <path d="M383.59,387.62l-1.14,7.19a1,1,0,0,1-1.18.84,96.91,96.91,0,0,1-47.66-24.25,1,1,0,0,1,0-1.44l5.16-5.16a1,1,0,0,1,1.38,0,87.72,87.72,0,0,0,42.68,21.71A1,1,0,0,1,383.59,387.62Z"/>
          <path d="M311.61,311.47l-7.19,1.14a1,1,0,0,1-1.16-.87,97.89,97.89,0,0,1,8.32-52.82,1,1,0,0,1,1.37-.47l6.5,3.32a1,1,0,0,1,.45,1.3,88.54,88.54,0,0,0-7.46,47.3A1,1,0,0,1,311.61,311.47Z"/>
          <path d="M335.2,361.26,330,366.42a1,1,0,0,1-1.44,0,96.91,96.91,0,0,1-24.25-47.66,1,1,0,0,1,.84-1.18l7.19-1.14a1,1,0,0,1,1.13.79,87.72,87.72,0,0,0,21.71,42.68A1,1,0,0,1,335.2,361.26Z"/>
          <path d="M357.3,221.71a1,1,0,0,1-.4,1.31A88.37,88.37,0,0,0,323,256.9a1,1,0,0,1-1.31.4l-6.5-3.31a1,1,0,0,1-.42-1.38,97.64,97.64,0,0,1,37.82-37.82,1,1,0,0,1,1.38.42Z"/>
          <path d="M412.61,204.42l-1.14,7.19a1,1,0,0,1-1.1.83,88.53,88.53,0,0,0-47.3,7.45,1,1,0,0,1-1.3-.44l-3.32-6.5a1,1,0,0,1,.47-1.37,97.9,97.9,0,0,1,52.82-8.32A1,1,0,0,1,412.61,204.42Z"/>
          <path d="M441.08,388.42a97.89,97.89,0,0,1-52.82,8.32,1,1,0,0,1-.87-1.16l1.14-7.19a1,1,0,0,1,1.1-.83,88.54,88.54,0,0,0,47.3-7.46,1,1,0,0,1,1.3.45l3.32,6.5A1,1,0,0,1,441.08,388.42Z"/>
          <path d="M484.79,346a1,1,0,0,1,.42,1.38,97.64,97.64,0,0,1-37.82,37.82,1,1,0,0,1-1.38-.42l-3.31-6.5a1,1,0,0,1,.4-1.31A88.37,88.37,0,0,0,477,343.1a1,1,0,0,1,1.31-.4Z"/>
          <path d="M466.42,230l-5.16,5.16a1,1,0,0,1-1.38,0,87.72,87.72,0,0,0-42.68-21.71,1,1,0,0,1-.79-1.13l1.14-7.19a1,1,0,0,1,1.18-.84,96.91,96.91,0,0,1,47.66,24.25A1,1,0,0,1,466.42,230Z"/>
        </g>
        </g>
        <g className="icon">
          <use xlinkHref="#ring" stroke="#41E969" fill="none" className="ring" />
          <g className="lockBar" clipPath="url(#ringMask)">
            <line
              className="bar"
              x1="384"
              y1="316"
              x2="416"
              y2="284"
              fill="none"
              stroke="#41E969"
              strokeMiterlimit="10"
              strokeWidth="0"
            />
          </g>
        </g>
        <use
  xlinkHref="#hitRing"
  stroke="none"
  fill="transparent"
  onClick={this.toggle}
  ref={this.hitBtnRef}


        />
      </svg>
    );
  }
}

export default DoorUI;
