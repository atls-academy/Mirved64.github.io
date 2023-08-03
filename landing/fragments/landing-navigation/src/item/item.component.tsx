import React         from 'react'
import { FC }        from 'react'

import { Divider }   from '@ui/divider'
import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { NextLink }  from '@ui/link'
import { Text }      from '@ui/text'

import { ItemProps } from './item.interfaces'

export const Item: FC<ItemProps> = ({ name, path }) => (
  <Box flexBasis={200} flexShrink='0' >
    <NextLink path={path} width='100%'>
      <Column alignItems='center'>
        <Box>
          <Text
            color='text.navigation.primary'
            fontSize='compact'
            fontWeight='normal'
            lineHeight='little'
            textTransform='uppercase'
          >
            {name}
          </Text>
        </Box>

        <Layout flexBasis={10} />

        <Divider backgroundColor='divider.navigation' weight='1px' />
      </Column>
    </NextLink>
  </Box>
)
