import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { ItemProps }        from './item.interfaces'

export const Item: FC<ItemProps> = ({ name }) => (
  <Column key={name} flexBasis={200} flexShrink='0' alignItems='center'>
    <Box>
      <Text
        color='text.navigation.primary'
        fontSize='compact'
        fontWeight='normal'
        lineHeight='little'
        textTransform='uppercase'
      >
        <FormattedMessage id={name} />
      </Text>
    </Box>

    <Layout flexBasis={10} />

    <Divider backgroundColor='divider.navigation' weight='1px' />
  </Column>
)
