import React        from 'react'

import { NextLink } from '@ui/link'

import { Icon }     from './icon.component'

export const Logo = ({ fill, logoWidth, logoHeight }) => (
  <NextLink path='/'>
    <Icon fill={fill} logoWidth={logoWidth} logoHeight={logoHeight} />
  </NextLink>
)
