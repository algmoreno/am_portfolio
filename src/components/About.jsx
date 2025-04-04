import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profPic from '../assets/profPic.jpg'

const ServiceCard = ({ index, title, icon }) => (

  <div className="xs:w-[250px] w-full m-auto ">
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  className="w-full p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className="green-white-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
  </div> 
  );

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      
      <div style={{ flexDirection: 'row'}} className="flex flex-wrap">
        <img className="sm:h-[40%] sm:w-[100%] md:h-[20%] md:w-[20%] rounded-xl border border-gray-400 shadow-card" src={profPic} alt="" />

        <motion.p variants={fadeIn("", "", .1, 1)} className="mt-4 md:ml-0 xl:ml-20 text-white text-[17px] max-w-3xl leading-[30px]">
          I'm a full-stack web developer from Tucson, AZ with a Bachelor of Science in Business Management. My experience ranges
          from React/Javascript based web development to cloud-based applications and other AWS services. I love what I do because of the combination
          of logic and problem solving but also the creativity it requires.
        </motion.p>
      </div>

      <div className="mt-20 text-center flex flex-wrap ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");