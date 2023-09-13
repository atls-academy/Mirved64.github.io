import styled                 from '@emotion/styled'

import React                  from 'react'
import { FC }                 from 'react'
import { PropsWithChildren }  from 'react'
import { motion }             from 'framer-motion'
import { useMemo }            from 'react'

import { AnimateOnLoadProps } from './animate-on-load.interfaces'

export const AnimateOnLoad: FC<PropsWithChildren<AnimateOnLoadProps>> = ({
  animate,
  initial,
  transition,
  style,
  children,
}) => {
  const Motion = useMemo(
    () =>
      styled(motion.div)({
        display: 'flex',
        boxSizing: 'border-box',
        // width: '100%',
        // height: '100%',
        ...(style || {}),
      }),
    // eslint-disable-next-line
    []
  )
  return (
    <Motion animate={animate} transition={transition} initial={initial}>
      {children}
    </Motion>
  )
}
