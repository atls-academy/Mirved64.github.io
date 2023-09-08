import React          from 'react'
import { FC }         from 'react'

import { Background } from '@ui/background'
import { Condition }  from '@ui/condition'
import { Divider }    from '@ui/divider'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Box }        from '@ui/layout'
import { Text }       from '@ui/text'

import { ItemProps }  from './item.interfaces'

export const Item: FC<ItemProps> = ({ divider = true, ...props }: ItemProps) => (
  <Column>
    <Row alignItems={['start', 'center']}>
      <Background backgroundColor='ghostTransparentGradient' borderRadius={['little', 'ordinary']}>
        <Box
          width={[35, 64]}
          height={[35, 64]}
          alignItems='center'
          justifyContent='center'
          backgroundColor='background.whiteTransparent'
          flexShrink='0'
          borderRadius={['little', 'ordinary']}
          border='thinnestGhost'
        >
          <Text color='text.white' fontSize={['compact', 'medium']} lineHeight='small'>
            {props.sequenceNumber}
          </Text>
        </Box>
      </Background>

      <Layout flexBasis={[12, 32]} flexShrink='0' />

      <Box flexBasis={[312, 1700]} flexDirection={['column', 'row']} flexGrow='1'>
        <Box alignItems='center' flexBasis={[28, 367]} flexShrink='0' flexGrow='1'>
          <Text color='text.white' fontSize={['medium', 'regular']} lineHeight='usual'>
            {props.name}
          </Text>
        </Box>

        <Layout flexBasis={[8, 430]} flexShrink='0' flexGrow='3' />

        <Box flexBasis={[40, 560]}>
          <Text color='text.white' fontSize={['tiny', 'medium']} lineHeight='huge' textWrap='wrap'>
            {props.description}
          </Text>
        </Box>
      </Box>
    </Row>

    <Condition match={divider}>
      <Layout flexBasis={[28, 48]} />

      <Divider backgroundColor='background.ghost' weight={1} />

      <Layout flexBasis={[28, 48]} />
    </Condition>
  </Column>
)
