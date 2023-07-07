import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { CrossIcon }        from '@ui/icons'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { QuestionProps }    from './item.interfaces'

export const Item: FC<QuestionProps> = ({ question, divider }) => (
  <Column height='100%'>
    <Layout flexBasis={[16, 40]} flexShrink='0' />

    <Row justifyContent={['space-between', 'start']} alignItems='center'>
      <Layout
        alignItems='center'
        order={['2', '0']}
        width={['12px', '20px']}
        height={['12px', '20px']}
      >
        <CrossIcon width={['12px', '20px']} height={['12px', '20px']} />
      </Layout>

      <Layout flexBasis={[0, 27]} flexShrink='0' />

      <Layout alignItems='center' flexGrow={[1, 0]}>
        <Text
          color='text.faq.primary'
          fontSize={['small', 'ordinary']}
          fontWeight='normal'
          lineHeight={['standart', 'regular']}
        >
          <FormattedMessage id={question} />
        </Text>
      </Layout>
    </Row>

    <Layout flexBasis={[16, 40]} />

    <Divider backgroundColor='divider.secondary' weight={divider} />
  </Column>
)
