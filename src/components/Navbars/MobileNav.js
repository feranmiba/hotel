import React, { useState } from 'react'
import  Logo  from '../../utils/images/Jefferson-Site-Logo 1.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navs } from '../utils/Data'


function MobileNav() {
  const [visible, setVisible] = useState(false)
 

  const toggleMenu = () => {
    setVisible(!visible)
  }

  return (
    <div className='absolute top-5 z-50 w-[85%]'>
  <div className='relative'>
    <section className='flex justify-between lg:hidden'>
     <Link to="/"><p> <img src={Logo} alt='logo' /></p></Link> 
      <p  onClick={toggleMenu}> <FaBars className='text-2xl'/> </p>
    </section>  
  </div>

  <AnimatePresence>
  {visible && ( 
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    class='fixed right-[0.5px] top-0 w-[100%] lg:hidden'> 
       <div className=' px-10 bg-[#000000]   w-[100%px] h-[100vh] pt-10 lg:hidden'>
       <div className='flex justify-between'>
    <p onClick={toggleMenu} className=' duration-100 mt-5' ><FaTimes  className='text-2xl'/></p>  
    
    <div>
    <button className='border py-4 px-5 font-readex'>Book a consultation</button>
    </div>
    </div>


    <div className='flex justify-center text-center gap-5 flex-col mt-5'>
    {Navs.map((nav) => (
      <NavLink key={nav.id} to={nav.to} onClick={toggleMenu}  className={({ isActive }) =>
        isActive ? 'text-yellow-500  text-xl' : 'text-white text-xl'
      }>
      <p >{nav.nav}</p>
  </NavLink>  
    ))}
    </div>
    
       </div> 

       </motion.div>)}
       </AnimatePresence>



</div>
  )
}

export default MobileNav
