import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { ItemProps }        from './item.interfaces'

export const Item: FC<ItemProps> = ({ name, path }) => (
  <Layout key={name} flexBasis={200} flexShrink='0' justifyContent='center'>
    <NextLink path={path}>
      <Text
        color='text.navigation.primary'
        fontSize='compact'
        fontWeight='normal'
        lineHeight='little'
        textTransform='uppercase'
      >
        <FormattedMessage id={name} />
      </Text>
    </NextLink>
  </Layout>
)
