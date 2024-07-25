import React, { useEffect, useState } from 'react';
import Intro from './Intro';
import Milestone from './Milestone';
import { FirstImages } from '../utils/Data';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  const Button = [
    "Lifestyle & Luxury",
    "Resort",
    "Full Service",
    "Select Service"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === FirstImages.length - 1 ? 0 : prevSlide + 1));
      setActiveButton((prevButton) => (prevButton === Button.length - 1 ? 0 : prevButton + 1));
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [FirstImages.length, Button.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='no-scrollbar w-full overflow-x-hidden'
    >
      <div className='relative w-full h-screen'>
        <AnimatePresence>
          {FirstImages.map((first, index) => (
            <motion.div
              key={first.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? 0 : 50 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`absolute top-0 left-0 w-full h-full ${index === currentSlide ? 'block' : 'hidden'}`}
            >
              <img src={first.img} alt='Slide Image' className='w-full h-full object-cover' />
            </motion.div>
          ))}
        </AnimatePresence>

        <div className='absolute bottom-32 inset-x-0 flex flex-col items-center justify-center text-center z-10'>
          <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl md:w-[800px] font-sans px-4 lg:px-0'>
            We Build Successful <span className='text-[#F9B600]'>Hospitality</span> Business
          </p>

          <div className='mt-4 w-full flex justify-center'>
            <div className='border-t-[1px] flex justify-between w-[80%] md:w-[60%] lg:w-[70%]'>
              {Button.map((label, index) => (
                <button
                  key={index}
                  onClick={() => setActiveButton(index)}
                  className={`py-2 px-4 ${activeButton === index ? 'border-b-2 border-[#F9B600]' : ''} text-sm md:text-base lg:text-lg font-light`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='relative z-0  px-5 md:px-40  py-10'>
        <Intro /> 
      </div>
      <Milestone />
    </motion.div>
  );
}

export default Home;


