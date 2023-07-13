import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const TelegramIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 19 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.285 0.0986285L1.34049 6.20802C0.252339 6.6423 0.258635 7.24547 1.14085 7.51444L5.23445 8.78332L14.7058 2.84549C15.1537 2.57473 15.5629 2.72039 15.2265 3.01706L7.55283 9.8985H7.55103L7.55283 9.8994L7.27045 14.0921C7.68413 14.0921 7.86669 13.9035 8.09871 13.681L10.0871 11.7598L14.2229 14.7953C14.9855 15.2126 15.5332 14.9982 15.7229 14.0939L18.4379 1.38002C18.7158 0.272876 18.0126 -0.228421 17.285 0.0986285Z'
        fill='white'
      />
    </svg>
  )
}
