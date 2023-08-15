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
  <Background
    display='flex'
    backgroundColor='whiteGhostGradient'
    width='100%'
    borderRadius={['normal', 'regular']}
  >
    <Layout flexBasis={[16, 40]} flexShrink='0' />

    <Column>
      <Layout flexBasis={[16, 40]} />

      <Box
        flexBasis={[27, 38]}
        width={props.widthCategoryBox}
        alignItems='center'
        backgroundColor='background.white'
        borderRadius='tiny'
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

      <Layout flexBasis={props.indent} />

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
        <Box maxWidth={228}>
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
