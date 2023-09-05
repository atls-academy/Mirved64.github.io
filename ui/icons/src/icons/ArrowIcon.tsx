import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ArrowIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 51 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M50.0607 12.38C50.6464 11.7942 50.6464 10.8445 50.0607 10.2587L40.5147 0.712734C39.9289 0.126947 38.9792 0.126947 38.3934 0.712734C37.8076 1.29852 37.8076 2.24827 38.3934 2.83405L46.8787 11.3193L38.3934 19.8046C37.8076 20.3904 37.8076 21.3402 38.3934 21.9259C38.9792 22.5117 39.9289 22.5117 40.5147 21.9259L50.0607 12.38ZM0 12.8193H49V9.81934H0V12.8193Z'
        fill='white'
      />
    </svg>
  )
}
