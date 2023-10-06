import React                   from 'react'
import { FC }                  from 'react'
import { PropsWithChildren }   from 'react'
import { motion }              from 'framer-motion'

import { AnimateOnTimerProps } from './animate-on-timer.interface'

export const AnimateOnTimer: FC<PropsWithChildren<AnimateOnTimerProps>> = ({
  animate,
  initial,
  transition,
  whileHover,
  style,
  children,
}) => (
  <motion.div
    animate={animate}
    initial={initial}
    transition={transition}
    whileHover={whileHover}
    style={{ ...style }}
  >
    {children}
  </motion.div>
)
