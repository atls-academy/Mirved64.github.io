import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const CrossIcon = (props: IconProps) => {
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
      <path
        d='M1.00009 7.00011H13.0001M7.00009 1.00011V13.0001'
        stroke='#3A375D'
        strokeWidth={1.75}
        strokeLinecap='round'
      />
    </svg>
  )
}
