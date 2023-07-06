import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

import { TechnologyProps }  from './item.interfaces'

export const Item: FC<TechnologyProps> = ({ technologyName, divider, font = 'primary' }) => (
  <Box flexShrink='0'>
    <Text
      color='text.primary'
      fontSize={['huge', 'massive']}
      fontWeight='lighter'
      fontFamily={font}
      lineHeight={['regular', 'giant']}
      whiteSpace='nowrap'
    >
      <FormattedMessage id={technologyName} />
    </Text>
    
    <Layout flexBasis={24} />
    
    <Box width='48px'>
      <Divider backgroundColor='divider.primary' weight={divider} margin='auto 0' />
    </Box>
    
    <Layout flexBasis={24} />
  </Box>
)
