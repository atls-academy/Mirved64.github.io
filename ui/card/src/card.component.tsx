import { Box }      from '@atls-ui-parts/layout'

import React        from 'react'

import { NextLink } from '@ui/link'

export const CardContainer = ({ children, path, ...props }) => (
  <NextLink path={path} width='100%'>
    <Box {...props} width='100%'>
      {children}
    </Box>
  </NextLink>
)
