import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc'
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", .1, 1)}
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nesciunt, animi inventore doloremque voluptas consectetur eligendi, numquam esse reiciendis dolorem qui 
          explicabo sed aliquam accusantium aut rerum, cupiditate sequi beatae aperiam?
        </motion.p>
      </div>
    </>
  )
}

export default Works