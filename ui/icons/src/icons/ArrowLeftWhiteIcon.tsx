import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ArrowLeftWhiteIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 8 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.5 0.999999L1.5 6L6.5 11'
        stroke='white'
        strokeWidth={1.25}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
