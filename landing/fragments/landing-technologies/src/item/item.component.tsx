import React               from 'react'
import { FC }              from 'react'

import { Divider }         from '@ui/divider'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'

import { TechnologyProps } from './item.interfaces'

export const Item: FC<TechnologyProps> = ({ technologyName, divider, font = 'primary' }) => (
  <Box>
    <Box>
      <Text
        color='text.white'
        fontSize={['huge', 'massive']}
        fontWeight='lighter'
        fontFamily={font}
        lineHeight={['mean', 'giant']}
        whiteSpace='nowrap'
        textTransform='uppercase'
      >
        {technologyName}
      </Text>
    </Box>

    <Layout flexBasis={[12, 24]} flexShrink='0' />

    <Box width={[27, 48]} alignItems='center' flexShrink='0'>
      <Divider backgroundColor='divider.white' weight={divider} />
    </Box>

    <Layout flexBasis={[12, 24]} flexShrink='0' />
  </Box>
)
