import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

export const Info = () => (
  <Box flexDirection={['column', 'row']}>
    <Row maxWidth={{ _: 335, standard: 710, ultra: 1065 }} flexWrap='wrap'>
      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.power-broker' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.accent'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.atlantis' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.has' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.impact-on' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.accent'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.it' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.unlimited' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.possibilities' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.accent'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.use-skills' />
        </Text>
      </Box>

      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.point' />
        </Text>
      </Box>
    </Row>

    <Layout flexBasis={20} flexGrow='1' />

    <Row maxWidth={{ _: 335, standard: 559, ultra: 840 }} flexWrap='wrap'>
      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.advantage-of-learning' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.visibly' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.grow' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.accent'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.practice' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.on' />
        </Text>
      </Box>

      <Layout flexBasis={5} />

      <Box>
        <Text
          color='text.primary'
          fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
          lineHeight='huge'
        >
          <FormattedMessage id='courses.subtitle.existing-projects' />
        </Text>
      </Box>
    </Row>
  </Box>
)
