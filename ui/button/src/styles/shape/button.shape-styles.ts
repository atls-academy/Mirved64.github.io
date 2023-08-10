import { createShapeStyles } from '@atls-ui-parts/button'

import { prop }              from 'styled-tools'
import { switchProp }        from 'styled-tools'

const normal = createShapeStyles({
  size: 64,
  paddingLeft: 24,
  paddingRight: 12,
})

const big = createShapeStyles({
  size: 72,
  paddingLeft: 24,
  paddingRight: 8,
})

export const shapeStyles = switchProp(prop('size'), {
  normal,
  big,
})
