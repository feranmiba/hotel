import React from 'react'
import Line from '../../utils/images/Frame 216.png'
import { Experience } from '../utils/Data'
import { motion } from 'framer-motion'
import RotatingImage from '../utils/RotatingImage'
import RotatingText from '../utils/RotatingText'

function Career() {
  return (
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <section className='px-3 md:px-40  py-20 lg:py-10'>
    <motion.div initial={{y: 90}} animate={{ y: 0 }} transition={{ duration: 1 }} className='flex gap-2 mt-10 mb-10'>
    <RotatingImage />
    <RotatingText text='CAREER' />
    </motion.div>

    <div className='border-t-[1px]'>
    <p className='leading-8 py-10 font-readex not-italic'>Being part of the Jefferson Family means embracing a shared dedication to providing exceptional service and upholding our core values of authenticity, sophistication, mastery, and innovation. You'll have the opportunity to contribute your unique skills and ideas, knowing that your efforts are valued and recognized.</p>
     </div>

     <section>
     <h1 className='text-4xl font-sans my-10'>THE JEFFERSON EXPERIENCE</h1>

     <div className='border-t-[1px]'>
     <section className='flex justify-between gap-10 flex-wrap mt-10'>
     {Experience.map((cul) => ( <div className='border px-10 py-14 md:w-[40%] xl:w-[45%]' key={cul.id}>
       <h1 className='text-3xl'>{cul.title}</h1>
       <p className='mt-5 leading-8 font-readex not-italic' >{cul.summary}</p>
       </div>))}
       </section>
      </div>
     </section>


     <div className='mt-20 mb-10'>
     <h1 className='text-4xl uppercase font-sans'>BENEFITS</h1>

     <div className='border-t-[1px] mt-5'>
     <p className='leading-8 py-5 not-italic font-readex'>Jefferson understands that taking care of our employees is essential for delivering exceptional hospitality. We offer a competitive benefits package designed to ensure that our staff feels valued and supported in all aspects of their lives.</p>
      </div>
     </div>


     <div className='mt-20 mb-10'>
     <h1 className='text-4xl uppercase font-sans'>OPPORTUNITIES</h1>

     <div className='border-t-[1px] mt-5'>
     <p className='leading-8 py-5 font-readex not-italic'>If you're passionate about hospitality, Jefferson invites you to join our dynamic and rewarding team. When you join Jefferson, you become part of a cohesive group committed to delivering world-class service to every guest, every time. Join us and discover the possibilities for growth, fulfilment, and making a lasting impact in the hospitality industry.</p>
      </div>
     </div>

    </section>
      
    </motion.div>
  )
}

export default Career
