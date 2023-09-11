import React                from 'react'
import { FC }               from 'react'

import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { NavLinkItemProps } from './navlink-item.interfaces'

export const NavLinkItemDrawer: FC<NavLinkItemProps> = ({ name, path, active }) => {
  const { hover, hoverProps } = useHover()

  return (
    <Box flexBasis={200} cursor='pointer' {...hoverProps}>
      <NextLink path={`/#${path}`} width='100%'>
        <Column alignItems='center'>
          <Condition match={active!}>
            <Box>
              <Text
                color={hover ? 'text.black' : 'text.ghost'}
                fontSize='compact'
                lineHeight='small'
                textTransform='uppercase'
              >
                {name}
              </Text>
            </Box>

            <Layout flexBasis={10} />

            <Divider
              backgroundColor={hover ? 'background.black' : 'background.blackTransparent'}
              weight={1}
              width={200}
            />
          </Condition>

          <Condition match={!active}>
            <Box>
              <Text
                color='text.black'
                fontSize='compact'
                lineHeight='small'
                textTransform='uppercase'
              >
                {name}
              </Text>
            </Box>

            <Layout flexBasis={10} />

            <Divider backgroundColor='background.black' weight={1} width={200} />
          </Condition>
        </Column>
      </NextLink>
    </Box>
  )
}
