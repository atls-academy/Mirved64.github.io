import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { Cards }            from './cards'

export const Library = () => (
  <>
    <Row>
      <Layout flexBasis={[20, 230]} flexShrink='0' />

      <Column flexGrow='1'>
        <Layout flexBasis={[20, 200]} />

        <Box>
          <Text
            color='text.white'
            fontSize={['normal', 'stupendous']}
            lineHeight={['ordinary', 'massive']}
          >
            <FormattedMessage id='library.title' />
          </Text>
        </Box>

        <Layout flexBasis={[24, 48]} />

        <Divider backgroundColor='divider.ghost' weight={1} />

        <Layout flexBasis={[24, 48]} />

        <Box maxWidth={['100%', '600px']}>
          <Text color='text.white' fontSize={['tiny', 'medium']} lineHeight={['compact', 'usual']}>
            <FormattedMessage id='library.text' />
          </Text>
        </Box>

        <Layout flexBasis={[24, 48]} />

        <Box width={['100%', '600px']} height={56} backgroundColor='white' />

        <Layout flexBasis={[20, 160]} />
      </Column>

      <Layout flexBasis={[20, 230]} flexShrink='0' />
    </Row>

    <Background
      backgroundColor='wavesGradient'
      backgroundPosition={['left -982px top 409px', 'top 1104px']}
      backgroundRepeat='no-repeat'
    >
      <Cards />
    </Background>
  </>
)
