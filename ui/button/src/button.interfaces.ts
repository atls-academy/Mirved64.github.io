import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant =
  | 'primaryBackgroundWhiteText'
  | 'ghostBackgroundWhiteText'
  | 'navyBackgroundWhiteText'

export type ButtonSize =
  | 'smallSizeLittleRadii'
  | 'littleSizeLittleRadii'
  | 'normalSizeNormalRadii'
  | 'bigSizeNormalRadii'
  | 'bigSizeNormalRadiiSmallPadding'
  | 'bigSizeNormalRadiiBigPadding'
  | 'largeSizelittleRadii'
  | 'hugeSizeRegularRadii'
  | 'smallSizeCompactRadii'
  | 'usualSizeNormalRadii'
  | 'usualSizeCompactRadii'
  | 'giantSizeRegularRadii'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  ref?: any
  icon?: object
  widthIcon?: number | number[]
  heightIcon?: number | number[]
  backgroundIcon?: string
  radiiIcon?: string
}
