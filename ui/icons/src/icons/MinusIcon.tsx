import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'
import { FC }        from 'react'
import { motion }    from 'framer-motion'

import { IconProps } from '../icons.interfaces'

export const MinusIcon: FC<IconProps> = ({ hover, ...props }: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <motion.path
        d='M2.00009 8.00011H14.0001'
        stroke={hover ? '#4D3CF2' : '#3A375D'}
        strokeWidth={1.75}
        strokeLinecap='round'
      />
    </svg>
  )
}
