import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

import { QuestionProps }    from './item.interfaces'

export const Item: FC<QuestionProps> = ({ question, divider, gap = 'flex' }) => (
  <Column height='100%'>
    <Layout flexBasis={[16, 40]} />
    <Row justifyContent={['space-between', 'start']}>
      <Box alignItems='center' order={['2', '0']}>
        <Text color='text.secondary' fontSize='small' fontWeight='normal'>
          <FormattedMessage id='faqCross' />
        </Text>
      </Box>
      <Layout flexBasis={[0, 27]} />
      <Box alignItems='center' flexGrow={[1, 0]}>
        <Text
          color='text.secondary'
          fontSize={['small', 'ordinary']}
          fontWeight='normal'
          lineHeight={['standart', 'regular']}
        >
          <FormattedMessage id={question} />
        </Text>
      </Box>
    </Row>
    <Layout flexBasis={[16, 40]} />
    <Divider backgroundColor='divider.secondary' weight={divider} />
  </Column>
)
