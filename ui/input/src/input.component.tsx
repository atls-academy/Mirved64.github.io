import { RawInput }                 from '@atls-ui-parts/input'
import { Layout }                   from '@atls-ui-parts/layout'
import { useChangeValue }           from '@atls-ui-parts/input'
import { createTextareaProps }      from '@atls-ui-parts/input'

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
  {
    disabled,
    onChange,
    addon,
    placeholder,
    icon,
    widthIcon,
    heightIcon,
    size,
    textarea = false,
    filled,
    ...props
  },
  ref
) => {
  const { hover, hoverProps } = useHover()
  const { focus, focusProps } = useFocus()

  const changeValue = useChangeValue(disabled, onChange)

  const { containerProps, rawInputProps } = createTextareaProps()

  return (
    <InputElement
      {...props}
      size={size}
      hover={hover}
      focus={focus}
      filled={filled}
      textarea={textarea}
      disabled={disabled}
      {...hoverProps}
      {...focusProps}
      {...(textarea && containerProps)}
    >
      <Condition match={!!icon}>
        <IconAttachment icon={icon} widthIcon={widthIcon} heightIcon={heightIcon} />

        <Layout width={12} />
      </Condition>

      <RawInput
        placeholder={placeholder}
        onChange={changeValue}
        ref={ref}
        {...(textarea && rawInputProps)}
        style={{ resize: 'none', width: '100%', height: '100%' }}
      />

      {addon}
    </InputElement>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
