import React         from 'react'
import { FC }        from 'react'
import { Link }      from 'react-scroll'

import { Condition }       from '@ui/condition'
import { Divider }         from '@ui/divider'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { NextLink }        from '@ui/link'
import { Text }            from '@ui/text'
import { useHover }        from '@ui/utils'

import { ItemProps } from './item.interfaces'

export const Item: FC<ItemProps> = ({ name, path }) => {
  const { hover, hoverProps } = useHover()

  return (
    <Box width={200} {...hoverProps} cursor='pointer'>
      <Link to={path} width='100%' spy smooth duration={1000}>
        <Column alignItems='center'>
          <Box>
            <Text
              color={hover ? 'text.white' : 'text.gray'}
              fontSize='compact'
              lineHeight='small'
              textTransform='uppercase'
            >
              {name}
            </Text>
          </Box>

          <Layout flexBasis={10} />

          <Divider
            backgroundColor={hover ? 'background.white' : 'background.graySemiTransparent'}
            weight={1}
            width={200}
          />
        </Column>
      </Link>
    </Box>
  )
}

export const ItemNavLink: FC<ItemProps> = ({ name, path, active }) => {
  const { hover, hoverProps } = useHover()

  return (
    <Box width={200} {...hoverProps} cursor='pointer'>
      <NextLink path={`/#${path}`} width='100%'>
        <Condition match={active!}>
          <Column alignItems='center'>
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
          </Column>
        </Condition>

        <Condition match={!active}>
          <Column alignItems='center'>
            <Box>
              <Text
                color={hover ? 'text.white' : 'text.gray'}
                fontSize='compact'
                lineHeight='small'
                textTransform='uppercase'
              >
                {name}
              </Text>
            </Box>

            <Layout flexBasis={10} />

            <Divider
              backgroundColor={hover ? 'background.white' : 'background.gray'}
              weight={1}
              width={200}
            />
          </Column>
        </Condition>
      </NextLink>
    </Box>
  )
}
