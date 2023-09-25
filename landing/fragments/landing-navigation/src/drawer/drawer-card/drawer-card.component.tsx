import React                from 'react'
import { FC }               from 'react'

import { Card }             from '@ui/card/src'
import { Condition }        from '@ui/condition/src'
import { Row }              from '@ui/layout/src'
import { Layout }           from '@ui/layout/src'

import { DrawerCardsProps } from './drawer-card.interfaces'

export const DrawerCard: FC<DrawerCardsProps> = ({ card, index, array }) => {
  const Indent = () => (
    <Condition match={index !== 0 && index !== array.length - 1}>
      <Layout flexBasis={10} flexShrink='0' />
    </Condition>
  )

  return (
    <Row>
      <Condition match={index === array.length - 1}>
        <Layout flexBasis={20} flexShrink='0' />
      </Condition>

      <Indent />

      <Card
        category={card.category}
        titleDesktop={card.title}
        description={card.description}
        indent={110}
        widthCategoryBox={104}
      />

      <Indent />

      <Condition match={index === 0}>
        <Layout flexBasis={20} flexShrink='0' />
      </Condition>
    </Row>
  )
}
