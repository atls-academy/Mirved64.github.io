import React                 from 'react'
import { FC }                from 'react'

import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { Box }               from '@ui/layout'
import { Link }              from '@ui/link'

import { SocialLinkDisplay } from './social-link.interface'
import { SocialLinkProps }   from './social-link.interface'

export const SocialLink: FC<SocialLinkProps> = ({ display, icon, href }) => (
  <Box>
    <Link href={href} target='_blank'>
      <Condition match={display === SocialLinkDisplay.Desktop}>
        <Button
          variant='ghostBackgroundWhiteText'
          size='bigSizeNormalRadii'
          icon={icon}
          widthIcon={56}
          heightIcon={56}
          radiiIcon='normal'
        />
      </Condition>

      <Condition match={display === SocialLinkDisplay.Mobile}>
        <Button
          variant='ghostBackgroundWhiteText'
          size='littleSizeLittleRadii'
          icon={icon}
          widthIcon={104}
          heightIcon={44}
          radiiIcon='little'
        />
      </Condition>

      <Condition match={display === SocialLinkDisplay.Ultra}>
        <Button
          variant='ghostBackgroundWhiteText'
          size='strongSizeRegularRadii'
          icon={icon}
          widthIcon={84}
          heightIcon={84}
          radiiIcon='normal'
        />
      </Condition>
    </Link>
  </Box>
)
