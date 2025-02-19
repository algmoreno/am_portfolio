import React from "react";
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
          Technologies I Use
        </p>
        <h2 className={styles.sectionHeadText}>
          Skills
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 "
              key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
              <img className="m-auto w-20 h-20" src={technology.icon} alt={technology.name} />
            <h1 className="m-auto text-center text-slate-500">{technology.name}</h1>
          </div>
        ))}
      </div>
    </>


  )
}

export default SectionWrapper(Tech, "");