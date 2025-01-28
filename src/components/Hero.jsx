import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ffd428]"/>
          <div className="w-1 sm:h-80 h-40 blue-gradient"/>
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
      <ComputersCanvas />
    </section>
  )
}

export default Hero