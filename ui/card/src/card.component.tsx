import React          from 'react'
import { FC }         from 'react'

import { Background } from '@ui/background'
import { Condition }  from '@ui/condition'
import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'

import { CardProps }  from './card.interfaces'

export const Card: FC<CardProps> = ({ isMobileOnly = false, ...props }) => (
  <Background display='flex' backgroundColor='lightGray' width='100%'>
    <Layout flexBasis={[16, 40]} flexShrink='0' />

    <Column>
      <Layout flexBasis={[16, 40]} />

      <Condition match={props.category === 'обучение'}>
        <Box
          flexBasis={[27, 38]}
          width={[80, 104]}
          alignItems='center'
          backgroundColor='background.white'
        >
          <Layout flexBasis={[8, 12]} />

          <Box>
            <Text
              color='text.primary'
              fontSize={['subAtom', 'tiny']}
              lineHeight={['atom', 'tiny']}
              textTransform='uppercase'
            >
              {props.category}
            </Text>
          </Box>

          <Layout flexBasis={[8, 12]} />
        </Box>

        <Layout flexBasis={[104, 214]} />
      </Condition>

      <Condition match={props.category === 'мини-курс'}>
        <Box
          flexBasis={[27, 38]}
          width={[87, 112]}
          alignItems='center'
          backgroundColor='background.white'
        >
          <Layout flexBasis={[8, 12]} />

          <Box>
            <Text
              color='text.primary'
              fontSize={['subAtom', 'tiny']}
              lineHeight={['atom', 'tiny']}
              textTransform='uppercase'
            >
              {props.category}
            </Text>
          </Box>

          <Layout flexBasis={[8, 12]} />
        </Box>

        <Layout flexBasis={[49, 56]} />
      </Condition>

      <Condition match={props.category === 'учебный материал'}>
        <Box
          flexBasis={[27, 38]}
          width={[142, 180]}
          alignItems='center'
          backgroundColor='background.white'
        >
          <Layout flexBasis={[8, 12]} />

          <Box>
            <Text
              color='text.primary'
              fontSize={['subAtom', 'tiny']}
              lineHeight={['atom', 'tiny']}
              textTransform='uppercase'
            >
              {props.category}
            </Text>
          </Box>

          <Layout flexBasis={[8, 12]} />
        </Box>

        <Layout flexBasis={[62, 110]} />
      </Condition>

      <Condition match={!isMobileOnly}>
        <Box maxWidth={[303, 496]}>
          <Text
            color='text.primary'
            fontSize={['medium', 'regular']}
            lineHeight={['normal', 'mean']}
          >
            {props.titleDesktop}
          </Text>
        </Box>
      </Condition>

      <Condition match={isMobileOnly}>
        <Box maxWidth={228} flexBasis={46}>
          <Text color='text.primary' fontSize='small' lineHeight='tiddly'>
            {props.titleMobile}
          </Text>
        </Box>
      </Condition>

      <Condition match={!!props.description}>
        <Column flexBasis={[132, 84]}>
          <Layout flexBasis={[12, 16]} />

          <Box maxWidth={[303, 694]}>
            <Text
              color='text.primary'
              fontSize={['tiny', 'small']}
              lineHeight={['small', 'normal']}
            >
              {props.description}
            </Text>
          </Box>
        </Column>
      </Condition>

      <Layout flexBasis={[16, 40]} />
    </Column>

    <Layout flexBasis={[16, 40]} flexShrink='0' />
  </Background>
)
