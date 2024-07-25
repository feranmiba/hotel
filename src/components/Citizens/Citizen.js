import React from 'react'
import Line from '../../utils/images/Frame 216.png'
import citizen from '../../utils/images/citizen.png'
import { Corporate } from '../utils/Data'
import { motion } from 'framer-motion'
import RotatingImage from '../utils/RotatingImage'
import RotatingText from '../utils/RotatingText'
import RotatingSmallText from '../utils/RotatingSmallText'

function Citizen() {
  return (
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <section className='px-3 md:px-40 py-20 lg:py-10'>
    <motion.div initial={{y: 90}} animate={{ y: 0 }} transition={{ duration: 1 }} className='flex gap-2 mt-10 mb-10'>
    <RotatingImage />
    <RotatingText text='CITIZENSHIP' />
    </motion.div>


    <div className='border-t-[1px]'>
   <p className='leading-8 py-10 font-readex not-italic'>Jefferson Hospitality is committed to Corporate Social Responsibility (CSR) and Environmental, Social, and Governance (ESG) principles, aiming to make a positive impact both within the hospitality industry and in the broader global community.</p>
    </div>
    </section>

    <img src={citizen} alt='citizen' />

    <section className='px-3 md:px-40  py-14'>

    <h1 className='text-3xl md:text-4xl font-sans uppercase mt-10'>Corporate Social Responsibility (CSR)</h1>

    <div className='border-t-[1px] mt-5'>
    <p className='leading-8 py-5 font-readex not-italic'>Jefferson Hospitality continuously strives to contribute positively to society and the hospitality industry. Our CSR initiatives focus on:</p>
     </div>

    {Corporate.map((cor) => ( <section key={cor.id}>
     <motion.div className='flex gap-2 mt-10'>
     <RotatingImage />
     <RotatingSmallText text={cor.title} />
     </motion.div>

    <div className='border-t-[1px] mt-5'>
    <p className='leading-8 py-5 font-readex not-italic'>{cor.summary}</p>
     </div>
     </section>))}


     <div className='mt-20 mb-10'>
     <h1 className='text-3xl md:text-4xl uppercase font-sans'>CONCLUSION</h1>

     <div className='border-t-[1px] mt-5'>
     <p className='leading-8 py-5 not-italic font-readex'>Through our CSR and ESG initiatives, Jefferson Hospitality not only strives to be a responsible corporate citizen but also aims to lead by example within the hospitality industry. By integrating sustainability, ethical practices, and diversity into our core operations, we aim to create a positive impact on the environment, society, and our stakeholders.</p>
      </div>
     </div>
    </section>
      
    </motion.div>
  )
}

export default Citizen
