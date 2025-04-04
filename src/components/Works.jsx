import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc'
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * .5, .75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:cursor-pointer">
        {link != "" ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="relative w-full h-[230px]">
          <img src={image} alt="webpage image" className="w-full h-[230px] object-cover rounded-2xl" />
        </a>
        ) : (
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        </div>
        )}

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", .1, 1)}
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]">

        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")