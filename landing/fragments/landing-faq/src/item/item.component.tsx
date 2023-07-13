import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { CrossIcon }        from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { QuestionProps }    from './item.interfaces'

export const Item: FC<QuestionProps> = ({ question, divider }) => (
  <Column>
    <Layout flexBasis={[16, 40]} flexShrink='0' />

    <Row justifyContent={['space-between', 'start']}>
      <Box display={['none', 'flex']} alignItems='center'>
        <CrossIcon width={20} height={20} />
      </Box>

      <Layout flexBasis={[0, 27]} flexShrink='0' />

      <Box flexGrow={[1, 0]}>
        <Text
          color='text.faq.primary'
          fontSize={['small', 'ordinary']}
          fontWeight='normal'
          lineHeight={['normal', 'regular']}
        >
          <FormattedMessage id={question} />
        </Text>
      </Box>

      <Box display={['flex', 'none']} alignItems='center'>
        <CrossIcon width={12} height={12} />
      </Box>
    </Row>

    <Layout flexBasis={[16, 40]} />

    <Divider backgroundColor='divider.secondary' weight={divider} />
  </Column>
)
