import React                      from 'react'
import { FC }                     from 'react'
import { Link }                   from 'react-scroll'

import { Condition }              from '@ui/condition'
import { Divider }                from '@ui/divider'
import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Text }                   from '@ui/text'
import { useHover }               from '@ui/utils'

import { NavLinkItemDrawerProps } from './navlink-item.interfaces'

export const NavLinkItemDrawerIndex: FC<NavLinkItemDrawerProps> = ({
  name,
  path,
  currentElementIndexInViewport,
  index,
  onClick,
}) => {
  const { hover, hoverProps } = useHover()

  return (
    <Box
      flexBasis={{ standard: 200, ultra: 300 }}
      cursor='pointer'
      {...hoverProps}
      onClick={onClick}
    >
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
