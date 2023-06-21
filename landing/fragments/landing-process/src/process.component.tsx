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
    <Box
      margin={['64px auto 56px', '160px auto']}
      position='relative'
      width='90%'
      flexDirection='column'
    >
      {processList.map((process, index) => {
        if (index !== processList.length - 1) {
          return (
            <Column key={process.id}>
              <Box
                flexDirection={['column', 'row']}
                justifyContent='space-between'
                marginBottom='48px'
              >
                <Box>
                  <Box alignItems='center' marginRight={['12px', '32px']}>
                    <Text
                      color='primary'
                      fontSize={['normal', 'large']}
                      fontWeight='normal'
                      lineHeight={['small', 'normalNormal']}
                    >
                      {process.id}
                    </Text>
                  </Box>
                  <Box alignItems='center'>
                    <Text
                      color='primary'
                      fontSize={['large', 'extraLarge']}
                      fontWeight={['normalMedium', 'normal']}
                      lineHeight='largeSmall'
                    >
                      {process.process}
                    </Text>
                  </Box>
                </Box>
                <Box flexBasis={['100%', '560px']} flexWrap='wrap' paddingLeft={['23px', '0']}>
                  <Text
                    color='primary'
                    fontSize={['atom', 'large']}
                    fontWeight='normal'
                    lineHeight={['smallMedium', 'normalLarge']}
                  >
                    {process.text}
                  </Text>
                </Box>
              </Box>
              <Box border='solid 1px #FFFFFF' marginBottom={['28px', '48px']} />
            </Column>
          )
        }
        return (
          <Column key={process.id}>
            <Box
              flexDirection={['column', 'row']}
              justifyContent='space-between'
              marginBottom={['0', '48px']}
            >
              <Box>
                <Box alignItems='center' marginRight={['12px', '32px']}>
                  <Text
                    color='primary'
                    fontSize={['normal', 'large']}
                    fontWeight='normal'
                    lineHeight={['small', 'normalNormal']}
                  >
                    {process.id}
                  </Text>
                </Box>
                <Box alignItems='center'>
                  <Text
                    color='primary'
                    fontSize={['large', 'extraLarge']}
                    fontWeight={['normalMedium', 'normal']}
                    lineHeight='largeSmall'
                  >
                    {process.process}
                  </Text>
                </Box>
              </Box>
              <Box flexBasis={['100%', '560px']} flexWrap='wrap' paddingLeft={['23px', '0']}>
                <Text
                  color='primary'
                  fontSize={['atom', 'large']}
                  fontWeight='normal'
                  lineHeight={['smallMedium', 'normalLarge']}
                >
                  {process.text}
                </Text>
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
    <Column>
      <Box border='solid 1px #FFFFFF' margin={['0 0 36px', '64px 0']} />
      <Row marginBottom={['36px', '64px']} overflow='hidden'>
        {technologiesListTop.map((technology) => (
          <Box flexShrink='0' key={technology.technology}>
            <Text
              color='primary'
              fontSize={['giantMedium', 'extraSuper']}
              fontWeight='lighter'
              lineHeight={['largeSmall', 'largeLarge']}
            >
              {technology.technology}
            </Text>
            <Box width='48px' margin='auto 24px' border='solid 2px #FFFFFF' />
          </Box>
        ))}
      </Row>
      <Row marginBottom={['36px', '64px']} overflow='hidden'>
        {technologiesListBottom.map((technology) => (
          <Box flexShrink='0' key={technology.technology}>
            <Text
              color='primary'
              fontFamily='GellaDisplay'
              fontSize={['giantMedium', 'extraSuper']}
              fontWeight='lighter'
              lineHeight={['largeSmall', 'largeLarge']}
            >
              {technology.technology}
            </Text>
            <Box width='48px' margin='auto 24px' border='solid 2px #FFFFFF' />
          </Box>
        ))}
      </Row>
      <Box border='solid 1px #FFFFFF' marginBottom={['56px', '64px']} />
    </Column>
    <Column>
      <Column
        margin={['0 auto 24px', '160px auto 50px']}
        alignItems='center'
        flexWrap='wrap'
        maxWidth={['90%', '890px']}
      >
        <Box>
          <Text
            color='primary'
            fontSize={['extraAtom', 'atom']}
            lineHeight={['atom', 'extraSmall']}
            marginBottom='24px'
          >
            ПРОЦЕСС СОЗДАНИЯ
          </Text>
        </Box>
        <Box>
          <Text
            color='primary'
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
        <Box width={['335px', '960px']} marginBottom={['18px', '32px']}>
          <DefaultIcon width={['130px', '100%']} height={['340px', '100%']} />
        </Box>
        <Row justifyContent='space-between' alignItems='center' marginBottom={['70px', '160px']}>
          <Box padding='29px 15px'>
            <ArrowLeftIcon width='10px' height='5px' fill='#FFFFFF' />
          </Box>
          <Box padding={['0', '19px 0 19px']} maxWidth={['190px', '780px']}>
            <Text color='primary' fontSize='small' lineHeight='normalNormal' textAlign='center'>
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
