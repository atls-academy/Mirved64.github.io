import { Box }      from '@atls-ui-parts/layout'

import React        from 'react'

import { NextLink } from '@ui/link'

export const CardContainer = ({ children, path, ...props }) => (
  <NextLink path={path}>
    <Box {...props}>{children}</Box>
  </NextLink>
)
