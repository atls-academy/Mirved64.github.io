import React           from 'react'

import { DefaultIcon } from '@ui/icons'
import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { NextLink }    from '@ui/link'
import { Text }        from '@ui/text'

export const Courses = () => (
  <Box backgroundColor='#ffffff' width='1920px' margin='0 auto'>
    <Column width='1610px' height='1225px' margin='160px 80px 240px 230px'>
      <Row width='100%' height='115px' justifyContent='space-between' alignItems='center'>
        <Box width='890px' height='115px'>
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
        <Box width='150px' height='22px'>
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
      <Box width='100%' height='135px' justifyContent='space-between' marginBottom='80px'>
        <Box width='710px' height='100%'>
          <Text color='second' fontSize='xl' fontWeight='normal' lineHeight='largeSmall'>
            Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные
            возможности в применении навыков.
          </Text>
        </Box>
        <Box width='559px' height='100%'>
          <Text color='second' fontSize='xl' fontWeight='normal' lineHeight='largeSmall'>
            Эффективность обучения заметно вырастает благодаря практики на существующих проектах.
          </Text>
        </Box>
      </Box>
      <Box width='100%' height='734px' justifyContent='space-between'>
        <Column width='1160px' height='688px'>
          <Column
            width='694px'
            height='146px'
            marginTop='40px'
            marginLeft='20px'
            marginBottom='120px'
          >
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
          <Column width='694px' height='146px' marginLeft='20px' marginBottom='112px'>
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
          <Box width='100%' height='156px' justifyContent='space-between'>
            <Box width='496px' height='92px' margin='32px'>
              <Text
                color='second'
                fontSize='extraLarge'
                fontWeight='normal'
                lineHeight='largeSmall'
              >
                Как использовать библиотеки
              </Text>
            </Box>
            <Box width='496px' height='92px' margin='32px'>
              <Text
                color='second'
                fontSize='extraLarge'
                fontWeight='normal'
                lineHeight='largeSmall'
              >
                Дизайн, Figma, Математика
              </Text>
            </Box>
          </Box>
        </Column>
        <Column width='410px' height='100%'>
          <Box width='346px' height='104px' margin='32px auto 74px'>
            <Text color='second' fontSize='small' fontWeight='normal' lineHeight='normalNormal'>
              Вы изучите фундаментальные знания в IT и прокачаете нужные для сферы навыки. Мы не
              собираем большие группы, что позволяет курировать работу каждого студента.
            </Text>
          </Box>
          <Box width='240px' height='240px' margin='0 auto 62px'>
            <DefaultIcon width='100%' height='100%' />
          </Box>
          <Column width='188px' height='116px' marginLeft='32px' marginBottom='68px'>
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
          <Box width='220px' height='22px' marginLeft='32px'>
            <Text color='second' fontSize='big' fontWeight='normal' lineHeight='normalSmall'>
              Процесс поступления
            </Text>
          </Box>
        </Column>
      </Box>
    </Column>
  </Box>
)
