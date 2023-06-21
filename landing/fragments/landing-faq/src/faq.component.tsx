import React        from 'react'

import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Row }      from '@ui/layout'
import { NextLink } from '@ui/link'
import { Text }     from '@ui/text'

import { faqList }  from './faq-list/faq.list'

export const Faq = () => (
  <Box backgroundColor='#ffffff' width='100%' margin='0 auto' flexDirection='column'>
    <Column margin={['80px 16px', '160px 80px 240px 230px']}>
      <Row width='100%' justifyContent='space-between' alignItems='center'>
        <Box>
          <Text
            color='second'
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
            <Text color='second' fontSize='big' fontWeight='normal' lineHeight='normalSmall'>
              Задать вопрос
            </Text>
          </NextLink>
        </Box>
      </Row>
      <Box border='solid 1px black' width='100%' marginTop='80px' display={['none', 'flex']}/>
      <Column>
        {faqList.map((question) => (
          <Column key={question.id} height='100%'>
            <Row marginBottom={['16px', '40px']} marginTop={['16px', '40px']} justifyContent={['space-between', 'start']}>
              <Box marginRight={['0', '27px']} alignItems='center' order={['2', '0']} >
                <Text color='second' fontSize='small' fontWeight='normal' >
                  +
                </Text>
              </Box>
              <Box alignItems='center'>
                <Text color='second' fontSize={['big', 'xl']} fontWeight='normal' lineHeight={['normalLarge', 'largeSmall']}>
                  {question.question}
                </Text>
              </Box>
            </Row>
            <Box border='solid 1px black' />
          </Column>
        ))}
      </Column>
      <Box display={['flex', 'none']} marginTop='60px'>
          <NextLink>
            <Text color='second' fontSize='big' fontWeight='normal' lineHeight='smallMedium'>
              Задать вопрос
            </Text>
          </NextLink>
        </Box>
    </Column>
  </Box>
)
