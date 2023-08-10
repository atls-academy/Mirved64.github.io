import { Box }             from '@atls-ui-parts/layout'

import React               from 'react'
import { FC }              from 'react'

import { AttachmentProps } from './attachment.interfaces'

export const IconAttachment: FC<AttachmentProps> = ({
  icon,
  widthIcon,
  heightIcon,
  backgroundIcon,
}) => (
  <Box
    width={widthIcon}
    height={heightIcon}
    backgroundColor={backgroundIcon}
    justifyContent='center'
    alignItems='center'
    flexShrink='0'
  >
    {icon}
  </Box>
)
