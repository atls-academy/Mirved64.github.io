import React                  from 'react'
import { FC }                 from 'react'
import { PropsWithChildren }  from 'react'
import { motion }             from 'framer-motion'

import { AnimateOnLoadProps } from './animate-on-load.interfaces'

export const AnimateOnLoad: FC<PropsWithChildren<AnimateOnLoadProps>> = ({
  animate,
  initial,
  transition,
  style,
  children,
}) => (
  <motion.div
    style={{
      display: 'flex',
      boxSizing: 'border-box',
      ...(style || {}),
    }}
    animate={animate}
    initial={initial}
    transition={transition}
  >
    {children}
  </motion.div>
)
