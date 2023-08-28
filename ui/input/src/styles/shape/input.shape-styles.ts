import { createShapeStyles } from '@atls-ui-parts/input'

import { prop }              from 'styled-tools'
import { switchProp }        from 'styled-tools'

const normalSizeNormallRadiiStyles = createShapeStyles({
  size: 56,
  paddingLeft: 16,
  paddingRight: 4,
  rounding: prop('theme.radii.normal') as unknown as number,
})

export const shapeStyles = switchProp(prop('size', 'normalSizeNormallRadii'), {
  normalSizeNormallRadii: normalSizeNormallRadiiStyles,
})
