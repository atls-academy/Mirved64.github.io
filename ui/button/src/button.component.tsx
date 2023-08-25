import { Content }        from '@atls-ui-parts/button'

import React              from 'react'
import { FC }             from 'react'
import { forwardRef }     from 'react'

import { useHover }       from '@ui/utils'
import { usePressed }     from '@ui/utils'

import { IconAttachment } from './attachment'
import { ButtonElement }  from './button.element'
import { ButtonProps }    from './button.interfaces'

export const Button: FC<ButtonProps> = forwardRef(({ children, ...props }, ref) => {
  const { hover, hoverProps } = useHover()
  const { pressed, pressedProps } = usePressed()

  return (
    <ButtonElement
      {...props}
      ref={ref}
      contentAlign='space-between'
      hover={hover}
      pressed={pressed}
      {...hoverProps}
      {...pressedProps}
    >
      <Content>{children}</Content>

      <IconAttachment
        icon={props.icon}
        widthIcon={props.widthIcon}
        heightIcon={props.heightIcon}
        backgroundIcon={props.backgroundIcon}
        radiiIcon={props.radiiIcon}
      />
    </ButtonElement>
  )
})
