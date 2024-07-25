import React from 'react'
import { motion } from 'framer-motion'

function RotatingText({ text }) {
  return (
    <motion.p
    initial={{ x: 30, rotate: -45 }}
    animate={{ x: 0, rotate: 0 }}
    transition={{ duration: 1 }}
    className='text-3xl md:text-4xl'
  >
    {text}
  </motion.p>
  )
}




export default  RotatingText
