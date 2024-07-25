import React, { useState } from 'react'
import  Logo  from '../../utils/images/Jefferson-Site-Logo 1.png'
import { Link, NavLink } from 'react-router-dom'
import { Navs } from '../utils/Data'

function Navbar() {

  return (
    <div>
      <nav className=' justify-between not-italic hidden lg:flex '>
      <div>
     <Link to="/"><img src={Logo} alt='logo'/></Link> 
      </div>


      <div className='flex xl:gap-10 lg:gap-5 pt-5 font-readex'>
      {Navs.map((nav) => (
        <NavLink key={nav.id} to={nav.to} className={({ isActive }) =>
          isActive ? 'text-yellow-500' : 'text-white'
        }>
        <p>{nav.nav}</p>
    </NavLink>  
      ))}
      </div>



      <div>
      <button className='border py-4 px-7 font-readex'>Book a consultation</button>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
