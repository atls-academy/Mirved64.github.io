import React         from 'react'
import { FC }        from 'react'

import { NextLink }  from '@ui/link'

import { Icon }      from './icon.component'
import { LogoProps } from './logo.interfaces'

export const Logo: FC<LogoProps> = ({ fill, width, height }) => (
  <NextLink path='/'>
    <Icon fill={fill} width={width} height={height} />
  </NextLink>
)
