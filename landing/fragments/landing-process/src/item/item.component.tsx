import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Column }           from '@ui/layout'
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
    <Box flexBasis='content'>
      <Box alignItems={['start', 'center']}>
        <Text
          color='text.primary'
          fontSize={['compact', 'medium']}
          fontWeight='normal'
          lineHeight={['little', 'medium']}
        >
          {sequenceNumber}
        </Text>
      </Box>
      <Layout flexBasis={[12, 32]} />
      <Box
        flexDirection={['column', 'row']}
        justifyContent={['start', 'space-between']}
        flexBasis={['content', 1760]}
      >
        <Box alignItems='center'>
          <Text
            color='text.primary'
            fontSize={['medium', 'regular']}
            fontWeight={['normalMedium', 'normal']}
            lineHeight='regular'
            textWrap='wrap'
          >
            <FormattedMessage id={process} />
          </Text>
        </Box>
        <Box flexBasis={['100%', '560px']} flexWrap='wrap'>
          <Text
            color='text.primary'
            fontSize={['tiny', 'medium']}
            fontWeight='normal'
            lineHeight={['compact', 'standart']}
            textWrap='wrap'
          >
            <FormattedMessage id={text} />
          </Text>
        </Box>
      </Box>
    </Box>
    <Column display={displayDivider}>
      <Layout flexBasis={[28, 48]} />
      <Divider backgroundColor='divider.primary' weight={divider} />
      <Layout flexBasis={[28, 48]} />
    </Column>
  </Column>
)
