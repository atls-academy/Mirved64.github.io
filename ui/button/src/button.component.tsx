import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'

import { ButtonProps }      from './button.interfaces'
import { baseStyles }       from './button.styles'
import { contentStyles }    from './button.styles'
import { fillStyles }       from './button.styles'
import { appearanceStyles } from './styles'

export const ButtonElement = styled('button')<any>(
  baseStyles,
  contentStyles,
  appearanceStyles,
  fillStyles
)

export const Button: FC<ButtonProps> = forwardRef(({ children, divider, ...props }, ref) => (
  <ButtonElement {...props} ref={ref} divider={divider}>
    <Content divider={divider}>{children}</Content>
  </ButtonElement>
))
