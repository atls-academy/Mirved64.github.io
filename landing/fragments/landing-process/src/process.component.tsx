import React                      from 'react'

import { ArrowLeftIcon }          from '@ui/icons'
import { ArrowRightIcon }         from '@ui/icons'
import { DefaultIcon }            from '@ui/icons'
import { ImageBlock }             from '@ui/image'
import { Box }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Text }                   from '@ui/text'

import { processList }            from './process-list/process.list'
import { technologiesListTop }    from './technologies-list/technologies.list'
import { technologiesListBottom } from './technologies-list/technologies.list'

export const Process = () => (
  <Box backgroundColor='background.process' width='100%' margin='0 auto' flexDirection='column'>
    <Layout flexBasis={[64, 160]} />
    <Box margin='0 auto' position='relative' width='92%' flexDirection='column'>
      {processList.map((process, index) => {
        if (index !== processList.length - 1) {
          return (
            <Column key={process.id}>
              <Box flexDirection={['column', 'row']} justifyContent='space-between'>
                <Box flexBasis={['', 560]}>
                  <Box alignItems='center'>
                    <Text
                      color='text.primary'
                      fontSize={['normal', 'large']}
                      fontWeight='normal'
                      lineHeight={['small', 'normalNormal']}
                    >
                      {process.id}
                    </Text>
                  </Box>
                  <Layout flexBasis={[1, 32]} />
                  <Box alignItems='center'>
                    <Text
                      color='text.primary'
                      fontSize={['large', 'extraLarge']}
                      fontWeight={['normalMedium', 'normal']}
                      lineHeight='largeSmall'
                    >
                      {process.process}
                    </Text>
                  </Box>
                </Box>
                <Box flexBasis={['100%', '560px']} flexWrap='wrap'>
                  <Text
                    color='text.primary'
                    fontSize={['atom', 'large']}
                    fontWeight='normal'
                    lineHeight={['smallMedium', 'normalLarge']}
                  >
                    {process.text}
                  </Text>
                </Box>
              </Box>
              <Layout flexBasis={[28, 48]} />
              <Box border='solid 1px #FFFFFF' />
              <Layout flexBasis={[28, 48]} />
            </Column>
          )
        }
        return (
          <Column key={process.id}>
            <Box flexDirection={['column', 'row']} justifyContent='space-between'>
              <Box flexBasis={['', 560]}>
                <Box alignItems='center'>
                  <Text
                    color='text.primary'
                    fontSize={['normal', 'large']}
                    fontWeight='normal'
                    lineHeight={['small', 'normalNormal']}
                  >
                    {process.id}
                  </Text>
                </Box>
                <Layout flexBasis={[12, 32]} />
                <Box alignItems='center'>
                  <Text
                    color='text.primary'
                    fontSize={['large', 'extraLarge']}
                    fontWeight={['normalMedium', 'normal']}
                    lineHeight='largeSmall'
                  >
                    {process.process}
                  </Text>
                </Box>
              </Box>
              <Box flexBasis={['100%', '560px']} flexWrap='wrap'>
                <Layout flexBasis={[23, 0]} />
                <Text
                  color='text.primary'
                  fontSize={['atom', 'large']}
                  fontWeight='normal'
                  lineHeight={['smallMedium', 'normalLarge']}
                >
                  {process.text}
                </Text>
              </Box>
            </Box>
            <Layout flexBasis={[0, 160]} />
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
    <Column>
      <Layout flexBasis={[0, 64]} />
      <Box border='solid 1px #FFFFFF' />
      <Layout flexBasis={[36, 64]} />
      <Row overflowX='hidden' width='100%'>
        {technologiesListTop.map((technology) => (
          <Box flexShrink='0' key={technology.technology}>
            <Text
              color='text.primary'
              fontSize={['giantMedium', 'extraSuper']}
              fontWeight='lighter'
              lineHeight={['largeSmall', 'largeLarge']}
              whiteSpace='nowrap'
            >
              {technology.technology}
            </Text>
            <Layout flexBasis={24} />
            <Box width='48px' margin='auto 0' border='solid 2px #FFFFFF' />
            <Layout flexBasis={24} />
          </Box>
        ))}
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Row overflow='hidden' width='100%'>
        {technologiesListBottom.map((technology) => (
          <Box flexShrink='0' key={technology.technology}>
            <Text
              color='text.primary'
              fontFamily='second'
              fontSize={['giantMedium', 'extraSuper']}
              fontWeight='lighter'
              lineHeight={['largeSmall', 'largeLarge']}
              whiteSpace='nowrap'
            >
              {technology.technology}
            </Text>
            <Layout flexBasis={24} />
            <Box width='48px' margin='auto 0' border='solid 2px #FFFFFF' />
            <Layout flexBasis={24} />
          </Box>
        ))}
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Box border='solid 1px #FFFFFF' />
      <Layout flexBasis={[56, 64]} />
    </Column>
    <Column>
      <Layout flexBasis={[0, 160]} />
      <Column margin='0 auto' alignItems='center' flexWrap='wrap' maxWidth={['90%', '890px']}>
        <Box>
          <Text
            color='text.primary'
            fontSize={['extraAtom', 'atom']}
            lineHeight={['atom', 'extraSmall']}
          >
            ПРОЦЕСС СОЗДАНИЯ
          </Text>
        </Box>
        <Layout flexBasis={24} />
        <Box>
          <Text
            color='text.primary'
            fontSize={['large', 'extraLarge']}
            lineHeight={['normalMedium', 'large']}
            textAlign='center'
            letter='-1%'
          >
            Любой процесс перестаёт быть сложным, когда знаешь как он протекает
          </Text>
        </Box>
      </Column>
      <Column margin='0 auto'>
        <Box margin='0 auto' width={['138px', '960px']} height={['340px', '540px']}>
          <ImageBlock src='./image/Default.png' />
        </Box>
        <Layout flexBasis={[18, 51]} />
        <Row justifyContent='space-between' alignItems='center'>
          <Box padding='29px 15px'>
            <ArrowLeftIcon width='10px' height='5px' fill='#FFFFFF' />
          </Box>
          <Box padding={['0', '19px 0 19px']} maxWidth={['190px', '780px']}>
            <Text
              color='text.primary'
              fontSize='small'
              lineHeight='normalNormal'
              textAlign='center'
            >
              Формирование системы базовых фрагментов и компонентов
            </Text>
          </Box>
          <Box padding='29px 15px'>
            <ArrowRightIcon width='10px' height='5px' fill='#FFFFFF' />
          </Box>
        </Row>
        <Layout flexBasis={[70, 160]} />
      </Column>
    </Column>
  </Box>
)
