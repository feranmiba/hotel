import React from 'react'
import { motion } from 'framer-motion'
import Line from '../../utils/images/Frame 216.png'
import BorderWithCircle from './BorderWithCircle'


function RotatingImage() {
  return (
  <motion.div  initial={{ x: -30, rotate: 45 }}
  animate={{ x: 0, rotate: 0 }}
  transition={{ duration: 1 }}
  className='w-[25%] mt-2'
  >
  <BorderWithCircle />
  
  </motion.div>
  )
}

export default RotatingImage
