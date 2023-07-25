import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

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
  displayDivider = 'flex',
}) => (
  <Column>
    <Row>
      <Row flexBasis={[47, 96]}>
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

      <Box
        flexBasis={[312, 1700]}
        flexDirection={['column', 'row']}
        justifyContent={['start', 'space-between']}
        flexGrow='1'
        flexShrink='1'
      >
        <Box alignItems='center'>
          <Text
            color='text.process.primary'
            fontSize={['medium', 'regular']}
            fontWeight={['normalMedium', 'normal']}
            lineHeight={['normal', 'mean']}
          >
            <FormattedMessage id={process} />
          </Text>
        </Box>

        <Layout flexBasis={[8, 0]} flexShrink='0' />

        <Box flexBasis={[40, 560]} flexWrap='wrap' flexGrow={[1, 0]} flexShrink='1'>
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

    <Column display={displayDivider}>
      <Layout flexBasis={[28, 48]} />

      <Divider backgroundColor='divider.primary' weight={divider} />

      <Layout flexBasis={[28, 48]} />
    </Column>
  </Column>
)
