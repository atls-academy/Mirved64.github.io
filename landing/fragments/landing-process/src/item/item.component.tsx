import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

import { ItemProps }        from './item.interfaces'

export const Item: FC<ItemProps> = ({
  sequenceNumber,
  process,
  text,
  divider,
  displayDivider = true,
}) => (
  <Column>
    <Row>
      <Row flexBasis={[47, 96]} alignItems={['start', 'center']}>
        <Box width={[35, 64]} height={[35, 64]} alignItems='center' justifyContent='center'>
          <Text
            color='text.process.primary'
            fontSize={['compact', 'medium']}
            fontWeight='normal'
            lineHeight={['little', 'mini']}
            fontFamily='regular'
          >
            {sequenceNumber}
          </Text>
        </Box>

        <Layout flexBasis={[12, 32]} flexShrink='0' />
      </Row>

      <Box flexBasis={[312, 1700]} flexDirection={['column', 'row']} flexGrow='1' flexShrink='1'>
        <Box
          alignItems='center'
          flexWrap='wrap'
          flexBasis={[28, 367]}
          flexShrink={[1, 0]}
          flexGrow={[0, 1]}
        >
          <Text
            color='text.process.primary'
            fontSize={['medium', 'regular']}
            fontWeight={['normalMedium', 'normal']}
            lineHeight={['normal', 'mean']}
          >
            <FormattedMessage id={process} />
          </Text>
        </Box>

        <Layout flexBasis={[8, 430]} flexShrink='0' flexGrow={[0, 3]} />

        <Box flexBasis={[40, 560]} flexWrap='wrap' flexGrow={[1, 0]} alignItems='center'>
          <Text
            color='text.process.primary'
            fontSize={['tiny', 'medium']}
            fontWeight='normal'
            lineHeight={['compact', 'standart']}
            textWrap='wrap'
          >
            <FormattedMessage id={text} />
          </Text>
        </Box>
      </Box>
    </Row>

    <Condition match={displayDivider}>
      <Column>
        <Layout flexBasis={[28, 48]} />

        <Divider backgroundColor='divider.primary' weight={divider} />

        <Layout flexBasis={[28, 48]} />
      </Column>
    </Condition>
  </Column>
)
