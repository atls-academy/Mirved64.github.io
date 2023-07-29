import React              from 'react'
import { useIntl }        from 'react-intl'

import { Condition }      from '@ui/condition'
import { Image }          from '@ui/image'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { useWindowWidth } from '@ui/utils'

import { Item }           from './item'

export const Process = () => {
  const intl = useIntl()
  const { isDesktop } = useWindowWidth()

  return (
    <Box backgroundColor='background.process' justifyContent='center'>
      <Column width='100%'>
        <Layout flexBasis={[64, 160]} />

        <Box position='relative'>
          <Layout flexBasis={[20, 80]} flexShrink='0' />

          <Column flexGrow='2' flexBasis={[335, 1760]}>
            <Item
              sequenceNumber='1'
              process={intl.formatMessage({ id: 'processItemTeamIntegration' })}
              text={intl.formatMessage({ id: 'processItemTeamIntegrationText' })}
              divider={1}
            />

            <Item
              sequenceNumber='2'
              process={intl.formatMessage({ id: 'processItemCreateEnvironment' })}
              text={intl.formatMessage({ id: 'processItemCreateEnvironmentText' })}
              divider={1}
            />

            <Item
              sequenceNumber='3'
              process={intl.formatMessage({ id: 'processItemStudiesOfTechnologies' })}
              text={intl.formatMessage({ id: 'processItemStudiesOfTechnologiesText' })}
              divider={1}
            />

            <Item
              sequenceNumber='4'
              process={intl.formatMessage({ id: 'processItemPracticalWork' })}
              text={intl.formatMessage({ id: 'processItemPracticalWorkText' })}
              divider={1}
            />

            <Item
              sequenceNumber='5'
              process={intl.formatMessage({ id: 'processItemProjectIntegration' })}
              text={intl.formatMessage({ id: 'processItemProjectIntegrationText' })}
              divider={0}
              displayDivider={false}
            />
          </Column>

          <Condition match={isDesktop}>
            <Box
              width='400px'
              height='400px'
              position='absolute'
              zIndex='10'
              margin='auto'
              top='0'
              left='0'
              bottom='0'
              right='0'
            >
              <Image src='./image/Default.png' width={400} height={400} />
            </Box>
          </Condition>

          <Layout flexBasis={[20, 80]} flexShrink='0' />
        </Box>

        <Layout flexBasis={[24, 160]} />
      </Column>
    </Box>
  )
}
