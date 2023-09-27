import React              from 'react'
import { FC }             from 'react'

import { Card }           from '@ui/card'
import { Condition }      from '@ui/condition'
import { Layout }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { useWindowWidth } from '@ui/utils'

import { CardsListWide }  from '../data'
import { CardCellProps }  from './cards.interfaces'

export const CardsMaterialsWide = () => {
  const { isWide, isUltra } = useWindowWidth()

  const CardCell: FC<CardCellProps> = ({ index, category, title }) => (
    <>
      <Box flexDirection='column' width={{ wide: 572, ultra: 670 }}>
        <Condition match={isWide}>
          <Card category={category} titleDesktop={title} indent={110} widthCategoryBox={180} />
        </Condition>

        <Condition match={isUltra}>
          <Card category={category} titleDesktop={title} indent={45} widthCategoryBox={270} />
        </Condition>

        <Condition match={index < 3}>
          <Layout flexBasis={40} />
        </Condition>
      </Box>

      <Condition match={index !== 2}>
        <Layout flexBasis={40} flexShrink='0' />
      </Condition>
    </>
  )

  return (
    <>
      {CardsListWide.map((card, index) => (
        <CardCell key={card.id} index={index} category={card.category} title={card.title} />
      ))}
    </>
  )
}
