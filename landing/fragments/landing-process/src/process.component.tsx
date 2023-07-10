import React       from 'react'
import { useIntl } from 'react-intl'

import { Image }   from '@ui/image'
import { Box }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'

import { Item }    from './item'

export const Process = () => {
  const intl = useIntl()
  return (
    <Box backgroundColor='background.process' width='100%' margin='0 auto' flexDirection='column'>
      <Layout flexBasis={[64, 160]} flexShrink='0' />

      <Box position='relative'>
        <Layout flexBasis={[20, 80]} flexShrink='0' />

        <Column flexGrow='2' flexShrink='1' flexBasis={[335, 1760]}>
          <Item
            sequenceNumber='1'
            process={intl.formatMessage({ id: 'processProcessName1' })}
            text={intl.formatMessage({ id: 'processProcessText1' })}
            divider={1}
          />

          <Item
            sequenceNumber='2'
            process={intl.formatMessage({ id: 'processProcessName2' })}
            text={intl.formatMessage({ id: 'processProcessText2' })}
            divider={1}
          />

          <Item
            sequenceNumber='3'
            process={intl.formatMessage({ id: 'processProcessName3' })}
            text={intl.formatMessage({ id: 'processProcessText3' })}
            divider={1}
          />

          <Item
            sequenceNumber='4'
            process={intl.formatMessage({ id: 'processProcessName4' })}
            text={intl.formatMessage({ id: 'processProcessText4' })}
            divider={1}
          />

          <Item
            sequenceNumber='5'
            process={intl.formatMessage({ id: 'processProcessName5' })}
            text={intl.formatMessage({ id: 'processProcessText5' })}
            divider={0}
            displayDivider='none'
          />

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
            display={['none', 'flex']}
          >
            <Image src='./image/Default.png' width={400} height={400} />
          </Box>
        </Column>

        <Layout flexBasis={[20, 80]} flexShrink='0' />
      </Box>

      <Layout flexBasis={[24, 160]} flexShrink='0' />
    </Box>
  )
}
