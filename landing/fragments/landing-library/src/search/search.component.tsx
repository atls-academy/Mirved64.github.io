import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

export const SearchButton = () => (
  <Box width={{ _: 172, standard: 132, ultra: 165 }}>
    <Button variant='navyBackgroundWhiteText' size='usualSizeCompactRadii'>
      <Text color='text.white' fontSize={{ _: 'little', ultra: 'small' }} lineHeight='usual'>
        <FormattedMessage id='library.search-button' />
      </Text>
    </Button>
  </Box>
)
