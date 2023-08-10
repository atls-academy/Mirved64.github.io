import { Box } from '@atls-ui-parts/layout'

import React   from 'react'

export const Repeater = ({ quantity, children }) => (
  <Box>{[...new Array(quantity)]?.map(children)}</Box>
)
