import React               from 'react'
import { FC }              from 'react'

import { Button }          from '@ui/button'
import { Box }             from '@ui/layout'
import { Link }            from '@ui/link'

import { SocialLinkProps } from './social-link.interface'

export const SocialLinkDesktop: FC<SocialLinkProps> = ({ icon, href }) => (
  <Box>
    <Link href={href}>
      <Button
        variant='ghostBackgroundWhiteText'
        size='bigSizeNormalRadii'
        icon={icon}
        widthIcon={56}
        heightIcon={56}
        radiiIcon='normal'
      />
    </Link>
  </Box>
)

export const SocialLinkMobile: FC<SocialLinkProps> = ({ icon, href }) => (
  <Box>
    <Link href={href}>
      <Button
        variant='ghostBackgroundWhiteText'
        size='littleSizeLittleRadii'
        icon={icon}
        widthIcon={104}
        heightIcon={44}
        radiiIcon='little'
      />
    </Link>
  </Box>
)
