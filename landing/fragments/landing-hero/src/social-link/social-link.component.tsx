import React               from 'react'
import { FC }              from 'react'

import { Button }          from '@ui/button'
import { Box }             from '@ui/layout'
import { Link }            from '@ui/link'

import { SocialLinkProps } from './social-link.interface'

export const SocialLink: FC<SocialLinkProps> = ({ icon, href }) => (
  <Box>
    <Link href={href}>
      <Button
        variant='ghostBackgroundWhiteText'
        icon={icon}
        widthIcon={[104, 56]}
        heightIcon={[44, 56]}
      />
    </Link>
  </Box>
)
