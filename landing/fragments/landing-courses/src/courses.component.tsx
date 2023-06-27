import React           from 'react'

import { DefaultIcon } from '@ui/icons'
import { ImageBlock }  from '@ui/image'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { NextLink }    from '@ui/link'
import { Text }        from '@ui/text'

export const Courses = () => (
  <Box backgroundColor='background.courses' width='100%' margin='0 auto'>
    <Layout flexBasis={[20, 230]} />
    <Column maxWidth={['100%', 1610]}>
      <Layout flexBasis={[64, 160]} />
      <Row justifyContent='space-between' alignItems='center'>
        <Box flexWrap='wrap' flexGrow='1'>
          <Text
            color='text.second'
            fontSize={['extraLarge', 'biggest']}
            fontWeight='normal'
            lineHeight={['large', 'biggest']}
            letter='-2%'
          >
            Курсы и материалы
          </Text>
        </Box>
        <Box flexWrap='wrap' display={['none', 'flex']}>
          <NextLink>
            <Text color='text.second' fontSize='big' fontWeight='normal' lineHeight='normalSmall'>
              Все материалы
            </Text>
          </NextLink>
        </Box>
      </Row>
      <Layout flexBasis={[40, 80]} />
      <Box border='solid 1px black' width='100%' />
      <Layout flexBasis={[40, 80]} />
      <Box flexDirection={['column', 'row']} justifyContent='space-between'>
        <Box flexWrap='wrap' flexBasis={725}>
          <Text
            color='text.second'
            fontSize={['big', 'xl']}
            fontWeight='normal'
            lineHeight={['normalMedium', 'largeSmall']}
          >
            Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные
            возможности в применении навыков.
          </Text>
        </Box>
        <Layout display={['flex', 'none']} flexDirection='column' flexBasis={[20, 0]} />
        <Box flexWrap='wrap' flexBasis={600}>
          <Text
            color='text.second'
            fontSize={['big', 'xl']}
            fontWeight='normal'
            lineHeight={['normalMedium', 'largeSmall']}
          >
            Эффективность обучения заметно вырастает благодаря практики на существующих проектах.
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={80} />
      <Box flexDirection={['column', 'row']} width='100%' justifyContent='space-between'>
        <Column flexBasis={['auto', '1000px']} order={['2', '0']}>
          <Layout flexBasis={[0, 40]} />
          <Box>
            <Layout flexBasis={['', 32]} />
            <Column maxWidth='694px'>
              <Text
                color='text.second'
                fontSize={['large', 'extraLarge']}
                fontWeight='normal'
                lineHeight={['normalMedium', 'largeSmall']}
              >
                Frontend Engineer
              </Text>
              <Layout flexBasis={16} />
              <Text
                color='text.second'
                fontSize='big'
                fontWeight='normal'
                lineHeight='normalMedium'
                display={['none', 'flex']}
              >
                Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении
                программирования. Получите востребованную профессию и возможность открыть бизнес в
                сфере информационных технологий
              </Text>
              <Text
                color='text.second'
                fontSize='atom'
                fontWeight='normal'
                lineHeight='normalSmall'
                display={['flex', 'none']}
              >
                Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите
                востребованную профессию и возможность открыть бизнес.
              </Text>
            </Column>
          </Box>
          <Layout flexBasis={[52, 120]} />
          <Box>
            <Layout flexBasis={['', 32]} />
            <Column maxWidth='694px'>
              <Text
                color='text.second'
                fontSize={['large', 'extraLarge']}
                fontWeight='normal'
                lineHeight={['normalMedium', 'largeSmall']}
              >
                Основы разработки
              </Text>
              <Layout flexBasis={16} />
              <Text
                color='text.second'
                fontSize='big'
                fontWeight='normal'
                lineHeight='normalMedium'
                display={['none', 'flex']}
              >
                Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении
                программирования. Получите востребованную профессию и возможность открыть бизнес в
                сфере информационных технологий
              </Text>
              <Text
                color='text.second'
                fontSize='atom'
                fontWeight='normal'
                lineHeight='normalSmall'
                display={['flex', 'none']}
              >
                Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите
                востребованную профессию и возможность открыть бизнес.
              </Text>
              <Layout flexBasis={[36, 112]} />
            </Column>
          </Box>
          <Row justifyContent='space-between' paddingLeft={['20px', '0']}>
            <Box flexShrink='0' flexBasis={[228, 496]}>
              <Layout flexBasis={[0, 32]} />
              <Text
                color='text.second'
                fontSize={['big', 'extraLarge']}
                fontWeight='normal'
                lineHeight={['normalSmall', 'largeSmall']}
              >
                Как использовать библиотеки
              </Text>
            </Box>
            <Box flexShrink='0' flexBasis={[228, 496]}>
              <Text
                textAlign='center'
                color='text.second'
                fontSize={['big', 'extraLarge']}
                fontWeight='normal'
                lineHeight={['normalSmall', 'largeSmall']}
              >
                Дизайн, Figma, Математика
              </Text>
            </Box>
          </Row>
          <Layout flexBasis={[52, 0]} />
        </Column>
        <Box flexBasis={['', 410]}>
          <Layout flexBasis={['', 32]} />
          <Column maxWidth='410px' order={['1', '0']}>
            <Layout flexBasis={[0, 32]} />
            <Box maxWidth={['none', '346px']}>
              <Text
                color='text.second'
                fontSize='small'
                fontWeight='normal'
                lineHeight={['small', 'normalNormal']}
              >
                Вы изучите фундаментальные знания в IT и прокачаете нужные для сферы навыки. Мы не
                собираем большие группы, что позволяет курировать работу каждого студента.
              </Text>
            </Box>
            <Layout flexBasis={[16, 74]} />
            <Box display={['none', 'flex']} width='240px' height='240px' margin='0 auto'>
              <DefaultIcon width='100%' height='100%' />
            </Box>
            <Layout flexBasis={62} />
            <Box maxWidth={['100%', '188px']} justifyContent='space-between'>
              <Box
                flexDirection={['row', 'column']}
                maxWidth={['content', '100%']}
                alignItems={['center', 'normal']}
                height={['64px', '100%']}
              >
                <Box>
                  <Text
                    color='text.second'
                    fontSize={['extraGiant', 'super']}
                    fontWeight='normal'
                    lineHeight='largeMedium'
                  >
                    5
                  </Text>
                  <Layout flexBasis={[12, 0]} />
                </Box>

                <Box flexBasis={[131, 'auto']}>
                  <Text
                    color='text.second'
                    fontSize={['extraAtom', 'atom']}
                    fontWeight='normal'
                    lineHeight={['extraSmall', 'normalSmall']}
                  >
                    студентов обучаются в одной практической группе
                  </Text>
                </Box>
              </Box>
              <Box display={['flex', 'none']} width='88px' height='64px'>
                <ImageBlock src='./image/Default.png' />
              </Box>
            </Box>
            <Layout flexBasis={[76, 68]} />
            <Box display={['none', 'flex']}>
              <Text color='text.second' fontSize='big' fontWeight='normal' lineHeight='normalSmall'>
                Процесс поступления
              </Text>
            </Box>
          </Column>
          <Layout flexBasis={['', 32]} />
        </Box>
      </Box>
      <Box flexWrap='wrap' display={['flex', 'none']}>
        <NextLink>
          <Text color='text.second' fontSize='small' fontWeight='normal' lineHeight='small'>
            Все материалы
          </Text>
        </NextLink>
      </Box>
      <Layout flexBasis={[64, 240]} />
    </Column>
    <Layout flexBasis={[20, 80]} />
  </Box>
)
