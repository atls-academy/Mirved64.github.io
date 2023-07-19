import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant = 'transparentBackgroundWhiteText' | 'transparentBackgroundBlackText'

export type ButtonSize = 'normal' | 'big'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
  gap?: number
  icon?: object
  widthIcon?: number | number[]
  heightIcon?: number | number[]
  backgroundIcon?: string
}
