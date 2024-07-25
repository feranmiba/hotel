import React from 'react'
import { motion } from 'framer-motion'
import RotatingImage from '../utils/RotatingImage'
import RotatingText from '../utils/RotatingText'
import Pics from '../../utils/images/Property 1=Slider 1.png'
import collect1 from '../../utils/images/collection(1).png'
import collect2 from '../../utils/images/collection(2).png'
import collect3 from '../../utils/images/collection(3).png'
import BorderWithCircle from '../utils/BorderWithCircle'

function Portfolio() {
  return (
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <section className='px-3 md:px-40 py-20  lg:py-10'>
    <motion.div initial={{y: 90}} animate={{ y: 0 }} transition={{ duration: 1 }} className='flex gap-10 mt-10 mb-10'>
    <RotatingImage />
    <RotatingText text='COllECTION' />
    </motion.div>




    
    <div>
    <p className='leading-8 py-10 font-readex not-italic'>Being part of the Jefferson Family means embracing a shared dedication to providing exceptional service and upholding our core values of authenticity, sophistication, mastery, and innovation. You'll have the opportunity to contribute your unique skills and ideas, knowing that your efforts are valued and recognized.</p>
     </div>
    </section>

    <img src={Pics} alt='pic'/>


    <section className='px-3 md:px-40  py-20 lg:py-10'>


    <section>
    <div>
         <h1 className='text-3xl font-sans   py-6'>Lifestyle & Luxury</h1>
         <BorderWithCircle />
    </div>
    <div className='flex gap-10 text-center py-10'>
        <div>
            <img src={collect1} alt='Add'  />
        </div>
        <div>
            <img src={collect2} alt='May' />
        </div>
        <div>
            <img src={collect3} alt='May' />
        </div>
    </div>
    </section>

    <section>
    <div>
         <h1 className='text-3xl font-sans  py-6'>Resorts / Venues</h1>
         <BorderWithCircle />
    </div>
    <div className='flex font-din uppercase not-italic font-extrabold gap-10 text-3xl text-[#aba5a5] text-center py-10'>
        <div>
          <p>playground</p>
        </div>
        <div>
        <p>THE MARQUEE</p>
        </div>
    </div>
    </section>

    <section>
    <div>
         <h1 className='text-3xl font-sans py-6'>Resorts / Venues</h1>
         <BorderWithCircle />
    </div>
    <div className='flex font-din uppercase not-italic font-extrabold gap-10 text-3xl text-[#aba5a5] text-center py-10'>
        <div>
          <p>IVY LUSH HOTEL</p>
        </div>
        <div>
        <p>FABLE & FEAST RESIDENCE</p>
        </div>
    </div>
    </section>
    
    </section>

  

    </motion.div>



  )
}

export default Portfolio