import React               from 'react'
import { FC }              from 'react'
import { Link }            from 'react-scroll'

import { Condition }       from '@ui/condition'
import { Divider }         from '@ui/divider'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { NextLink }        from '@ui/link'
import { Text }            from '@ui/text'
import { useHover }        from '@ui/utils'

import { ItemProps }       from './item.interfaces'
import { ItemDrawerProps } from './item.interfaces'

export const Item: FC<ItemProps> = ({ name, path }) => {
  const { hover, hoverProps } = useHover()

  return (
    <Box width={{ standard: 200, ultra: 300 }} {...hoverProps} cursor='pointer'>
      <Link to={path} width='100%' spy smooth duration={1000}>
        <Column alignItems='center'>
          <Box>
            <Text
              color={hover ? 'text.white' : 'text.gray'}
              fontSize={{ standard: 'compact', ultra: 'middle' }}
              lineHeight='small'
              textTransform='uppercase'
            >
              {name}
            </Text>
          </Box>

          <Layout flexBasis={{ standard: 10, ultra: 15 }} />

          <Divider
            backgroundColor={hover ? 'background.white' : 'background.graySemiTransparent'}
            weight={1}
            width={{ standard: 200, ultra: 300 }}
          />
        </Column>
      </Link>
    </Box>
  )
}

export const ItemDrawer: FC<ItemDrawerProps> = ({
  name,
  path,
  currentElementIndexInViewport,
  index,
}) => {
  const { hover, hoverProps } = useHover()

  return (
    <Box flexBasis={{ standard: 200, ultra: 300 }} cursor='pointer' {...hoverProps}>
      <Link to={path} width='100%' spy smooth duration={1000}>
        <Column alignItems='center'>
          <Condition match={currentElementIndexInViewport !== index}>
            <Box>
              <Text
                color={hover ? 'text.black' : 'text.ghost'}
                fontSize={{ standard: 'compact', ultra: 'middle' }}
                lineHeight='small'
                textTransform='uppercase'
              >
                {name}
              </Text>
            </Box>

            <Layout flexBasis={{ standard: 10, ultra: 15 }} />

            <Divider
              backgroundColor={hover ? 'background.black' : 'background.blackTransparent'}
              weight={1}
              width={{ standard: 200, ultra: 300 }}
            />
          </Condition>

          <Condition match={currentElementIndexInViewport === index}>
            <Box>
              <Text
                color='text.black'
                fontSize={{ standard: 'compact', ultra: 'middle' }}
                lineHeight='small'
                textTransform='uppercase'
              >
                {name}
              </Text>
            </Box>

            <Layout flexBasis={{ standard: 10, ultra: 15 }} />

            <Divider
              backgroundColor='background.black'
              weight={1}
              width={{ standard: 200, ultra: 300 }}
            />
          </Condition>
        </Column>
      </Link>
    </Box>
  )
}

export const ItemNavLink: FC<ItemProps> = ({ name, path, active }) => {
  const { hover, hoverProps } = useHover()

  return (
    <Box width={{ standard: 200, ultra: 300 }} {...hoverProps} cursor='pointer'>
      <NextLink path={`/#${path}`} width='100%'>
        <Condition match={active!}>
          <Column alignItems='center'>
            <Box>
              <Text
                color={hover ? 'text.black' : 'text.ghost'}
                fontSize={{ standard: 'compact', ultra: 'middle' }}
                lineHeight='small'
                textTransform='uppercase'
              >
                {name}
              </Text>
            </Box>

            <Layout flexBasis={{ standard: 10, ultra: 15 }} />

            <Divider
              backgroundColor={hover ? 'background.black' : 'background.blackTransparent'}
              weight={1}
              width={{ standard: 200, ultra: 300 }}
            />
          </Column>
        </Condition>

        <Condition match={!active}>
          <Column alignItems='center'>
            <Box>
              <Text
                color={hover ? 'text.white' : 'text.gray'}
                fontSize={{ standard: 'compact', ultra: 'middle' }}
                lineHeight='small'
                textTransform='uppercase'
              >
                {name}
              </Text>
            </Box>

            <Layout flexBasis={{ standard: 10, ultra: 15 }} />

            <Divider
              backgroundColor={hover ? 'background.white' : 'background.gray'}
              weight={1}
              width={{ standard: 200, ultra: 300 }}
            />
          </Column>
        </Condition>
      </NextLink>
    </Box>
  )
}
