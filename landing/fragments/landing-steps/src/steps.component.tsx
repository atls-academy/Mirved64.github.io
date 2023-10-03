import React              from 'react'

import { Condition }      from '@ui/condition'
import { Image }          from '@ui/image'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { useWindowWidth } from '@ui/utils'

import { Step }           from './step'
import { useSteps }       from './data'

export const Steps = () => {
  const steps = useSteps()
  const { isMobile } = useWindowWidth()

  const stepsList: { process: { description: string; title: string }; processId: number }[] =
    steps?.data?.processes?.nodes

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
          {stepsList?.map((step, index) => (
            <Step
              key={step.processId}
              sequenceNumber={(index + 1).toString()}
              name={step.process.title}
              description={step.process.description}
            />
          ))}
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
