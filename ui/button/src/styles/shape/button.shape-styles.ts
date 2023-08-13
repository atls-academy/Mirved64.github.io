import { createShapeStyles } from '@atls-ui-parts/button'

import { prop }              from 'styled-tools'
import { switchProp }        from 'styled-tools'

const smallSizeLittleRadiiStyles = createShapeStyles({
  size: 40,
  paddingLeft: 12,
  paddingRight: 6,
  rounding: prop('theme.radii.little') as unknown as number,
})

const littleSizeLittleRadiiStyles = createShapeStyles({
  size: 44,
  paddingLeft: -28,
  paddingRight: -28,
  rounding: prop('theme.radii.little') as unknown as number,
})

const normalSizeNormalRadiiStyles = createShapeStyles({
  size: 52,
  paddingLeft: 20,
  paddingRight: 8,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const bigSizeNormalRadiiSmallPaddingStyles = createShapeStyles({
  size: 56,
  paddingLeft: 16,
  paddingRight: 12,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const bigSizeNormalRadiiBigPaddingStyles = createShapeStyles({
  size: 56,
  paddingLeft: 20,
  paddingRight: 8,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const bigSizeNormalRadiiStyles = createShapeStyles({
  size: 56,
  paddingLeft: -28,
  paddingRight: -28,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const LargeSizelittleRadiiStyles = createShapeStyles({
  size: 64,
  paddingLeft: -28,
  paddingRight: -28,
  rounding: prop('theme.radii.little') as unknown as number,
})

const hugeSizeRegularRadiiStyles = createShapeStyles({
  size: 72,
  paddingLeft: 24,
  paddingRight: 12,
  rounding: prop('theme.radii.regular') as unknown as number,
})

export const shapeStyles = switchProp(prop('size'), {
  smallSizeLittleRadii: smallSizeLittleRadiiStyles,
  littleSizeLittleRadii: littleSizeLittleRadiiStyles,
  normalSizeNormalRadii: normalSizeNormalRadiiStyles,
  bigSizeNormalRadii: bigSizeNormalRadiiStyles,
  bigSizeNormalRadiiSmallPadding: bigSizeNormalRadiiSmallPaddingStyles,
  bigSizeNormalRadiiBigPadding: bigSizeNormalRadiiBigPaddingStyles,
  LargeSizelittleRadii: LargeSizelittleRadiiStyles,
  hugeSizeRegularRadii: hugeSizeRegularRadiiStyles,
})
