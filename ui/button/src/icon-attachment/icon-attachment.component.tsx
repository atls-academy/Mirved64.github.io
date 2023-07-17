import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'

import { IconAttachmentProps } from './icon-attachment.interface'

const IconAttachment: FC<IconAttachmentProps> = ({ iconSvg }) =>
  iconSvg !== undefined ? (
    <Box justifyContent='center' alignItems='center' width='auto' height='auto'>
      {iconSvg}
    </Box>
  ) : null

export { IconAttachment }
