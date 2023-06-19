import React        from 'react'

import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Row }      from '@ui/layout'
import { NextLink } from '@ui/link'
import { Text }     from '@ui/text'

import { faqList }  from './faq-list/faq.list'

export const Faq = () => (
  <Box
    backgroundColor='#ffffff'
    width='1920px'
    margin='0 auto'
    flexDirection='column'
    height='1200px'
  >
    <Column width='1610px' height='1200px' margin='160px 80px 240px 230px'>
      <Row width='100%' height='115px' justifyContent='space-between' alignItems='center'>
        <Box width='890px' height='115px'>
          <Text
            color='second'
            fontSize='biggest'
            fontWeight='normal'
            lineHeight='biggest'
            letter='-2%'
          >
            Вопросы и ответы
          </Text>
        </Box>
        <Box width='150px' height='22px'>
          <NextLink>
            <Text color='second' fontSize='big' fontWeight='normal' lineHeight='normalSmall'>
              Задать вопрос
            </Text>
          </NextLink>
        </Box>
      </Row>
      <Box border='solid 1px black' width='100%' height='1px' marginTop='80px' />
      <Column>
        {faqList.map((question) => (
          <Column key={question.id} height='100%'>
            <Row marginBottom='40px' marginTop='40px'>
              <Box marginRight='27px' alignItems='center'>
                <Text color='second' fontSize='small' fontWeight='normal'>
                  +
                </Text>
              </Box>
              <Box alignItems='center'>
                <Text color='second' fontSize='xl' fontWeight='normal' lineHeight='largeSmall'>
                  {question.question}
                </Text>
              </Box>
            </Row>
            <Box border='solid 1px #000000' />
          </Column>
        ))}
      </Column>
    </Column>
  </Box>
)
