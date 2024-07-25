import React, { useState, useEffect } from 'react'
import Line from '../../utils/images/Frame 216.png'
import { management, assest, Slider } from '../utils/Data'
import pic1 from '../../utils/images/white-sky-umbrella-nobody-party 2.png'
import pic2 from '../../utils/images/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer 2.png'
import pic3 from '../../utils/images/umberalla.png'
import { motion, AnimatePresence } from 'framer-motion'
import RotatingImage from '../utils/RotatingImage'
import RotatingSmallText from '../utils/RotatingSmallText'
import RotatingText from '../utils/RotatingText'
import Dots from '../utils/Dots'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import BorderWithCircle from '../utils/BorderWithCircle'

function What() {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const slides = Slider.slice(0, 4); 


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === Slider.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Change slide every 3 seconds (5000 milliseconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [Slider.length]);
  return (
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='no-scrollbar w-full h-full overflow-x-hidden'>

    <section className='md:px-40 px-3 py-20 lg:py-10'>
    <motion.div initial={{y: 90}} animate={{ y: 0 }} transition={{ duration: 1 }} className='flex gap-2 mt-10'>
    <RotatingImage />
    <RotatingText text='WHAT WE DO' />
    </motion.div>
  


    <p className='text-2xl md:text-3xl mt-8  border-b-[1px] py-5 font-sans leading-9 md:leading-10'>We curate and manage unique properties and experiences in some of the most exciting destinations. </p>

    <div className='py-10 mt-5'>
    <p className='leading-10 font-readex not-italic'><span className='text-2xl md:text-3xl font-bold'>Jefferson hospitality</span>  iJefferson leverages its expertise in both hospitality management and investing to provide significant advantages to its partners, owners, and other key stakeholders. By combining market intelligence, scale, technology, and innovation, Jefferson creates synergies that enhance operations and drive growth across the board.</p>
    </div>


     </section>
     <section>
     <AnimatePresence>
    {Slider.map((slide, index) => ( <motion.div
      key={index}
      initial={{ opacity: 1, x: 200 }}
      animate={{ opacity: 1, x: index === currentSlide ? 0 : 200 }}
      exit={{ opacity: 1, x: -200 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full h-1/2 ${index === currentSlide ? 'block' : 'hidden'}`}
      >
     <img src={slide} alt='slide' />
     </motion.div>))}
     </AnimatePresence>
     <Dots currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
     </section>

     <section className='md:px-40 px-3 py-20 mt-16'>

     <motion.div className='flex border-b-[1px] pb-10 gap-2 mt-10'>
     <RotatingImage />
     <RotatingSmallText text="Business & capabilities" />
     </motion.div>

     <div className='mt-10 flex gap-2 text-xl  flex-wrap not-italic font-sans'>
     <p className='border-b-[1px] w-[45%] md:w-[32%] h-[96px] flex justify-center items-center '>Management</p>
     <p className='border-b-[1px] w-[45%] md:w-[32%] h-[96px] flex justify-center items-center'>Development</p>
     <p className='border-b-[1px] w-[45%] md:w-[32%] h-[96px] flex justify-center items-center'>Investment Management</p>
     <p className='border-b-[1px] w-[45%] md:w-[32%] h-[96px] flex justify-center items-center'>Technology Ventures</p>
     </div>



     <section className='mt-14 py-20'>
     <div className='flex gap-2  pb-10  border-b-[1px] '>
     <p className='text-3xl md:text-4xl font-sans'>MANAGEMENT</p>
     </div>


     <div className='mt-10 font-readex not-italic'>
     <p className='leading-8'>Jefferson is internationally recognized as a leading operator across various markets and asset types. Each segment of the portfolio functions as a dedicated business unit, supported by a specialized team. This structure ensures focused and efficient management, enabling Jefferson to maintain its dominance and deliver exceptional performance across its diverse operations.  </p>
    <p className='mt-5 font-light flex gap-2 text-2xl'>View our portfolio <BsArrowUpRightCircle className='text-2xl mt-1'/> </p>
     </div>


     <section>
    {management.map((manage) => ( <div>

      <motion.div className='flex gap-2 mt-10'>
      <RotatingImage />
      <RotatingSmallText text={manage.title} />
      </motion.div>

    <div className='flex ml-28 md:ml-72 mt-5'>
    <p className='leading-7 md:leading-8 font-readex not-italic text-sm md:text-base'>{manage.summary}</p>
    </div>

    </div>
)) }
    </section>



    <section>
    <motion.div className='flex gap-2 mt-10'>
      <RotatingImage />
      <RotatingSmallText text="ASSET MANAGEMENT" />
      </motion.div>
    


    <div className='flex  md:ml-72 mt-10 justify-between gap-20 flex-wrap'>
    {assest.map((asses) => (<div className='mt-2'>
    <h2 className='border-b-[1px] pb-4 not-italic font-readex'>{asses.title}</h2>

  { asses.rest.map((rest) => ( <ul className='flex flex-col gap-5 mt-5 font-readex not-italic'>
    <li>{rest}</li>
    
    </ul>))}
    </div>))}

  
    
    </div>
    
    
    </section>

     </section>


     <section>

     <div  className='flex gap-5'>
     <div>
     <img src={pic1} alt='pic1' />
     </div>
     <div>
     <img src={pic2} alt='pic1' />
     </div>
     </div>


     <img src={pic3} alt='pic3' className='mt-6'/>
     </section>


     <section className='mt-16 py-20'>
     <h1 className='text-3xl md:text-4xl'>DEVELOPMENT</h1>

     <div className='mt-10'>
     <h2 className='border-b-[1px] pb-5 text-xl md:text-2xl'>DEVELOP WITH  US</h2>

     <p className='leading-8 mt-5 not-italic font-readex'>Our development team provides access to the industry's largest collective of lifestyle and leisure brands. We are passionate about helping you create a long-term vision for your project and are dedicated to boosting performance and returns through our expertise and support. </p>
     </div>

     <div className='mt-10'>
     <h2 className='border-b-[1px] pb-5 uppercase text-xl md:text-2xl '>Why Jefferson?</h2>

     <p className='leading-8 mt-5 not-italic font-readex'>Jefferson leads in lifestyle and leisure hospitality, recognized as one of the fastest-growing segments in the industry. Innovation is central to our approach, supported by four specialized in-house studios: a fully integrated F&B concept platform, a digital product and tech innovation team, and a partnerships and collaborations division. These studios enable us to continually innovate and deliver exceptional experiences across our portfolio.</p>
     </div>
     </section>
     
     </section>



    </motion.div>
  )
}

export default What
