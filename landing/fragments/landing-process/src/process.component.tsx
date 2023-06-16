import React           from 'react'

import { DefaultIcon } from '@ui/icons'
import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Text }        from '@ui/text'

import { processList } from './process-list/process.list'

export const Process = () => (
  <Box backgroundColor='#666666' width='1920px' margin='0 auto'>
    <Box width='1760px' margin='160px auto' position='relative' flexDirection='column'>
      {processList.map((process, index) => {
        if (index !== processList.length - 1) {
          return (
            <Column key={process.id}>
              <Row justifyContent='space-between' marginBottom='48px'>
                <Box>
                  <Box alignItems='center' marginRight='32px'>
                    <Text
                      color='primary'
                      fontSize='large'
                      fontWeight='normal'
                      lineHeight='normalNormal'
                    >
                      {process.id}
                    </Text>
                  </Box>
                  <Box alignItems='center'>
                    <Text
                      color='primary'
                      fontSize='extraLarge'
                      fontWeight='normal'
                      lineHeight='largeSmall'
                    >
                      {process.process}
                    </Text>
                  </Box>
                </Box>
                <Box width='560px' flexWrap='wrap'>
                  <Text
                    color='primary'
                    fontSize='large'
                    fontWeight='normal'
                    lineHeight='normalLarge'
                  >
                    {process.text}
                  </Text>
                </Box>
              </Row>
              <Box border='solid 1px #FFFFFF' marginBottom='48px' />
            </Column>
          )
        }
        return (
          <Column key={process.id}>
            <Row justifyContent='space-between' marginBottom='48px'>
              <Box>
                <Box alignItems='center' marginRight='32px'>
                  <Text
                    color='primary'
                    fontSize='large'
                    fontWeight='normal'
                    lineHeight='normalNormal'
                  >
                    {process.id}
                  </Text>
                </Box>
                <Box alignItems='center'>
                  <Text
                    color='primary'
                    fontSize='extraLarge'
                    fontWeight='normal'
                    lineHeight='largeSmall'
                  >
                    {process.process}
                  </Text>
                </Box>
              </Box>
              <Box width='560px' flexWrap='wrap'>
                <Text color='primary' fontSize='large' fontWeight='normal' lineHeight='normalLarge'>
                  {process.text}
                </Text>
              </Box>
            </Row>
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
      >
        <DefaultIcon width='100%' height='100%' />
      </Box>
    </Box>
  </Box>
)
