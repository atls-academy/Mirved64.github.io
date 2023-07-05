import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { ItemProps }        from './item.interfaces'

export const Item: FC<ItemProps> = ({ name, path }) => (
  <Box key={name} flexGrow='5' justifyContent='center'>
    <NextLink path={path}>
      <Text
        color='text.primary'
        fontSize='compact'
        fontWeight='normal'
        lineHeight='little'
        textTransform='uppercase'
      >
        <FormattedMessage id={name} />
      </Text>
    </NextLink>
  </Box>
)
