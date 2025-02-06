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
        <div onMouseEnter={() => {setLight(current => !current)}} onMouseLeave={() => {setLight(current => !current)}} className="flex flex-col justify-center items-center mt-5">
          {/* <button className={`w-10 h-10 rounded-full ${light ? "bg-[#ffb028]" : "bg-[#0f3a5f]"}`}/> */}
          <button style={light ? {backgroundImage: "linear-gradient(to right, #fcc305 0%, #9c6905 100%)"} : 
          {backgroundImage : "linear-gradient(to right, #000000 0%, #000000 100%)", border: "1px solid grey"}} className={`w-10 h-10 rounded-full`}>
            <img className="h-1/2 w-/12 justify-center items-center mx-auto" src={lightbulb} alt="lightbulb" />
          </button>
        </div>
        <div>
          <h1 style={{ color: light ? 'white' : '#0f3a5f' }} className={`${styles.heroHeadText}`}>
            Hi, I'm Alan
          </h1>
          <p style={{ color: light ? 'white' : '#0f3a5f' }} className={`${styles.heroSubTest} mt-2 text-white-100`}>
            This is my bio and I will write about me 
          </p>
        </div>

        <div className="flex flex-row h-[500px] w-1/2">
          <GlobeCanvas lightOn={light} />
        </div>
      </div>
    </section>
  )
}

export default Hero