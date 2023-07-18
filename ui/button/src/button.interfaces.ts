import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant = 'transparentBackgroundWhiteText' | 'transparentBackgroundBlackText'

export type ButtonSize = 'normal' | 'big'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
  divider?: number
  iconSvg?: object
  valueRadius?: string | object
  valueWidth?: string | object
  valueHeight?: string | object
  valueBackground?: string | object
}
