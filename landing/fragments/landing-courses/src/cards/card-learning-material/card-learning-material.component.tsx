import React                         from 'react'
import { FC }                        from 'react'

import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Text }                      from '@ui/text'

import { CardLearningMaterialProps } from './card-learning-material.interfaces'

export const CardLearningMaterial: FC<CardLearningMaterialProps> = ({ category, title }) => (
  <Box flexBasis={[260, 560]} flexShrink={[0, 1]}>
    <Layout flexBasis={[16, 32]} flexShrink='0' />

    <Column>
      <Layout flexBasis={[16, 32]} flexShrink='0' />

      <Box width={[142, 179]} height={[27, 38]} justifyContent='center' alignItems='center'>
        <Text
          color='text.courses.primary'
          fontSize={['subAtom', 'tiny']}
          fontWeight='normal'
          lineHeight={['atom', 'tiny']}
          textTransform='uppercase'
        >
          {category}
        </Text>
      </Box>

      <Layout flexBasis={[62, 126]} />

      <Box>
        <Text
          color='text.courses.primary'
          fontSize={['small', 'regular']}
          fontWeight='normal'
          lineHeight={['tiddly', 'mean']}
        >
          {title}
        </Text>
      </Box>

      <Layout flexBasis={[16, 32]} />
    </Column>

    <Layout flexBasis={[16, 32]} flexShrink='0' />
  </Box>
)
