import React      from 'react'
import { FC }     from 'react'
import { motion } from 'framer-motion'

export const MinusIcon: FC = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <motion.path
      d='M2.00009 8.00011H14.0001'
      stroke='#3A375D'
      strokeWidth='1.75'
      animate={{ d: 'M2.00009 8.00011H14.0001' }}
      transition={{ duration: 0.3 }}
    />
    <path d='M2.00009 8.00011H14.0001' stroke='#3A375D' strokeWidth={1.75} strokeLinecap='round' />
  </svg>
)
