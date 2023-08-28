import { RawInput }                 from '@atls-ui-parts/input'
import { Layout }                   from '@atls-ui-parts/layout'
import { Box }                      from '@atls-ui-parts/layout'
import { useChangeValue }           from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'

import { Condition }                from '@ui/condition'
import { useHover }                 from '@ui/utils'
import { useFocus }                 from '@ui/utils'

import { IconAttachment }           from './attachment'
import { InputElement }             from './input.element'
import { InputProps }               from './input.interfaces'

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { disabled, onChange, addon, placeholder, icon, widthIcon, heightIcon, size, ...props },
  ref
) => {
  const { hover, hoverProps } = useHover()
  const { focus, focusProps } = useFocus()
  const changeValue = useChangeValue(disabled, onChange)

  return (
    <InputElement
      {...props}
      size={size}
      hover={hover}
      focus={focus}
      disabled={disabled}
      {...hoverProps}
      {...focusProps}
    >
      <Condition match={!!icon}>
        <IconAttachment icon={icon} widthIcon={widthIcon} heightIcon={heightIcon} />

        <Layout width={12} />
      </Condition>

      <Box flexGrow='1'>
        <RawInput placeholder={placeholder} onChange={changeValue} ref={ref} />
      </Box>

      {addon}
    </InputElement>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
