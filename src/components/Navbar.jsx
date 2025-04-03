import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
import logo from '../assets/signature_outlined_smoothed.png'

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`w-full h-[90px] flex items-center pt-5 pb-5 pl-1 pr-1 fixed top-0 z-20 bg-primary/60 backdrop-blur-lg backdrop-brightness-10 `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/"
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0,0)
            }}>
              <img src={logo} alt="logo" className='w-45 h-20 object-contain'/>
              <p className='max-sm:hidden text-gradient-nav text-[22px] font-bold cursor-pointer'>Alan Moreno &nbsp;
                <span className='text-[18px] md:block hidden'> | Web Developer Portfolio</span> 
              </p>
        </Link>
        <ul className='list-none hidden sm:flex sm:-px-10 flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${ active === Link.title
                          ? "text-secondary"
                          : "text-gradient-nav"} 
                          hover:text-tertiary text-[18px] font-medium cursor-pointer`}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden text-white mr-5 flex flex-1 justify-end items-center'>
          <img src={menu}
                alt="menu"   
                className='w-[28px] h-[28px] object-contain cursor-pointer'
                onClick={() => setToggle(!toggle)}> 
          </img>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black text-white border absolute top-20 right-0 mx-4 my-2 min-width-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((Link) => (
                <li key={Link.id}
                  className={`${ active === Link.title
                              ? "text-white"
                              : "text-white"} 
                              font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.active);
                  }}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar