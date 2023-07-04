import React                      from 'react'
import { FormattedMessage }       from 'react-intl'

import { Divider }                from '@ui/divider'
import { Box }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Text }                   from '@ui/text'

import { technologiesListTop }    from './technologies-list/technologies.list'
import { technologiesListBottom } from './technologies-list/technologies.list'

export const Technologies = () => (
  <Box
    backgroundColor='background.technologies'
    width='100%'
    margin='0 auto'
    flexDirection='column'
  >
    <Layout flexBasis={[32, 64]} />
    <Column>
      <Divider backgroundColor='divider.primary' weight='1px' />
      <Layout flexBasis={[36, 64]} />
      <Row overflow='hidden' width='100%'>
        {technologiesListTop.map((technology) => (
          <Box flexShrink='0' key={technology.technology}>
            <Text
              color='text.primary'
              fontSize={['huge', 'massive']}
              fontWeight='lighter'
              lineHeight={['regular', 'giant']}
              whiteSpace='nowrap'
            >
              <FormattedMessage id={technology.technology} />
            </Text>
            <Layout flexBasis={24} />
            <Box width='48px'>
              <Divider backgroundColor='divider.primary' weight='4px' margin='auto 0' />
            </Box>
            <Layout flexBasis={24} />
          </Box>
        ))}
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Row overflow='hidden' width='100%'>
        {technologiesListBottom.map((technology) => (
          <Box flexShrink='0' key={technology.technology}>
            <Text
              color='text.primary'
              fontFamily='secondary'
              fontSize={['huge', 'massive']}
              fontWeight='lighter'
              lineHeight={['regular', 'giant']}
              whiteSpace='nowrap'
            >
              <FormattedMessage id={technology.technology} />
            </Text>
            <Layout flexBasis={24} />
            <Box width='48px'>
              <Divider backgroundColor='divider.primary' weight='4px' margin='auto 0' />
            </Box>
            <Layout flexBasis={24} />
          </Box>
        ))}
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Divider backgroundColor='divider.primary' weight='1px' />
    </Column>
    <Layout flexBasis={[56, 64]} />
  </Box>
)
