import React                 from 'react'
import { FC }                from 'react'

import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { Box }               from '@ui/layout'
import { Link }              from '@ui/link'

import { SocialLinkDisplay } from './social-link.interface'
import { SocialLinkProps }   from './social-link.interface'

export const SocialLink: FC<SocialLinkProps> = ({ display, icon, href }) => (
  <>
    <Condition match={display === SocialLinkDisplay.Desktop}>
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
    </Condition>

    <Condition match={display === SocialLinkDisplay.Mobile}>
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
    </Condition>

    <Condition match={display === SocialLinkDisplay.Ultra}>
      <Box>
        <Link href={href}>
          <Button
            variant='ghostBackgroundWhiteText'
            size='strongSizeRegularRadii'
            icon={icon}
            widthIcon={84}
            heightIcon={84}
            radiiIcon='normal'
          />
        </Link>
      </Box>
    </Condition>
  </>
)
