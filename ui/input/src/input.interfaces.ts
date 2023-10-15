import { InputProps as BaseInputProps } from '@atls-ui-parts/input'

export type InputSize = 'normalSizeNormalRadii' | 'bigSizeRegularRadii' | 'textarea'

export type InputVariant = 'common' | 'search'

export interface InputProps extends BaseInputProps {
  addon?: JSX.Element | null
  variant: InputVariant
  size: InputSize
  placeholder: string
  ref?: any
  icon?: JSX.Element | null
  widthIcon?: number | number[]
  heightIcon?: number | number[]
  textarea?: boolean
  filled?: boolean | string
}
