import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { DefaultIcon }      from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

import { processList }      from './process-list/process.list'

export const Process = () => (
  <Box backgroundColor='background.process' width='100%' margin='0 auto' flexDirection='column'>
    <Layout flexBasis={[64, 160]} />
    <Box margin='0 auto' position='relative' width='92%' flexDirection='column'>
      {processList.map((process, index) => {
        if (index !== processList.length - 1) {
          return (
            <Column key={process.process}>
              <Box flexBasis={['content', 'content']}>
                <Box alignItems={['start', 'center']}>
                  <Text
                    color='text.primary'
                    fontSize={['compact', 'medium']}
                    fontWeight='normal'
                    lineHeight={['little', 'medium']}
                  >
                    {index + 1}
                  </Text>
                </Box>
                <Layout flexBasis={[12, 32]} />
                <Box
                  flexDirection={['column', 'row']}
                  justifyContent={['start', 'space-between']}
                  flexBasis={['content', 1760]}
                >
                  <Box alignItems='center'>
                    <Text
                      color='text.primary'
                      fontSize={['medium', 'regular']}
                      fontWeight={['normalMedium', 'normal']}
                      lineHeight='regular'
                    >
                      <FormattedMessage id={process.process} defaultMessage={process.process} />
                    </Text>
                  </Box>
                  <Box flexBasis={['100%', '560px']} flexWrap='wrap'>
                    <Text
                      color='text.primary'
                      fontSize={['tiny', 'medium']}
                      fontWeight='normal'
                      lineHeight={['compact', 'standart']}
                    >
                      <FormattedMessage
                        id={`processText ${String(index)}`}
                        defaultMessage={process.text}
                      />
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Layout flexBasis={[28, 48]} />
              <Divider backgroundColor='divider.primary' weight='1px' />
              <Layout flexBasis={[28, 48]} />
            </Column>
          )
        }
        return (
          <Column key={process.process}>
            <Box flexBasis={['content', 'content']}>
              <Box alignItems={['start', 'center']}>
                <Text
                  color='text.primary'
                  fontSize={['compact', 'medium']}
                  fontWeight='normal'
                  lineHeight={['little', 'medium']}
                >
                  {index + 1}
                </Text>
              </Box>
              <Layout flexBasis={[12, 32]} />
              <Box
                flexDirection={['column', 'row']}
                justifyContent={['start', 'space-between']}
                flexBasis={['content', 1760]}
              >
                <Box alignItems='center'>
                  <Text
                    color='text.primary'
                    fontSize={['medium', 'regular']}
                    fontWeight={['normalMedium', 'normal']}
                    lineHeight='regular'
                  >
                    <FormattedMessage
                      id={`process ${String(index)}`}
                      defaultMessage={process.process}
                    />
                  </Text>
                </Box>
                <Box flexBasis={['100%', '560px']} flexWrap='wrap'>
                  <Text
                    color='text.primary'
                    fontSize={['tiny', 'medium']}
                    fontWeight='normal'
                    lineHeight={['compact', 'standart']}
                  >
                    <FormattedMessage
                      id={`processText ${String(index)}`}
                      defaultMessage={process.text}
                    />
                  </Text>
                </Box>
              </Box>
            </Box>
          </Column>
        )
      })}
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
        <DefaultIcon width='100%' height='100%' />
      </Box>
    </Box>
    <Layout flexBasis={[24, 160]} />
  </Box>
)
