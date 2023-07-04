import React           from 'react'
import { useIntl }     from 'react-intl'

import { DefaultIcon } from '@ui/icons'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'

import { Item }        from './item'

export const Process = () => {
  const intl = useIntl()
  return (
    <Box backgroundColor='background.process' width='100%' margin='0 auto' flexDirection='column'>
      <Layout flexBasis={[64, 160]} />
      <Box margin='0 auto' position='relative' width='92%' flexDirection='column'>
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
          maxWidth='400px'
          maxHeight='400px'
          width='auto'
          height='auto'
          position='absolute'
          zIndex='10'
          margin='auto'
          top='0'
          left='0'
          bottom='0'
          right='0'
          display={['none', 'flex']}
        >
          <DefaultIcon width='100%' height='100%' />
        </Box>
      </Box>
      <Layout flexBasis={[24, 160]} />
    </Box>
  )
}
