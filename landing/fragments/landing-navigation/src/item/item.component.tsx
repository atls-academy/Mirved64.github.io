import React         from 'react'
import { FC }        from 'react'
import { Link }      from 'react-scroll'

import { Divider }   from '@ui/divider'
import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'
import { useHover }  from '@ui/utils'

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
              lineHeight='little'
              textTransform='uppercase'
            >
              {name}
            </Text>
          </Box>

          <Layout flexBasis={10} />

          <Divider
            backgroundColor={hover ? 'divider.white' : 'divider.gray'}
            weight={1}
            width={200}
          />
        </Column>
      </Link>
    </Box>
  )
}
