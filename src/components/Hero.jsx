import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { GlobeCanvas } from './canvas';

// replace mouse with arrow
const Hero = () => {
  const [light, setLight] = useState(true);

  const toggleLight = () => {
    console.log("ToggleLight function called");
    setLight(prev => !prev);
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div onClick={toggleLight} className={`${styles.paddingX} absolute inset-0 top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* <div onClick={() => setLight(false)} className="w-8 h-8 rounded-full bg-[#ffb028]"/> */}
          <button className={`w-8 h-8 rounded-full ${light ? "bg-[#ffb028]" : "bg-[#141a3c]"}`}/>
          {/* <div className="w-1 sm:h-80 h-40 blue-gradient"/> */}
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm &nbsp; 
          <span className="text-[#0f3a60]">
            Alan
          </span>
        </h1>
        <p className={`${styles.heroSubTest} mt-2 text-white-100`}>
          This is my bio and I will write about me 
        </p>
      </div>
      </div>
        <GlobeCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-end items-center -mx-6">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-black mb-1"
          />            
        </div>
      </div>
    </section>
  )
}

export default Hero