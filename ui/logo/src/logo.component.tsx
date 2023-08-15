import React        from 'react'

import { NextLink } from '@ui/link'

import { Icon }     from './icon.component'

export const Logo = ({ fill, width, height }) => (
  <NextLink path='/'>
    <Icon fill={fill} width={width} height={height} />
  </NextLink>
)
