import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

export const Info = () => (
  <Box flexDirection={['column', 'row']} justifyContent='space-between'>
    <Box flexWrap='wrap' flexBasis={[112, 710]}>
      <Text
        color='text.black'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='coursesSubtitleAtlantisPowerBroker' />
      </Text>
    </Box>

    <Layout flexBasis={[20, 0]} />

    <Box flexBasis={[84, 559]} flexWrap='wrap'>
      <Text
        color='text.black'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='coursesSubtitleAdvantageOfLearning' />
      </Text>
    </Box>
  </Box>
)
