import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";

function Intro() {
  return (
    <div >


    <p className=' font-normal text-lg md:text-2xl leading-10 md:leading-[50px] font-readex not-italic'>
   <span className='font-display'> Jefferson Hospitality </span> is a company that concentrates on upscale lodging, lifestyle restaurants, and nightlife venues. They also have a division focused on independent projects, and they are focused on art, culture, and design. Since the beginning, <span className='font-display'> Jefferson Hospitality </span> has always been fascinated with giving guests the best possible experience.  <p className='flex gap-2'>  <p><a href='/' className=' underline font-semibold '>Learn More </a> </p> <BsArrowUpRightCircle className='mt-4'/></p>
    </p>



    <div className='mt-16'>
    <h5 className='text-2xl'>OUR MILESTONE</h5>
    </div>
      
    </div>
  )
}

export default Intro
