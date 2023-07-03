import React                      from 'react'
import { FormattedMessage }       from 'react-intl'

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
            <Column key={process.process}>
              <Box flexBasis={['content', 'content']}>
                <Box alignItems={['start', 'center']}>
                  <Text
                    color='text.primary'
                    fontSize={['normal', 'large']}
                    fontWeight='normal'
                    lineHeight={['small', 'normalNormal']}
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
                      fontSize={['large', 'extraLarge']}
                      fontWeight={['normalMedium', 'normal']}
                      lineHeight='largeSmall'
                    >
                      <FormattedMessage id={process.process} defaultMessage={process.process} />
                    </Text>
                  </Box>
                  <Box flexBasis={['100%', '560px']} flexWrap='wrap'>
                    <Text
                      color='text.primary'
                      fontSize={['atom', 'large']}
                      fontWeight='normal'
                      lineHeight={['smallMedium', 'normalLarge']}
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
              <Box border='solid 1px' borderColor='divider.primary' />
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
                  fontSize={['normal', 'large']}
                  fontWeight='normal'
                  lineHeight={['small', 'normalNormal']}
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
                    fontSize={['large', 'extraLarge']}
                    fontWeight={['normalMedium', 'normal']}
                    lineHeight='largeSmall'
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
                    fontSize={['atom', 'large']}
                    fontWeight='normal'
                    lineHeight={['smallMedium', 'normalLarge']}
                  >
                    <FormattedMessage
                      id={`processText ${String(index)}`}
                      defaultMessage={process.text}
                    />
                  </Text>
                </Box>
              </Box>
            </Box>
            <Layout flexBasis={[24, 160]} />
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
      <Layout flexBasis={[32, 64]} />
      <Box border='solid 1px' borderColor='divider.primary' />
      <Layout flexBasis={[36, 64]} />
      <Row overflow='hidden' width='100%'>
        {technologiesListTop.map((technology, index) => (
          <Box flexShrink='0' key={technology.technology}>
            <Text
              color='text.primary'
              fontSize={['giantMedium', 'extraSuper']}
              fontWeight='lighter'
              lineHeight={['largeSmall', 'largeLarge']}
              whiteSpace='nowrap'
            >
              <FormattedMessage
                id={`technologyTop ${String(index)}`}
                defaultMessage={technology.technology}
              />
            </Text>
            <Layout flexBasis={24} />
            <Box width='48px' margin='auto 0' border='solid 2px' borderColor='divider.primary' />
            <Layout flexBasis={24} />
          </Box>
        ))}
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Row overflow='hidden' width='100%'>
        {technologiesListBottom.map((technology, index) => (
          <Box flexShrink='0' key={technology.technology}>
            <Text
              color='text.primary'
              fontFamily='second'
              fontSize={['giantMedium', 'extraSuper']}
              fontWeight='lighter'
              lineHeight={['largeSmall', 'largeLarge']}
              whiteSpace='nowrap'
            >
              <FormattedMessage
                id={`technologyBottom ${String(index)}`}
                defaultMessage={technology.technology}
              />
            </Text>
            <Layout flexBasis={24} />
            <Box width='48px' margin='auto 0' border='solid 2px' borderColor='divider.primary' />
            <Layout flexBasis={24} />
          </Box>
        ))}
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Box border='solid 1px' borderColor='divider.primary' />
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
            <FormattedMessage id='processSubtitle' defaultMessage='ПРОЦЕСС СОЗДАНИЯ' />
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
            <FormattedMessage
              id='processSlogan'
              defaultMessage='Любой процесс перестаёт быть сложным, когда знаешь как он протекает'
            />
          </Text>
        </Box>
      </Column>
      <Column margin='0 auto'>
        <Box margin='0 auto' width={['138px', '960px']} height={['340px', '540px']}>
          <ImageBlock src='./image/Default.png' />
        </Box>
        <Layout flexBasis={[18, 51]} />
        <Row justifyContent='space-between' alignItems='center'>
          <Box height='60px' width='40px' justifyContent='center' alignItems='center'>
            <ArrowLeftIcon width='30px' height='15px' />
          </Box>
          <Box height={['100%', 60]} maxWidth={['190px', '780px']} alignItems='center'>
            <Text
              color='text.primary'
              fontSize='small'
              lineHeight='normalNormal'
              textAlign='center'
            >
              <FormattedMessage
                id='processSign'
                defaultMessage='Формирование системы базовых фрагментов и компонентов'
              />
            </Text>
          </Box>
          <Box height='60px' width='40px' justifyContent='center' alignItems='center'>
            <ArrowRightIcon width='30px' height='15px' />
          </Box>
        </Row>
        <Layout flexBasis={[70, 160]} />
      </Column>
    </Column>
  </Box>
)
