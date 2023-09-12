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
  | 'largeSizeLittleRadii'
  | 'hugeSizeRegularRadii'
  | 'smallSizeCompactRadii'
  | 'usualSizeNormalRadii'
  | 'usualSizeCompactRadii'
  | 'strongSizeRegularRadii'
  | 'giantSizeRegularRadii'
  | 'massiveSizeLargeRadii'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  ref?: any
  icon?: JSX.Element
  widthIcon?: number | number[]
  heightIcon?: number | number[]
  backgroundIcon?: string
  radiiIcon?: string
}
