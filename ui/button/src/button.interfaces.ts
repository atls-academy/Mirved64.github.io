import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant = 'transparentBackgroundWhiteText' | 'transparentBackgroundBlackText'

export type ButtonSize = 'normal' | 'big'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  iconSvg?: object
}
