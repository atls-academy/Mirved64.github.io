import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { TextProps }        from './info.interfaces'

export const Info = () => {
  const TextPrimary: FC<TextProps> = ({ id }) => (
    <Box>
      <Text
        color='text.primary'
        fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
        lineHeight='huge'
      >
        <FormattedMessage id={id} />
      </Text>
    </Box>
  )

  const TextAccent: FC<TextProps> = ({ id }) => (
    <Box>
      <Text
        color='text.accent'
        fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
        lineHeight='huge'
      >
        <FormattedMessage id={id} />
      </Text>
    </Box>
  )

  return (
    <Box flexDirection={['column', 'row']}>
      <Row maxWidth={{ _: 335, standard: 710, ultra: 1065 }} flexWrap='wrap'>
        <TextPrimary id='courses.subtitle.power-broker' />

        <Layout flexBasis={5} />

        <TextAccent id='courses.subtitle.atlantis' />

        <Layout flexBasis={5} />

        <TextPrimary id='courses.subtitle.has' />

        <Layout flexBasis={5} />

        <TextPrimary id='courses.subtitle.impact-on' />

        <Layout flexBasis={5} />

        <TextAccent id='courses.subtitle.it' />

        <Layout flexBasis={5} />

        <TextPrimary id='courses.subtitle.unlimited' />

        <Layout flexBasis={5} />

        <TextPrimary id='courses.subtitle.possibilities' />

        <Layout flexBasis={5} />

        <TextAccent id='courses.subtitle.use-skills' />

        <TextPrimary id='courses.subtitle.point' />
      </Row>

      <Layout flexBasis={20} flexGrow='1' />

      <Row maxWidth={{ _: 335, standard: 559, ultra: 840 }} flexWrap='wrap'>
        <TextPrimary id='courses.subtitle.advantage-of-learning' />

        <Layout flexBasis={5} />

        <TextPrimary id='courses.subtitle.visibly' />

        <Layout flexBasis={5} />

        <TextPrimary id='courses.subtitle.grow' />

        <Layout flexBasis={5} />

        <TextAccent id='courses.subtitle.practice' />

        <Layout flexBasis={5} />

        <TextPrimary id='courses.subtitle.on' />

        <Layout flexBasis={5} />

        <TextPrimary id='courses.subtitle.existing-projects' />
      </Row>
    </Box>
  )
}
