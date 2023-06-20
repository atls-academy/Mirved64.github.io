import React                      from 'react'

import { ArrowLeftIcon }          from '@ui/icons'
import { ArrowRightIcon }         from '@ui/icons'
import { DefaultIcon }            from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Text }                   from '@ui/text'

import { processList }            from './process-list/process.list'
import { technologiesListTop }    from './technologies-list/technologies.list'
import { technologiesListBottom } from './technologies-list/technologies.list'

export const Process = () => (
  <Box backgroundColor='#666666' width='100%' margin='0 auto' flexDirection='column'>
    <Box margin='160px auto' position='relative' width='90%' flexDirection='column'>
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
    <Column>
      <Box border='solid 1px #FFFFFF' margin='64px 0' />
      <Row marginBottom='64px' overflow='hidden'>
        {technologiesListTop.map((technology) => (
          <Box flexShrink='0' key={technology.technology}>
            <Text
              color='primary'
              fontSize='extraSuper'
              fontWeight='lighter'
              lineHeight='largeLarge'
            >
              {technology.technology}
            </Text>
            <Box width='48px' margin='auto 24px' border='solid 2px #FFFFFF' />
          </Box>
        ))}
      </Row>
      <Row marginBottom='64px' overflow='hidden'>
        {technologiesListBottom.map((technology) => (
          <Box flexShrink='0' key={technology.technology}>
            <Text
              color='primary'
              fontFamily='GellaDisplay'
              fontSize='extraSuper'
              fontWeight='lighter'
              lineHeight='largeLarge'
            >
              {technology.technology}
            </Text>
            <Box width='48px' margin='auto 24px' border='solid 2px #FFFFFF' />
          </Box>
        ))}
      </Row>
      <Box border='solid 1px #FFFFFF' marginBottom='64px' />
    </Column>
    <Column>
      <Column margin='160px auto 50px' alignItems='center' flexWrap='wrap' width='960px'>
        <Text color='primary' fontSize='atom' lineHeight='extraSmall' marginBottom='24px'>
          ПРОЦЕСС СОЗДАНИЯ
        </Text>
        <Text
          color='primary'
          fontSize='extraLarge'
          lineHeight='LargeSmall'
          textAlign='center'
          letter='-1%'
        >
          Любой процесс перестаёт быть сложным, <br />
          когда знаешь как он протекает
        </Text>
      </Column>
      <Column margin='0 auto'>
        <Box width='960px' height='540px' marginBottom='32px'>
          <DefaultIcon width='100%' height='100%' />
        </Box>
        <Row justifyContent='space-around' alignItems='center' marginBottom='160px'>
          <Box padding='29px 15px'>
            <ArrowLeftIcon width='10px' height='5px' fill='#FFFFFF' />
          </Box>
          <Box padding='19px 0 19px'>
            <Text color='primary' fontSize='small' lineHeight='normalNormal'>
              Формирование системы базовых фрагментов и компонентов
            </Text>
          </Box>
          <Box padding='29px 15px'>
            <ArrowRightIcon width='10px' height='5px' fill='#FFFFFF' />
          </Box>
        </Row>
      </Column>
    </Column>
  </Box>
)
