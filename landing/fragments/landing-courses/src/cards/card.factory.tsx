import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

type CardType = 'course' | 'miniCourse' | 'materials'

interface BaseCardProps {
  cardCategory: string
  cardTitle: string
  cardText?: string // eslint-disable-line
}

interface CardProps extends BaseCardProps {
  cardType: CardType
}

const CardCourse: FC<BaseCardProps> = ({ cardCategory, cardTitle, cardText }) => (
  <Box>
    <Layout flexBasis={[16, 42]} flexShrink='0' />

    <Column flexBasis={[303, 1160]}>
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

        <Layout flexBasis={[104, 214]} flexShrink='0' />

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

const CardMiniCourse: FC<BaseCardProps> = ({ cardCategory, cardTitle, cardText }) => (
  <Box>
    <Layout flexBasis={[16, 42]} flexShrink='0' />

    <Column flexBasis={[303, 1160]}>
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

const CardMaterials: FC<BaseCardProps> = ({ cardCategory, cardTitle }) => (
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
          {cardCategory}
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
          {cardTitle}
        </Text>
      </Box>

      <Layout flexBasis={[16, 32]} />
    </Column>

    <Layout flexBasis={[16, 32]} flexShrink='0' />
  </Box>
)

export const Card: FC<CardProps> = ({ cardType, ...props }) => {
  const { cardCategory, cardTitle, cardText } = props

  if (cardType === 'course') {
    return <CardCourse cardCategory={cardCategory} cardTitle={cardTitle} cardText={cardText} />
  }
  if (cardType === 'miniCourse') {
    return <CardMiniCourse cardCategory={cardCategory} cardTitle={cardTitle} cardText={cardText} />
  }
  if (cardType === 'materials') {
    return <CardMaterials cardCategory={cardCategory} cardTitle={cardTitle} />
  }

  return null
}
