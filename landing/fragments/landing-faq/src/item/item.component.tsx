import React              from 'react'
import { FC }             from 'react'

import { Condition }      from '@ui/condition'
import { Divider }        from '@ui/divider'
import { CrossIcon }      from '@ui/icons'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { useWindowWidth } from '@ui/utils'

import { QuestionProps }  from './item.interfaces'

export const Item: FC<QuestionProps> = ({ question, divider }) => {
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Column>
      <Layout flexBasis={[16, 40]} />

      <Row>
        <Condition match={isDesktop}>
          <Box alignItems='center'>
            <CrossIcon width={20} height={20} />
          </Box>
        </Condition>

        <Layout flexBasis={[0, 24]} flexShrink='0' />

        <Box flexGrow={[1, 0]} flexBasis={[303, 740]}>
          <Text
            color='text.primary'
            fontSize={['small', 'ordinary']}
            fontWeight='normal'
            lineHeight={['normal', 'regular']}
          >
            {question}
          </Text>
        </Box>

        <Layout flexBasis={[24, 0]} flexShrink='0' />

        <Condition match={isMobile}>
          <Box alignItems='center'>
            <CrossIcon width={12} height={12} />
          </Box>
        </Condition>
      </Row>

      <Layout flexBasis={[16, 40]} />

      <Divider backgroundColor='divider.grayGhost' weight={divider} />
    </Column>
  )
}
