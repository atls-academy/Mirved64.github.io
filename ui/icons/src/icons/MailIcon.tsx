import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const MailIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 18 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3 0C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V3.3015L9 8.148L18 3.303V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.31607 15.7956 0 15 0H3ZM18 5.0055L9.3555 9.66C9.24624 9.71882 9.12409 9.74961 9 9.74961C8.87591 9.74961 8.75376 9.71882 8.6445 9.66L0 5.0055V12C0 12.7956 0.31607 13.5587 0.87868 14.1213C1.44129 14.6839 2.20435 15 3 15H15C15.7956 15 16.5587 14.6839 17.1213 14.1213C17.6839 13.5587 18 12.7956 18 12V5.0055Z'
        fill='#3A375D'
      />
    </svg>
  )
}
