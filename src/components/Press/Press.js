import React from 'react'
import { motion } from 'framer-motion'
import Fine from '../../utils/images/press.png'
import RotatingImage from '../utils/RotatingImage'
import { resort } from '../utils/Data'
import Slider from '../utils/Slider'
import RotatingText from '../utils/RotatingText'
import BorderWithCircle from '../utils/BorderWithCircle'

function Press() {
  return (
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <section className='px-5 lg:px-40 py-20  lg:py-10'>
    <motion.div initial={{y: 90}} animate={{ y: 0 }} transition={{ duration: 1 }} className='flex gap-2 mt-10'>
    <RotatingImage />
    <RotatingText text='PRESS' />
    </motion.div>
    </section>
    <div className='relative w-full h-[250px] md:h-[500px]'>
    <img src={Fine} alt='gg' className='h-full w-full object-cover z-0' />
</div>

<div className='relative'>
    <div className='absolute inset-x-0  top-auto bottom-20 px-4 md:px-14 py-6 md:py-10 font-display not-italic text-left flex flex-col items-start justify-center'>
        <p className='text-lg md:text-4xl w-full md:w-[700px]'>
            42 Best Hotels in New York City
        </p>
        <p className='leading-6 md:leading-8 text-sm md:text-xl pt-2 md:pt-10 w-full md:w-[700px]'>
            New York is a city built on dreams during waking and sleeping hours alike. We’re thankful, then, that the town has so many places to grab some shut-eye-all...........
        </p>
        
    </div>
</div>





    <section className='bg-[#000000]'>

    <section className='px-5 md:px-40  py-20 lg:py-10'>
    <div>
    <h1 className='text-3xl font-sans py-6'>Resorts / Venues</h1>
    <BorderWithCircle />
     </div>
    
    <Slider press={resort} />
    </section>
    
    
    </section>


    <section className='px-5 md:px-40 py-10  lg:py-10'>
    <div>
    <h1 className='text-3xl font-sans py-6'>Awards</h1>
    <BorderWithCircle />
     </div>
    
    <Slider press={resort} />
    </section>
      
    </motion.div>
  )
}

export default Press
