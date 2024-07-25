import React from 'react'
import { milestone } from '../utils/Data'
import Business from './Business'


function Milestone() {
  return (
    <div>
     
    <section className=' border-t-2'>
    <div>
    <div className='px-8 md:px-40 py-5 flex flex-wrap lg:flex-nowrap justify-around gap-7 items-start'>
    {milestone.map((miles) =>  (
       <div className='w-[400px] md:w-[45%] lg:w-[400px] px-5 py-14   bg-[#111111] rounded-lg shadow-xl not-italic'>
  
      <h1 className='mt-3 font-bold text-[45px] font-display'>{miles.no}</h1>
      <p className='mt-3 font-semibold text-2xl font-display'>{miles.title}</p>
      <p className='mt-3 font-normal text-base leading-8 font-readex '>{miles.summary}</p>
      </div> 
   ) )}
   </div>
   <Business />
   </div>
      </section>
    </div>
  )
}

export default Milestone
