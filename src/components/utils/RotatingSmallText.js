import React from 'react'
import { motion } from 'framer-motion'

function RotatingSmallText({ text }) {
    return (
      <motion.p
      initial={{ x: 30, rotate: -45 }}
      animate={{ x: 0, rotate: 0 }}
      transition={{ duration: 1 }}
      className='text-2xl md:text-3xl font-sans'
    >
      {text}
    </motion.p>
    )
  }

  

export default  RotatingSmallText