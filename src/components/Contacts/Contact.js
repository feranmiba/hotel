import React from 'react'
import Line from '../../utils/images/Frame 216.png'
import { motion } from 'framer-motion'
import RotatingImage from '../utils/RotatingImage'
import RotatingText from '../utils/RotatingText'

function Contact() {
  return (
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <section className='px-3 md:px-40  py-20 lg:py-10'>
    <motion.div initial={{y: 90}} animate={{ y: 0 }} transition={{ duration: 1 }} className='flex gap-2 mt-10 mb-10'>
    <RotatingImage />
    <RotatingText text='CONTACT' />
    </motion.div>


    <div className='border-t-[1px]'>

    <div className='flex justify-between flex-wrap gap-10 md:gap-0 md:flex-nowrap py-14'>

    <div>
    <p className='text-2xl font-sans mb-8'>General Inquiries</p>
    <p className='font-readex not-italic'><a href='mailto:info@jeffersonhospitality.co.uk'>info@jeffersonhospitality.co.uk</a></p>
    </div>

    <div>
    <p className='text-2xl font-sans mb-8'>Employment Verification</p>
    <p  className='font-readex not-italic'><a href='mailto:info@Employment Verification.co.uk'>info@Employment Verification.co.uk</a></p>
    </div>

    </div>
    
    </div>


    <div className='border-t-[1px]'>

    <div className='flex justify-between  flex-wrap gap-10 md:gap-0 md:flex-nowrap  py-14'>

    <div>
    <p className='text-2xl font-sans mb-8'>Career Opportunities</p>
    <p className='font-readex not-italic'><a href='mailto:jeffersonhospitality.co.uk'>jeffersonhospitality.co.uk</a></p>
    </div>

    <div className='font-readex not-italic'>
    <p className='text-2xl font-sans italic mb-8'>Acquisitions / Development</p>
   <p className='mb-3'>AKU GOLD</p> 
  <p className='mb-3'>Head,  Assets Management</p>

    <p><a href='mailto:gold@jeffersonhospitality.co.uk'>gold@jeffersonhospitality.co.uk</a></p>
    </div>

    </div>
    
    </div>


<section>
<motion.div initial={{y: 90}} animate={{ y: 0 }} transition={{ duration: 1 }} className='flex gap-2 mt-10 mb-10'>
<RotatingImage />
<RotatingText text='OUR OFFICE' />
</motion.div>

    <div className='border-t-[1px]'>

    <div className='flex justify-between flex-wrap gap-10 md:gap-0 md:flex-nowrap py-14'>

    <div>
    <p className='text-2xl font-bold mb-8'>Abuja Office</p>
    <p className='w-[350px]'>
    Zone B06, ARTISAN PLACE Mabushi 900108, Abuja, Federal Capital Territory</p>
    </div>

    <div>
    <p className='text-2xl font-bold mb-8'>Abuja Office</p>
    <p className='w-[350px]'>
    Suite 4, Plot 284, Cadastral, Mabushi, Abuja 900108, Federal Capital Territory</p>
    </div>

    </div>
    
    </div>
    </section>

    </section>   
    </motion.div>
  )
}

export default Contact
