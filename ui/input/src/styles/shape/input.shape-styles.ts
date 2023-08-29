import { createShapeStyles } from '@atls-ui-parts/input'

import { styleFn }           from 'styled-system'
import { ifProp }            from 'styled-tools'
import { prop }              from 'styled-tools'
import { switchProp }        from 'styled-tools'

const normalSizeNormallRadiiStyles = createShapeStyles({
  size: 56,
  paddingLeft: 16,
  paddingRight: 4,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const bigSizeRegularRadiiStyles = createShapeStyles({
  size: 62,
  paddingLeft: 24,
  paddingRight: 24,
  rounding: prop('theme.radii.regular') as unknown as number,
})

export const shapeStyles = switchProp(prop('size', 'normalSizeNormallRadii'), {
  normalSizeNormallRadii: normalSizeNormallRadiiStyles,
  bigSizeRegularRadii: bigSizeRegularRadiiStyles,
})

export const textareaStyles: styleFn = ifProp(prop('textarea', false), {
  paddingTop: 16,
  paddingLeft: 24,
  paddingBottom: 16,
  paddingRight: 24,
  minHeight: 150,
})
