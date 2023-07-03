import styled               from '@emotion/styled'
import { createBaseStyles } from '@atls-ui-parts/link'
import { createNextLink }   from '@atls-ui-parts/link'

import React                from 'react'

import { Text }             from '@ui/text'

const BaseLink = styled(Text.withComponent('a'))<{ active: boolean; theme: any }>(
  createBaseStyles()
)

export const Link = (props) => <BaseLink {...props} />

export const NextLink = (props) => {
  const NextLinkRenderer: any = createNextLink(BaseLink)
  return <NextLinkRenderer {...props} />
}
