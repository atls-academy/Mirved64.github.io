import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { LogoWhiteIcon }    from '@ui/icons'
import { ArrowDownIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { ItemsList }        from './items-list'
import { navLinkList }      from './navigation-list'

export const Navigation = () => {
  const windowWidth = useWindowWidth()

  return (
    <Box
      backgroundColor='background.navigation.mainColor'
      width='100%'
      height={[80, 120]}
      alignItems='center'
      justifyContent='center'
    >
      <Layout flexBasis={[0, 40]} flexShrink='0' />

      <Condition match={windowWidth < 640}>
        <Box flexGrow='1' justifyContent='center'>
          <NextLink>
            <LogoWhiteIcon width={40} height={40} />
          </NextLink>
        </Box>
      </Condition>

      <Condition match={windowWidth > 640}>
        <Box>
          <NextLink>
            <LogoWhiteIcon width={56} height={56} />
          </NextLink>
        </Box>
      </Condition>

      <Condition match={windowWidth > 640}>
        <Layout flexBasis={[0, 40]} flexGrow='1' />
      </Condition>

      <ItemsList navLinksList={navLinkList} />

      <Condition match={windowWidth > 640}>
        <Layout flexBasis={[0, 40]} flexGrow='1' />
      </Condition>

      <Condition match={windowWidth > 640}>
        <Box width={163} height={64} flexShrink='0'>
          <Button
            variant='transparentBackgroundWhiteText'
            gap={24}
            fill
            icon={<ArrowDownIcon width={16} height={16} />}
            widthIcon={48}
            heightIcon={48}
            backgroundIcon='background.navigation.white'
          >
            <NextLink>
              <Text fontSize='compact' fontWeight='normal' lineHeight='little'>
                <FormattedMessage id='navigationButton' />
              </Text>
            </NextLink>
          </Button>
        </Box>
      </Condition>

      <Layout flexBasis={[0, 40]} flexShrink='0' />
    </Box>
  )
}
