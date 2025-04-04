import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { GlobeCanvas } from './canvas';
import lightbulb from '../assets/lightbulb.png';

// replace mouse with arrow
const Hero = () => {
  const [light, setLight] = useState(true);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div onClick={() => {setLight(current => !current)}}  className="flex flex-col justify-center items-center mt-5 hover:scale-110">
          <button style={light ? {backgroundImage: "linear-gradient(to left, #fcc305 0%, #a15403 100%)"} : 
            {backgroundColor : "transparent", border: ".5px solid #1f1e1e"}} className={`w-12 h-12 rounded-full`}>
            <img className="h-2/5 w-2/5 justify-center items-center mx-auto" src={lightbulb} alt="lightbulb" />
          </button>
        </div>
        <div>
          <h1 style={{ color: light ? 'white' : '#202020' }} className={light ? `${styles.heroHeadText} text-gradient-hero` : `${styles.heroHeadText}`}>
            Hi, I'm Alan
          </h1>          
          <p style={{ color: light ? 'white' : '#202020' }} className={light ? "mt-2 text-gradient-hero" : "mt-2"}>
            Welcome to my page!
          </p>
        </div>
      </div>
      <div className="ml-auto inline-bloc flex flex-row h-full w-[75%]">
          <GlobeCanvas lightOn={light} />
      </div>
    </section>
  )
}

export default Hero