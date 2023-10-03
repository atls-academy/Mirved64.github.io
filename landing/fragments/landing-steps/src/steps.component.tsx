import React              from 'react'
import { useIntl }        from 'react-intl'

import { Condition }      from '@ui/condition'
import { Image }          from '@ui/image'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { useWindowWidth } from '@ui/utils'

import { Step }           from './step'

export const Steps = () => {
  const intl = useIntl()

  const { isMobile } = useWindowWidth()

  return (
    <Column>
      <Layout flexBasis={{ _: 64, standard: 160, ultra: 320 }} />

      <Box position='relative'>
        <Layout
          flexBasis={{ _: 20, standard: 80, wide: 230 }}
          flexShrink='0'
          flexGrow={{ wide: 3 }}
        />

        <Column
          flexGrow={{ _: '1', ultra: '0' }}
          flexBasis={{ _: 335, standard: 1760, wide: 2100, ultra: 2440 }}
        >
          <Step
            sequenceNumber='1'
            name={intl.formatMessage({ id: 'process.item.team-integration' })}
            description={intl.formatMessage({ id: 'process.item.text' })}
          />

          <Step
            sequenceNumber='2'
            name={intl.formatMessage({ id: 'process.item.create-environment' })}
            description={intl.formatMessage({ id: 'process.item.text' })}
          />

          <Step
            sequenceNumber='3'
            name={intl.formatMessage({ id: 'process.item.studies-of-technologies' })}
            description={intl.formatMessage({ id: 'process.item.text' })}
          />

          <Step
            sequenceNumber='4'
            name={intl.formatMessage({ id: 'process.item.practical-work' })}
            description={intl.formatMessage({ id: 'process.item.text' })}
          />

          <Step
            sequenceNumber='5'
            name={intl.formatMessage({ id: 'process.item.project-integration' })}
            description={intl.formatMessage({ id: 'process.item.text' })}
            divider={false}
          />
        </Column>

        <Condition match={!isMobile}>
          <Box
            width={{ standard: 400, wide: 884, ultra: 1106 }}
            height={{ standard: 400, wide: 884, ultra: 1106 }}
            position='absolute'
            zIndex={10}
            margin='auto'
            top='0'
            left='0'
            bottom='0'
            right='0'
          >
            <Image src='./image/Cubics.png' width='100%' height='100%' />
          </Box>
        </Condition>

        <Layout
          flexBasis={{ _: 20, standard: 80, wide: 230 }}
          flexShrink='0'
          flexGrow={{ wide: 3 }}
        />
      </Box>

      <Layout flexBasis={[24, 160]} />
    </Column>
  )
}
