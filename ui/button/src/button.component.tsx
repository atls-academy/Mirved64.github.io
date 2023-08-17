import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'

import { Layout }           from '@ui/layout'

import { IconAttachment }   from './attachment'
import { ButtonProps }      from './button.interfaces'
import { baseStyles }       from './styles'
import { contentStyles }    from './styles'
import { fillStyles }       from './styles'
import { appearanceStyles } from './styles'

export const ButtonElement = styled('button')<any>(
  baseStyles,
  contentStyles,
  appearanceStyles,
  fillStyles
)

export const Button: FC<ButtonProps> = forwardRef(({ children, gap, ...props }, ref) => (
  <ButtonElement {...props} ref={ref}>
    <Content>{children}</Content>

    <Layout flexBasis={gap} />

    <IconAttachment
      icon={props.icon}
      widthIcon={props.widthIcon}
      heightIcon={props.heightIcon}
      backgroundIcon={props.backgroundIcon}
    />
  </ButtonElement>
))
