import React           from 'react'

import { DefaultIcon } from '@ui/icons'
import { ImageBlock }  from '@ui/image'
import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { NextLink }    from '@ui/link'
import { Text }        from '@ui/text'

export const Courses = () => (
  <Box backgroundColor='background.courses' width='100%' margin='0 auto'>
    <Column margin={['64px 20px', '160px 80px 240px 230px']}>
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
      <Box
        border='solid 1px black'
        width='100%'
        height='1px'
        marginTop={['40px', '48px']}
        marginBottom={['40px', '48px']}
      />
      <Box flexDirection={['column', 'row']} justifyContent='space-between' marginBottom='80px'>
        <Box flexWrap='wrap' flexBasis='45%' marginBottom={['20px', '0']}>
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
        <Box flexWrap='wrap' flexBasis='37%'>
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
      <Box flexDirection={['column', 'row']} width='100%' justifyContent='space-between'>
        <Column flexBasis={['auto', '1000px']} order={['2', '0']}>
          <Column
            marginTop={['0', '40px']}
            marginLeft='32px'
            marginBottom={['52px', '120px']}
            maxWidth='694px'
          >
            <Text
              color='text.second'
              fontSize={['large', 'extraLarge']}
              fontWeight='normal'
              lineHeight={['normalMedium', 'largeSmall']}
              marginBottom='16px'
            >
              Frontend Engineer
            </Text>
            <Text
              color='text.second'
              fontSize='big'
              fontWeight='normal'
              lineHeight='normalMedium'
              display={['none', 'flex']}
            >
              Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования.
              Получите востребованную профессию и возможность открыть бизнес в сфере информационных
              технологий
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
          <Column marginLeft='32px' marginBottom={['36px', '112px']} maxWidth='694px'>
            <Text
              color='text.second'
              fontSize={['large', 'extraLarge']}
              fontWeight='normal'
              lineHeight={['normalMedium', 'largeSmall']}
              marginBottom='16px'
            >
              Основы разработки
            </Text>
            <Text
              color='text.second'
              fontSize='big'
              fontWeight='normal'
              lineHeight='normalMedium'
              display={['none', 'flex']}
            >
              Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования.
              Получите востребованную профессию и возможность открыть бизнес в сфере информационных
              технологий
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
          <Row
            marginBottom={['52px', '0px']}
            justifyContent='space-between'
            overflow='hidden'
            paddingLeft={['20px', '0']}
          >
            <Box margin={['0', '32px']} flexShrink='0' flexBasis={['228px', '490px']}>
              <Text
                color='text.second'
                fontSize={['big', 'extraLarge']}
                fontWeight='normal'
                lineHeight={['normalSmall', 'largeSmall']}
              >
                Как использовать библиотеки
              </Text>
            </Box>
            <Box margin={['0', '32px']} flexShrink='0' flexBasis={['228px', '496px']}>
              <Text
                color='text.second'
                fontSize={['big', 'extraLarge']}
                fontWeight='normal'
                lineHeight={['normalSmall', 'largeSmall']}
              >
                Дизайн, Figma, Математика
              </Text>
            </Box>
          </Row>
        </Column>
        <Column maxWidth='410px' order={['1', '0']}>
          <Box margin={['0 16px 16px', '32px auto 74px']} maxWidth={['none', '346px']}>
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
          <Box display={['none', 'flex']} width='240px' height='240px' margin='0 auto 62px'>
            <DefaultIcon width='100%' height='100%' />
          </Box>

          <Box
            maxWidth={['100%', '188px']}
            justifyContent='space-between'
            margin={['0 16px', '0 0 68px']}
          >
            <Box
              flexDirection={['row', 'column']}
              marginBottom={['76px', '68px']}
              maxWidth={['content', '188px']}
              alignItems={['center', 'normal']}
              height={['64px', 'content']}
            >
              <Box marginBottom={['0', '8px']} marginRight={['12px', '0']}>
                <Text
                  color='text.second'
                  fontSize={['extraGiant', 'super']}
                  fontWeight='normal'
                  lineHeight='largeMedium'
                >
                  5
                </Text>
              </Box>
              <Box flexBasis={['131px', 'auto']}>
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
          <Box display={['none', 'flex']}>
            <Text color='text.second' fontSize='big' fontWeight='normal' lineHeight='normalSmall'>
              Процесс поступления
            </Text>
          </Box>
        </Column>
      </Box>
      <Box flexWrap='wrap' display={['flex', 'none']}>
        <NextLink>
          <Text color='text.second' fontSize='small' fontWeight='normal' lineHeight='small'>
            Все материалы
          </Text>
        </NextLink>
      </Box>
    </Column>
  </Box>
)
