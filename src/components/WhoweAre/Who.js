import React from 'react'
import Line from '../../utils/images/Frame 216.png'
import Food from '../../utils/images/food.png'
import Add from '../../utils/images/Add.png'
import May from '../../utils/images/May.png'
import { Leadership, Executives, Lifestyle, Culture } from '../utils/Data'
import { motion } from 'framer-motion'
import RotatingImage from '../utils/RotatingImage'
import RotatingSmallText from '../utils/RotatingSmallText'
import RotatingText from '../utils/RotatingText'

function Who() {
  return (
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <section className='md:px-40 px-3 py-20 lg:py-10'>
    <motion.div initial={{y: 90}} animate={{ y: 0 }} transition={{ duration: 1 }} className='flex gap-2 mt-10'>
    <RotatingImage />
    <RotatingText text='WHO WE ARE' />
    </motion.div>


    <p className='text-2xl md:text-3xl mt-8 font-sans border-b-[1px] py-5'>A Future Built on partnership , A History Built On Experience.</p>

    <div className='py-10 mt-5 font-readex not-italic'>
    <p className='leading-9 md:leading-10'><span className='text-2xl md:text-3xl font-bold'>Jefferson hospitality</span>  is Established by Founder and Principal Jeffrey Oduma, JHG is a privately held, leading lifestyle hospitality company that develops, manages and operates hotels, residences, restaurants and bars. Through exclusive partnerships with cultural visionaries, JHG is devoted to creating extraordinary experiences through its proprietary brands with a commitment to authenticity, sophistication, mastery and innovation.  Widely recognized as an innovator in the industry. The company provides expert guidance through all stages of the hospitality property cycle, from planning and development through recapitalization or disposition. Highgate also has the creativity and bandwidth to develop bespoke hotel brands and utilizes industry-leading proprietary revenue management tools that identify and predict evolving market dynamics to drive outperformance and maximize asset value.  <br/>
    The business has made more than 10 real estate and hospitality investments in various states worth over 10 billion Naira in total capitalization and has over 3.8 billion in assets under management. Jefferson has built a family of hospitality, development, and management company brands, and its continued success is a result of its core principles: Relevance, Relationships, Resilience, and Responsibility</p>
    </div>

    <section>

    <motion.div className='flex gap-2 mt-10'>
    <RotatingImage />
    <RotatingSmallText text="OUR TEAM" />
    </motion.div>

    <p className='text-xl md:text-2xl mt-8  border-b-[1px] py-5 font-sans leading-9 md:leading-10'>We’re a unique team of the brightest doers, smartest thinkers and most talented makers from inside and outside the hospitality industry.</p>


    <div className='py-10'>
    <h1 className='text-2xl font-sans '>Leadership</h1>

    <section className='flex flex-wrap md:flex-nowrap justify-between gap-5 md:gap-14 mt-10'>

   {Leadership.map((leader) => ( <div className='border-[0.5px] px-5 md:px-8 py-5 text-center' key={leader.id}>
    <img src={leader.img} alt='jeff' className='w-[450px]' />

    <h1 className='text-xl md:text-2xl mt-5 mb-2 font-sans'>{leader.fullName}</h1>
    <p className='text-base md:text-xl font-sans'>{leader.position}</p>
    </div>))}

    </section>

    </div>

    
    </section>

    <section>
    <h1 className='text-3xl md:text-4xl mt-10 font-sans border-b-[1px] pb-5'>Executive Management</h1>

    <section className='flex gap-[30px] flex-wrap mt-10'>

    {Executives.map((executive) => ( <div className='border w-[48%] md:w-[30%]  xl:w-[23%] px-3 md:px-6 xl:px-10 py-14 text-center' key={executive.id}>
    <h1 className='mb-5 font-sans text-xl md:text-2xl'>{executive.fullName}</h1>
    <p>{executive.position}</p>
    </div>
))}

    </section>
    
    </section>


    <section>
    <h1 className='text-3xl md:text-4xl mt-10 font-sans border-b-[1px] pb-5 py-10'>LIFESTYLE & HOTEL MANAGEMENT</h1>

    <section className='flex gap-[30px] flex-wrap mt-10'>
    {Lifestyle.map((life) => ( <div className='flex flex-col justify-between border w-[45%] md:w-[30%] xl:w-[30%] px-7  xl:px-10 py-14 text-center' key={life.id}>
    <h1 className='mb-5 font-sans text-xl md:text-2xl'>{life.fullName}</h1>
    <p>{life.position}</p>
    <p className='mt-5'>{life.email}</p>
    </div>
))}

    </section>
    
    </section>


    <section>
    <h1 className='text-4xl mt-10 font-sans border-b-[1px] pb-5 py-10 uppercase'>Our Culture</h1>

    <p className='mt-5 leading-8 not-italic font-readex'> Culture is paramount at Jefferson Hospitality, and at its core are four foundational values that shape our identity and guide every aspect of our operations. These values serve as the DNA of our organization, influencing how we work and collaborate:</p>

    <section className='flex justify-between gap-10 flex-wrap mt-10'>

  { Culture.map((cul) => ( <div className='border px-10 py-14 md:w-[45%] xl:w-[45%] ' key={cul.id}>
    <h1 className='text-3xl'>{cul.title}</h1>
    <p className='mt-5 leading-8 font-readex not-italic' >{cul.summary}</p>
    </div>))}


    </section>
    </section>


    <section className='mt-10 mb-16'>
    <h1 className='text-3xl md:text-4xl font-sans border-b-[1px] pb-5 py-10 uppercase'>OUR NETWORK</h1>

    <div>

    <h1 className='text-3xl font-sans border-b-[1px]  py-10'>Food & Beverage</h1>

    <p className='py-8 font-readex not-italic'>Partnering with renowned food and beverage companies adds a distinctive value of excitement to Jefferson properties</p>
    
    <img src={Food} alt='food' />
    </div>
    <div>

    <h1 className='text-3xl font-sans border-b-[1px]  py-10'>Design</h1>

    <p className='py-8 font-readex not-italic'>Jefferson consistently compiles world-class teams of architects and designers to execute unique and innovative hotel concepts</p>

    <div className='flex gap-10 text-center'>

    <div>
    <img src={Add} alt='Add'  />
    <p>ADO SUPPLIES</p>
    </div>

    <div>
    <img src={May} alt='May' />
    <p>MAYFAIR DESIGN STUDIO</p>
    </div>
    </div>
    
    

    </div>
    </section>


  </section>
    </motion.div>
  )
}

export default Who
