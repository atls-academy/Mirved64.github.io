import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

export const Info = () => (
  <Box flexDirection={['column', 'row']}>
    <Box display='inline' maxWidth={[335, 710]}>
      <Text
        display='inline'
        color='text.primary'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='courses.subtitle.power-broker' />
      </Text>

      <Space count={2} />

      <Text
        display='inline'
        color='text.accent'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='courses.subtitle.atlantis' />
      </Text>

      <Space count={1} />

      <Text
        display='inline'
        color='text.primary'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='courses.subtitle.has-an-impact-on' />
      </Text>

      <Space count={2} />

      <Text
        display='inline'
        color='text.accent'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='courses.subtitle.it' />
      </Text>

      <Space count={2} />

      <Text
        display='inline'
        color='text.primary'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='courses.subtitle.unlimited-possibilities' />
      </Text>

      <Space count={2} />

      <Text
        display='inline'
        color='text.accent'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='courses.subtitle.use-skills' />
      </Text>

      <Text
        display='inline'
        color='text.primary'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='courses.subtitle.point' />
      </Text>
    </Box>

    <Layout flexBasis={[20, 20]} flexGrow='1' />

    <Box display='inline' maxWidth={[335, 559]}>
      <Text
        display='inline'
        color='text.primary'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='courses.subtitle.advantage-of-learning' />
      </Text>

      <Space count={2} />

      <Text
        display='inline'
        color='text.accent'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='courses.subtitle.practice' />
      </Text>

      <Space count={2} />

      <Text
        display='inline'
        color='text.primary'
        fontSize={['small', 'ordinary']}
        fontWeight='normal'
        lineHeight={['normal', 'regular']}
      >
        <FormattedMessage id='courses.subtitle.on-existing-projects' />
      </Text>
    </Box>
  </Box>
)
