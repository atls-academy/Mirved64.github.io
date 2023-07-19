import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'

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
