import React             from 'react'
import { FC }            from 'react'

import { CardContainer } from '@ui/card'
import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Text }          from '@ui/text'

import { CardProps }     from './card.interface'

export const Card: FC<CardProps> = ({
  topGap,
  bottomGap,
  leftGap,
  widthCard,
  widthContent,
  gap,
  category,
  titleDesktop,
  displayTitleDesktop = 'flex',
  titleMobile,
  displayTitleMobile = 'none',
  text,
  displayText,
}) => (
  <CardContainer flexBasis={widthCard}>
    <Layout flexBasis={leftGap} flexShrink='0' />

    <Column flexBasis={widthContent} flexGrow='1'>
      <Layout flexBasis={topGap} flexShrink='0' />

      <Column flexGrow='1'>
        <Row>
          <Layout flexBasis={[8, 12]} flexShrink='0' />

          <Column>
            <Layout flexBasis={[8, 12]} flexShrink='0' />

            <Box>
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

            <Layout flexBasis={[8, 12]} flexShrink='0' />
          </Column>

          <Layout flexBasis={[8, 12]} flexShrink='0' />
        </Row>

        <Layout flexBasis={gap} flexShrink='0' />

        <Box>
          <Box display={displayTitleDesktop} flexBasis={496}>
            <Text
              color='text.courses.primary'
              fontSize={['medium', 'regular']}
              fontWeight='normal'
              lineHeight={['normal', 'mean']}
            >
              {titleDesktop}
            </Text>
          </Box>

          <Box display={displayTitleMobile} flexShrink='0' flexBasis={228}>
            <Text
              color='text.courses.primary'
              fontSize={['small', 'regular']}
              fontWeight='normal'
              lineHeight={['tiddly', 'mean']}
            >
              {titleMobile}
            </Text>
          </Box>
        </Box>

        <Column display={displayText}>
          <Layout flexBasis={[12, 16]} flexShrink='0' />

          <Box maxWidth={[303, 694]} flexGrow={[1, 0]}>
            <Text
              color='text.courses.primary'
              fontSize={['tiny', 'small']}
              fontWeight='normal'
              lineHeight={['small', 'normal']}
            >
              {text}
            </Text>
          </Box>
        </Column>
      </Column>

      <Layout flexBasis={bottomGap} flexShrink='0' />
    </Column>
  </CardContainer>
)
