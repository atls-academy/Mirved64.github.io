import React           from 'react'

import { DefaultIcon } from '@ui/icons'
import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { NextLink }    from '@ui/link'
import { Text }        from '@ui/text'

export const Courses = () => (
  <Box backgroundColor='#ffffff' width='100%' margin='0 auto'>
    <Column margin='160px 80px 240px 230px'>
      <Row justifyContent='space-between' alignItems='center'>
        <Box flexWrap='wrap' flexGrow='1'>
          <Text
            color='second'
            fontSize='biggest'
            fontWeight='normal'
            lineHeight='biggest'
            letter='-2%'
          >
            Курсы и материалы
          </Text>
        </Box>
        <Box flexWrap='wrap'>
          <NextLink>
            <Text color='second' fontSize='big' fontWeight='normal' lineHeight='normalSmall'>
              Все материалы
            </Text>
          </NextLink>
        </Box>
      </Row>
      <Box
        border='solid 1px black'
        width='100%'
        height='1px'
        marginTop='48px'
        marginBottom='48px'
      />
      <Row justifyContent='space-between' marginBottom='80px'>
        <Box flexWrap='wrap' flexBasis='40%'>
          <Text color='second' fontSize='xl' fontWeight='normal' lineHeight='largeSmall'>
            Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные
            возможности в применении навыков.
          </Text>
        </Box>
        <Box flexWrap='wrap' flexBasis='35%'>
          <Text color='second' fontSize='xl' fontWeight='normal' lineHeight='largeSmall'>
            Эффективность обучения заметно вырастает благодаря практики на существующих проектах.
          </Text>
        </Box>
      </Row>
      <Row width='100%' justifyContent='space-between'>
        <Column flexBasis='1160px'>
          <Column marginTop='40px' marginLeft='20px' marginBottom='120px' maxWidth='694px'>
            <Text
              color='second'
              fontSize='extraLarge'
              fontWeight='normal'
              lineHeight='largeSmall'
              marginBottom='16px'
            >
              Frontend Engineer
            </Text>
            <Text color='second' fontSize='big' fontWeight='normal' lineHeight='normalMedium'>
              Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования.
              Получите востребованную профессию и возможность открыть бизнес в сфере информационных
              технологий
            </Text>
          </Column>
          <Column marginLeft='20px' marginBottom='112px' maxWidth='694px'>
            <Text
              color='second'
              fontSize='extraLarge'
              fontWeight='normal'
              lineHeight='largeSmall'
              marginBottom='16px'
            >
              Основы разработки
            </Text>
            <Text color='second' fontSize='big' fontWeight='normal' lineHeight='normalMedium'>
              Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования.
              Получите востребованную профессию и возможность открыть бизнес в сфере информационных
              технологий
            </Text>
          </Column>
          <Row width='100%' height='156px' justifyContent='space-between'>
            <Box margin='32px'>
              <Text
                color='second'
                fontSize='extraLarge'
                fontWeight='normal'
                lineHeight='largeSmall'
              >
                Как использовать библиотеки
              </Text>
            </Box>
            <Box margin='32px'>
              <Text
                color='second'
                fontSize='extraLarge'
                fontWeight='normal'
                lineHeight='largeSmall'
              >
                Дизайн, Figma, Математика
              </Text>
            </Box>
          </Row>
        </Column>
        <Column maxWidth='410px'>
          <Box margin='32px auto 74px' maxWidth='346px'>
            <Text color='second' fontSize='small' fontWeight='normal' lineHeight='normalNormal'>
              Вы изучите фундаментальные знания в IT и прокачаете нужные для сферы навыки. Мы не
              собираем большие группы, что позволяет курировать работу каждого студента.
            </Text>
          </Box>
          <Box width='240px' height='240px' margin='0 auto 62px'>
            <DefaultIcon width='100%' height='100%' />
          </Box>
          <Column marginLeft='32px' marginBottom='68px' maxWidth='188px' flexWrap='wrap'>
            <Text
              color='second'
              fontSize='super'
              fontWeight='normal'
              lineHeight='largeMedium'
              marginBottom='8px'
            >
              5
            </Text>
            <Text color='second' fontSize='atom' fontWeight='normal' lineHeight='normalSmall'>
              студентов обучаются в одной практической группе
            </Text>
          </Column>
          <Box marginLeft='32px'>
            <Text color='second' fontSize='big' fontWeight='normal' lineHeight='normalSmall'>
              Процесс поступления
            </Text>
          </Box>
        </Column>
      </Row>
    </Column>
  </Box>
)
