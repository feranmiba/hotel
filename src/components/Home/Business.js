import React, { useState } from 'react'
import line from '../../utils/images/Frame 216.png'
import LongLine from '../../utils/images/Line 74.png'
import { press, Manage } from '../utils/Data'
import { motion } from 'framer-motion'
import  Pic from '../../utils/images/62a0b8731b0b805dada6d664_Image-2-p-500.jpeg.png'
import { BsArrowRightCircle, BsArrowUpRightCircle } from "react-icons/bs";
import RotatingImage from '../utils/RotatingImage'
import RotatingSmallText from '../utils/RotatingSmallText'


function Business() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHoverStart = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
    <section className='bg-[#000000] px-3 md:px-40  py-20 mt-20'>
      <section className=''>

      <motion.div className='flex gap-2 mt-4'>
      <RotatingImage />
      <RotatingSmallText text='Bussiness & capabilities' />
      </motion.div>

      <section className='mt-10'>
      {Manage.map((manage, index) => (
        <motion.div
          key={index}
          className='border-b-2 pb-8 mt-10'
        >
          <motion.h1  
            initial={{ y: 0 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }} 
            onHoverStart={() => handleHoverStart(index)}
            onHoverEnd={handleHoverEnd}
            onClick={() => handleHoverStart(index)}
            className='text-4xl font-sans'
          >
            {manage.title}
          </motion.h1>
          <motion.p
            variants={buttonVariants}
            initial="hidden"
            animate={hoveredIndex === index ? 'visible' : 'hidden'} 
            className={`mt-3 not-italic font-readex ${hoveredIndex === index ? 'block' : 'hidden'}`}
            transition={{ duration: 0.3 }}
          >
            {manage.summary}
          </motion.p>
        </motion.div>
      ))}
    </section>
      </section>
      </section>




      <section  className='px-3 md:px-40  py-5  mt-20'>
      <motion.div className='flex gap-2 mt-5'>
      <RotatingImage />
      <RotatingSmallText text='Corporate Citizenship' />
      </motion.div>


      <section className='flex flex-wrap md:flex-nowrap justify-between gap-10 mt-14'>

      <div className='border px-10 py-14 flex flex-col justify-between' >
      <h1 className='text-3xl font-sans'>SUSTAINABILITY</h1>
      <p className='mt-5 font-readex not-italic leading-8' >Jefferson Hospitality  is committed to driving resiliency and sustainability in hospitality. Our Environmental, Social and Governance (ESG) strategy supports the guest experience, construction projects, external reporting, and corporate culture.</p>

      <p className='mt-12 font-readex not-italic font-bold flex gap-3'><a href='/' >Learn more</a> <BsArrowUpRightCircle className='text-2xl'/> </p>  
      </div>

      <div className='border px-10 py-14 flex flex-col justify-between' >
      <h1  className='text-3xl font-sans'>PHILANTHROPY</h1>
      <p className='mt-5 font-readex not-italic leading-8' >Jefferson Hospitality continually strives to make an impact on hospitality as well as the greater global community. Philanthropy is at the core of our company culture, and we endeavor to instill a sense of giving back into everything we do.</p>

      <p className='mt-12 font-readex not-italic font-bold flex gap-3'><a href='/' >Learn more</a> <BsArrowUpRightCircle className='text-2xl'/> </p>  
 
      </div>

      </section> 
      </section>



 <section className='bg-[#000000] px-3 md:px-40 py-20 mt-20'>

      <div className='flex justify-between'>
    <h1 className='text-3xl'>Press & Awards</h1>

    <p className='text-2xl font-extralight font-readex not-italic flex gap-2'><a href='/' >Read more</a> <BsArrowRightCircle className='text-2xl mt-1'/> </p>  
      </div>

      <div className='mt-5'>
      <img src={LongLine} alt='line' />
      </div>

      <div className='flex flex-wrap mb-14 gap-10'>
      <button className='py-7 px-5 text-xl hover:border-b-2 transition-all duration-300'>
        Jefferson Hospitality‘s Press
      </button>
      <button className='py-7 px-5 text-xl  hover:border-b-2  transition-all duration-300'>
        Jefferson Hospitality‘s Awards
      </button>
    </div>


      <section className='flex justify-between flex-wrap xl:flex-nowrap gap-5 mt-5'>
    {press.map((pre) => ( 
       <div className='border  lg:w-[45%]  xl:w-[30%] h-[600px] sm:h-[500px] py-10 px-5  flex flex-col  justify-between '>
       <div>
       <h1 className='text-xl font-extrabold not-italic font-sans'>{pre.title}</h1>

       <p className='mt-7 not-italic font-readex leading-8 text-sm'>{pre.summary}</p>
       </div>
       
       <div className=' font-readex not-italic font-light'>
       <p className='mt-3 flex gap-1 text-lg'>Read Article <BsArrowUpRightCircle className='text-lg mt-1'/> </p>
       <div className='mt-12 flex gap-2'>
       <img src={Pic} alt='pic' />
       <p>
       <h6>OCTOBER 25, 2022</h6>
       <h6>Condé Nast Traveler</h6>
       </p>
       </div>
       </div>
      </div>
    ))}
      </section>
   
      </section>
    </div>
  )
}

export default Business
