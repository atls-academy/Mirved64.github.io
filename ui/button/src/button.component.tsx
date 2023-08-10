import { Content }        from '@atls-ui-parts/button'
import { Layout }         from '@atls-ui-parts/layout'

import React              from 'react'
import { FC }             from 'react'
import { forwardRef }     from 'react'

import { IconAttachment } from './attachment'
import { ButtonElement }  from './button.element'
import { ButtonProps }    from './button.interfaces'

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
