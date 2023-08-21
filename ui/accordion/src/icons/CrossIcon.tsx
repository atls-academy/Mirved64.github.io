import React          from 'react'
import { FC }         from 'react'
import { motion }     from 'framer-motion'

import { IconsProps } from './icons.interfaces'

export const CrossIcon: FC<IconsProps> = () => (
  <motion.div style={{ width: 20, height: 20 }} transition={{ duration: 0.3, ease: 'linear' }}>
    <svg width='20' height='20' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.00009 7.00011H13.0001M7.00009 1.00011V13.0001'
        stroke='#3A375D'
        strokeWidth={1.75}
        strokeLinecap='round'
      />
    </svg>
  </motion.div>
)
