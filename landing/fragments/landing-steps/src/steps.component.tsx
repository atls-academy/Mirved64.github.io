import React              from 'react'
import { useIntl }        from 'react-intl'

import { Condition }      from '@ui/condition'
import { Image }          from '@ui/image'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { useWindowWidth } from '@ui/utils'

import { Item }           from './item'

export const Steps = () => {
  const intl = useIntl()
  const { isDesktop } = useWindowWidth()

  return (
    <Column>
      <Layout flexBasis={[64, 160]} />

      <Box position='relative'>
        <Layout flexBasis={[20, 80]} flexShrink='0' />

        <Column flexGrow='1' flexBasis={[335, 1760]}>
          <Item
            sequenceNumber='1'
            name={intl.formatMessage({ id: 'process.item.team-integration' })}
            description={intl.formatMessage({ id: 'process.item.text' })}
          />

          <Item
            sequenceNumber='2'
            name={intl.formatMessage({ id: 'process.item.create-environment' })}
            description={intl.formatMessage({ id: 'process.item.text' })}
          />

          <Item
            sequenceNumber='3'
            name={intl.formatMessage({ id: 'process.item.studies-of-technologies' })}
            description={intl.formatMessage({ id: 'process.item.text' })}
          />

          <Item
            sequenceNumber='4'
            name={intl.formatMessage({ id: 'process.item.practical-work' })}
            description={intl.formatMessage({ id: 'process.item.text' })}
          />

          <Item
            sequenceNumber='5'
            name={intl.formatMessage({ id: 'process.item.project-integration' })}
            description={intl.formatMessage({ id: 'process.item.text' })}
            divider={false}
          />
        </Column>

        <Condition match={isDesktop}>
          <Box
            width='400px'
            height='400px'
            position='absolute'
            zIndex={10}
            margin='auto'
            top='0'
            left='0'
            bottom='0'
            right='0'
          >
            <Image src='./image/Cubics.png' width={400} height={400} />
          </Box>
        </Condition>

        <Layout flexBasis={[20, 80]} flexShrink='0' />
      </Box>

      <Layout flexBasis={[24, 160]} />
    </Column>
  )
}
