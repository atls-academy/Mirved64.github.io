import styled          from '@emotion/styled'
import { Content }     from '@atls-ui-parts/button'

import React           from 'react'
import { FC }          from 'react'
import { layout }      from 'styled-system'
import { space }       from 'styled-system'

import { ButtonProps } from './button.interfaces'
import { baseStyles }  from './button.styles'

export const ButtonElement = styled.button<any>(baseStyles, layout, space)

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonElement {...props}>
    <Content>{children}</Content>
  </ButtonElement>
)
