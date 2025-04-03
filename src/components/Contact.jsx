import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SaguaroCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_qjdjgk9',
      'template_sdzvutc',
      {
        from_name: form.name,
        to_name: 'Alan',
        from_email: form.email,
        to_email: 'alg.moreno00@gmail.com',
        message: form.message,
      }, 'GDA7yUKvlEcVbask0')
      .then(() => {
        toast.success('Thanks, I will get back to you!', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        console.log(error);
        toast.error('Something went wrong. Try again.', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
  }

  return (
    <div id="contact" className={`max-w-7xl mx-auto relative z-0 xl:mt-12 flex xl:flex-row flex-col-reverse py-0 gap-10 overflow-hidden`}>
      <ToastContainer />
      <motion.div variants={slideIn('right', 'tween', .2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[250px]">
        <SaguaroCanvas />
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', .2, 1)}
        className="flex-[.75] bg-transparent p-8 rounded-2xl mb-10">

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>          
              <input 
                text="text"
                name="name"
                value={form.name}
                autoComplete="off"
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-black py-4 px-6 placeholder:text-grey text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
              <input 
                text="email"
                name="email"
                autoComplete="off"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-black py-4 px-6 placeholder:text-grey text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>              
              <textarea
                rows="7"
                name="message"
                autoComplete="off"
                value={form.message}
                onChange={handleChange}
                placeholder=". . ."
                className="bg-black py-4 px-6 placeholder:text-grey text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <button          
            type="submit"
            onClick={handleSubmit}
            className="bg-black py-2 px-8 outline-none ml-auto w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            Send
          </button>
        </form>
      </motion.div>

    </div>    
          
  )
}

export default Contact