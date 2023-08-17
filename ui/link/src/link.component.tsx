import styled               from '@emotion/styled'
import { Text }             from '@atls-ui-proto/text'
import { createBaseStyles } from '@atls-ui-parts/link'
import { createNextLink }   from '@atls-ui-parts/link'

import React                from 'react'

const BaseLink = styled(Text.withComponent('a'))<{ active: boolean; theme: any }>(
  createBaseStyles()
)

export const Link = (props) => <BaseLink {...props} />

export const NextLink = (props) => {
  const NextLinkRenderer = createNextLink(BaseLink)
  return <NextLinkRenderer {...props} />
}
