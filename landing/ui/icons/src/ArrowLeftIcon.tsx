import { useTheme } from '@emotion/react'

/* eslint-disable */
import React        from 'react'

export const ArrowLeftIcon = (props: any) => {
  const theme: any = useTheme()
  return (
    <svg
      width='10px'
      height='5px'
      viewBox='0 0 8 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7 13L1 7L7 1'
        stroke='#3A375D'
        strokeWidth={1.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
