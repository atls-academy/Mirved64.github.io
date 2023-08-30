import { Box }             from '@atls-ui-parts/layout'

import React               from 'react'
import { FC }              from 'react'

import { AttachmentProps } from './attachment.interfaces'

export const IconAttachment: FC<AttachmentProps> = ({ icon, widthIcon, heightIcon, hover }) => (
  <Box
    width={widthIcon}
    height={heightIcon}
    justifyContent='center'
    alignItems='center'
    flexShrink='0'
    hover={hover}
  >
    {icon}
  </Box>
)
