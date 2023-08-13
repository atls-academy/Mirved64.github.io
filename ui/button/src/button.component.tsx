import { Content }        from '@atls-ui-parts/button'

import React              from 'react'
import { FC }             from 'react'
import { forwardRef }     from 'react'

import { IconAttachment } from './attachment'
import { ButtonElement }  from './button.element'
import { ButtonProps }    from './button.interfaces'

export const Button: FC<ButtonProps> = forwardRef(({ children, ...props }, ref) => (
  <ButtonElement {...props} ref={ref} contentAlign='space-between'>
    <Content>{children}</Content>

    <IconAttachment
      icon={props.icon}
      widthIcon={props.widthIcon}
      heightIcon={props.heightIcon}
      backgroundIcon={props.backgroundIcon}
      radiiIcon={props.radiiIcon}
    />
  </ButtonElement>
))
