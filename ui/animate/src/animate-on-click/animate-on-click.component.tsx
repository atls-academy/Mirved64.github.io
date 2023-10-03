import React                   from 'react'
import { FC }                  from 'react'
import { PropsWithChildren }   from 'react'
import { motion }              from 'framer-motion'

import { AnimateOnClickProps } from './animate-on-click.interfaces'

export const AnimateOnClick: FC<PropsWithChildren<AnimateOnClickProps>> = ({
  animate,
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
  >
    {children}
  </motion.div>
)
