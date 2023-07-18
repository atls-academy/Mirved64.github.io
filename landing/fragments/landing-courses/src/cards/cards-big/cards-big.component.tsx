import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

export const CardsBig = () => (
  <Column width='100%'>
    <Column>
      <Layout flexBasis={[16, 42]} flexShrink='0' />

      <Row>
        <Layout flexBasis={[16, 42]} flexShrink='0' />

        <Column flexGrow='1'>
          <Box width={[80, 104]} height={[27, 38]} justifyContent='center' alignItems='center'>
            <Box>
              <Text
                color='text.courses.primary'
                fontSize={['subAtom', 'tiny']}
                fontWeight='normal'
                lineHeight={['atom', 'tiny']}
                textTransform='uppercase'
              >
                <FormattedMessage id='coursesCardFrontendCategory' />
              </Text>
            </Box>
          </Box>

          <Layout flexBasis={[104, 214]} flexShrink='0' />

          <Box flexShrink='0'>
            <Text
              color='text.courses.primary'
              fontSize={['medium', 'regular']}
              fontWeight='normal'
              lineHeight={['normal', 'mean']}
            >
              <FormattedMessage id='coursesCardFrontendTitle' />
            </Text>
          </Box>

          <Layout flexBasis={[12, 16]} flexShrink='0' />

          <Box maxWidth={694} flexShrink='1' flexGrow={[1, 0]}>
            <Text
              color='text.courses.primary'
              fontSize={['tiny', 'small']}
              fontWeight='normal'
              lineHeight={['small', 'normal']}
            >
              <FormattedMessage id='coursesCardFrontendText' />
            </Text>
          </Box>
        </Column>
      </Row>

      <Layout flexBasis={[16, 40]} flexShrink='0' />
    </Column>

    <Layout flexBasis={[20, 40]} />

    <Column>
      <Layout flexBasis={[16, 42]} flexShrink='0' />

      <Box>
        <Layout flexBasis={[16, 42]} flexShrink='0' />

        <Column flexGrow='1' flexBasis={1160}>
          <Box width={[80, 104]} height={[27, 38]} justifyContent='center' alignItems='center'>
            <Box>
              <Text
                color='text.courses.primary'
                fontSize={['subAtom', 'tiny']}
                fontWeight='normal'
                lineHeight={['atom', 'tiny']}
                textTransform='uppercase'
              >
                <FormattedMessage id='coursesCardBasisCategory' />
              </Text>
            </Box>
          </Box>

          <Layout flexBasis={[49, 54]} flexShrink='0' />

          <Box flexShrink='0'>
            <Text
              color='text.courses.primary'
              fontSize={['medium', 'regular']}
              fontWeight='normal'
              lineHeight={['normal', 'mean']}
            >
              <FormattedMessage id='coursesCardBasisTitle' />
            </Text>
          </Box>

          <Layout flexBasis={[12, 16]} flexShrink='0' />

          <Box maxWidth={694} flexShrink='1' flexGrow={[1, 0]}>
            <Text
              color='text.courses.primary'
              fontSize={['tiny', 'small']}
              fontWeight='normal'
              lineHeight={['small', 'normal']}
            >
              <FormattedMessage id='coursesCardBasisText' />
            </Text>
          </Box>
        </Column>
      </Box>

      <Layout flexBasis={[16, 40]} flexShrink='0' />
    </Column>
  </Column>
)
