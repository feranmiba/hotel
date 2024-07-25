import React from 'react'
import Logo from '../utils/images/Jefferson-Site-Logo 1.png'

function Fotter() {
  return (
    <div className='border-t-[1px] bg-[#000000] not-italic font-readex '>
    <footer className=' py-28 px-10 md:px-40 flex justify-between flex-wrap lg:flex-nowrap gap-10 lg:gap-0'>


    <div>
    <img src={Logo} alt='logo' />
    <p className='w-[300px] md:w-[424px] font-light leading-8 mt-7'>Our focus is on mid to upscale hotels, restaurants, nightlife venues, and resorts intelligently designed with user experience.</p>
    </div>

    <div>
    <p className='text-xl font-bold'>Quick Link </p>
    <ul className='flex flex-col gap-10 mt-5'>
    <li>Who we are ?</li>
    <li>What we do?</li>
    <li>Portfolio</li>
    </ul>
    </div>

    <div>
    <p className='text-xl font-bold'>Help</p>
    <ul className='flex flex-col gap-10 mt-5'>
    <li>Faqs</li>
    <li>Contact</li>
    <li>Support</li>
    </ul>
    </div>


    <div>
    <p className='text-xl font-bold'>Other  link</p>
    <ul className='flex flex-col gap-10 mt-5'>
    <li>Career</li>
    <li>Press</li>
    <li>Citizenship</li>
    </ul>
    </div>
    </footer>


    <section className='border-t-[1px]'>
    <div className='px-10 py-10 flex flex-wrap gap-10 lg:flex-nowrap lg:gap-0 justify-between'>
    <p>
    © 2024 Jefferson Hospitality. All rights reserved
    </p>

    <p>Privacy Policy</p>

    <p>Terms of Use</p>
    </div>
    
    </section>
      
    </div>
  )
}

export default Fotter
