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
  widthCard,
  gap,
  category,
  isMobileOnly = false,
  titleDesktop,
  titleMobile,
  text,
  path,
}) => (
  <CardContainer path={path} width={widthCard}>
    <Row>
      <Layout flexBasis={[16, 40]} />

      <Column>
        <Layout flexBasis={[16, 40]} />

        <Column flexBasis={[135, 256]} flexGrow='1'>
          <Row flexBasis={[27, 38]}>
            <Layout flexBasis={[8, 12]} />

            <Column>
              <Layout flexBasis={[8, 12]} />

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

              <Layout flexBasis={[8, 12]} />
            </Column>

            <Layout flexBasis={[8, 12]} />
          </Row>

          <Layout flexBasis={gap} />

          <Box flexBasis={[28, 46]}>
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
              <Box flexBasis={228}>
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

          <Column display={text ? 'flex' : 'none'} flexBasis={[132, 84]}>
            <Layout flexBasis={[12, 16]} />

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

        <Layout flexBasis={[16, 40]} />
      </Column>

      <Layout flexBasis={[16, 40]} />
    </Row>
  </CardContainer>
)
