import React        from 'react'

import { Box }      from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Column }   from '@ui/layout'
import { Row }      from '@ui/layout'
import { NextLink } from '@ui/link'
import { Text }     from '@ui/text'

import { faqList }  from './faq-list/faq.list'

export const Faq = () => (
  <Box backgroundColor='background.faq' width='100%' margin='0 auto'>
    <Layout flexBasis={[16, 230]} />
    <Column flexGrow='1'>
      <Layout flexBasis={[80, 160]} />
      <Row width='100%' justifyContent='space-between' alignItems='center'>
        <Box>
          <Text
            color='text.second'
            fontSize={['xl', 'biggest']}
            fontWeight='normal'
            lineHeight={['largeSmall', 'biggest']}
            letter='-2%'
          >
            Вопросы и ответы
          </Text>
        </Box>
        <Box display={['none', 'flex']}>
          <NextLink>
            <Text color='text.second' fontSize='big' fontWeight='normal' lineHeight='normalSmall'>
              Задать вопрос
            </Text>
          </NextLink>
        </Box>
      </Row>
      <Layout flexBasis={80} display={['none', 'flex']} />
      <Box border='solid 1px black' width='100%' display={['none', 'flex']} />
      <Column>
        {faqList.map((question) => (
          <Column key={question.id} height='100%'>
            <Layout flexBasis={[16, 40]} />
            <Row justifyContent={['space-between', 'start']}>
              <Box alignItems='center' order={['2', '0']}>
                <Text color='text.second' fontSize='xl' fontWeight='normal'>
                  +
                </Text>
              </Box>
              <Layout flexBasis={[0, 27]} />
              <Box alignItems='center' flexGrow={[1, 0]}>
                <Text
                  color='text.second'
                  fontSize={['big', 'xl']}
                  fontWeight='normal'
                  lineHeight={['normalLarge', 'largeSmall']}
                >
                  {question.question}
                </Text>
              </Box>
            </Row>
            <Layout flexBasis={[16, 40]} />
            <Box border='solid 1px black' />
          </Column>
        ))}
      </Column>
      <Layout flexBasis={60} />
      <Box display={['flex', 'none']}>
        <NextLink>
          <Text color='text.second' fontSize='big' fontWeight='normal' lineHeight='smallMedium'>
            Задать вопрос
          </Text>
        </NextLink>
      </Box>
      <Layout flexBasis={[80, 160]} />
    </Column>
    <Layout flexBasis={[16, 80]} />
  </Box>
)
