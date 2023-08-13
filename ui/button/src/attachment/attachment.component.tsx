import { Box }             from '@atls-ui-parts/layout'

import React               from 'react'
import { FC }              from 'react'

import { AttachmentProps } from './attachment.interfaces'

export const IconAttachment: FC<AttachmentProps> = ({
  icon,
  widthIcon,
  heightIcon,
  backgroundIcon,
  radiiIcon,
}) => (
  <Box
    width={widthIcon}
    height={heightIcon}
    backgroundColor={backgroundIcon}
    borderRadius={radiiIcon}
    justifyContent='center'
    alignItems='center'
    flexShrink='0'
  >
    {icon}
  </Box>
)
