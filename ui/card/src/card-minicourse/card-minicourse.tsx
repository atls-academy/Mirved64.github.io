import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { CardProps } from '../card.interfaces'

export const CardMiniCourse: FC<CardProps> = ({ cardCategory, cardTitle, cardText }) => (
  <Box>
    <Layout flexBasis={[16, 42]} flexShrink='0' />

    <Column flexBasis={[303, 1160]} flexGrow='1'>
      <Layout flexBasis={[16, 42]} flexShrink='0' />

      <Column flexGrow='1'>
        <Box width={[80, 104]} height={[27, 38]} justifyContent='center' alignItems='center'>
          <Text
            color='text.courses.primary'
            fontSize={['subAtom', 'tiny']}
            fontWeight='normal'
            lineHeight={['atom', 'tiny']}
            textTransform='uppercase'
          >
            {cardCategory}
          </Text>
        </Box>

        <Layout flexBasis={[49, 54]} flexShrink='0' />

        <Box>
          <Text
            color='text.courses.primary'
            fontSize={['medium', 'regular']}
            fontWeight='normal'
            lineHeight={['normal', 'mean']}
          >
            {cardTitle}
          </Text>
        </Box>

        <Layout flexBasis={[12, 16]} flexShrink='0' />

        <Box maxWidth={694} flexGrow={[1, 0]}>
          <Text
            color='text.courses.primary'
            fontSize={['tiny', 'small']}
            fontWeight='normal'
            lineHeight={['small', 'normal']}
          >
            {cardText}
          </Text>
        </Box>
      </Column>

      <Layout flexBasis={[16, 40]} flexShrink='0' />
    </Column>
  </Box>
)
