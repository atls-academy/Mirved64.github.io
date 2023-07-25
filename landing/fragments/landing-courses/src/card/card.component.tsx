import React             from 'react'
import { FC }            from 'react'

import { CardContainer } from '@ui/card'
import { Condition }     from '@ui/condition'
import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Text }          from '@ui/text'

import { CardProps }     from './card.interfaces'

export const Card: FC<CardProps> = ({
  topGapBasis,
  bottomGapBasis,
  leftGapBasis,
  widthCard,
  widthContent,
  gapBasis,
  category,
  isMobileOnly = false,
  titleDesktop,
  titleMobile,
  text,
  displayText,
  path,
}) => (
  <CardContainer width={widthCard} flexShrink='0' path={path}>
    <Layout flexBasis={leftGapBasis} flexShrink='0' />

    <Column flexBasis={widthContent} flexGrow='1'>
      <Layout flexBasis={topGapBasis} flexShrink='0' />

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

        <Layout flexBasis={gapBasis} flexShrink='0' />

        <Box>
          <Condition match={!isMobileOnly}>
            <Box flexBasis={496}>
              <Text
                color='text.courses.primary'
                fontSize={['medium', 'regular']}
                fontWeight='normal'
                lineHeight={['normal', 'mean']}
              >
                {titleDesktop}
              </Text>
            </Box>
          </Condition>

          <Condition match={isMobileOnly}>
            <Box flexShrink='0' flexBasis={228}>
              <Text
                color='text.courses.primary'
                fontSize={['small', 'regular']}
                fontWeight='normal'
                lineHeight={['tiddly', 'mean']}
              >
                {titleMobile}
              </Text>
            </Box>
          </Condition>
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

      <Layout flexBasis={bottomGapBasis} flexShrink='0' />
    </Column>

    <Layout flexBasis={[16, 32]} flexShrink='0' />
  </CardContainer>
)
