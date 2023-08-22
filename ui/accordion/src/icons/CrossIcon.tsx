import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'
import { FC }        from 'react'
import { motion }    from 'framer-motion'

import { IconProps } from './icons.interfaces'

export const CrossIcon: FC<IconProps> = ({ hover, ...props }) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <motion.path
        d='M1.00009 7.00011H13.0001M7.00009 1.00011V13.0001'
        stroke={hover ? '#4D3CF2' : '#3A375D'}
        strokeWidth={1.75}
        strokeLinecap='round'
      />
    </svg>
  )
}
