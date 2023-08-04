import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { CardProps } from './card.interfaces'

export const Card: FC<CardProps> = ({
  indent,
  category,
  isMobileOnly = false,
  titleDesktop,
  titleMobile,
  description,
}) => (
  <Row>
    <Layout flexBasis={[16, 40]} />

    <Column flexGrow='1'>
      <Layout flexBasis={[16, 40]} />

      <Row flexBasis={[27, 38]} alignItems='center'>
        <Layout flexBasis={[8, 12]} />

        <Box>
          <Text
            color='text.black'
            fontSize={['subAtom', 'tiny']}
            fontWeight='normal'
            lineHeight={['atom', 'tiny']}
            textTransform='uppercase'
          >
            {category}
          </Text>
        </Box>

        <Layout flexBasis={[8, 12]} />
      </Row>

      <Layout flexBasis={indent} />

      <Condition match={!isMobileOnly}>
        <Box>
          <Text
            color='text.black'
            fontSize={['medium', 'regular']}
            fontWeight='normal'
            lineHeight={['normal', 'mean']}
          >
            {titleDesktop}
          </Text>
        </Box>
      </Condition>

      <Condition match={isMobileOnly}>
        <Box>
          <Text color='text.black' fontSize='small' fontWeight='normal' lineHeight='tiddly'>
            {titleMobile}
          </Text>
        </Box>
      </Condition>

      <Condition match={!!description}>
        <Column flexBasis={[132, 84]} flexGrow={[1, 0]}>
          <Layout flexBasis={[12, 16]} />

          <Box maxWidth={[303, 694]}>
            <Text
              color='text.black'
              fontSize={['tiny', 'small']}
              fontWeight='normal'
              lineHeight={['small', 'normal']}
            >
              {description}
            </Text>
          </Box>
        </Column>
      </Condition>

      <Layout flexBasis={[16, 40]} />
    </Column>

    <Layout flexBasis={[16, 40]} />
  </Row>
)
