import React              from 'react'
import { FC }             from 'react'

import { Card }           from '@ui/card'
import { Condition }      from '@ui/condition'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { useWindowWidth } from '@ui/utils'

import { CardCellProps }  from './cards.interfaces'

export const CardCell: FC<CardCellProps> = ({ index, label, title }) => {
  const { isWide, isUltra } = useWindowWidth()

  return (
    <>
      <Box flexDirection='column' width={{ wide: 572, ultra: 670 }}>
        <Box height={320}>
          <Condition match={isWide}>
            <Card label={label} title={title} indent={110} widthCategoryBox={180} />
          </Condition>

          <Condition match={isUltra}>
            <Card label={label} title={title} indent={45} widthCategoryBox={270} />
          </Condition>
        </Box>

        <Condition match={index < 3}>
          <Layout flexBasis={40} />
        </Condition>
      </Box>

      <Condition match={index !== 2}>
        <Layout flexBasis={40} flexShrink='0' />
      </Condition>
    </>
  )
}
