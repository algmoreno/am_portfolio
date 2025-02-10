import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profPic from '../assets/profPic.jpg'

const ServiceCard = ({ index, title, icon }) => (

  <div Tilt className="xs:w-[250px] w-full ">
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
        <img className="sm:h-[40%] sm:w-[100%] md:h-[20%] md:w-[20%] rounded-xl" src={profPic} alt="" />

        <motion.p variants={fadeIn("", "", .1, 1)} className="mt-4 md:ml-0 xl:ml-20 text-white text-[17px] max-w-3xl leading-[30px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Eius ex perspiciatis molestiae laudantium fugit sequi dignissimos minus officiis 
          exercitationem iste nostrum necessitatibus, libero laborum error provident iusto unde consequuntur iure?
        </motion.p>
      </div>



      

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");