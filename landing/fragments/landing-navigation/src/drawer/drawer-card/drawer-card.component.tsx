import React                from 'react'
import { FC }               from 'react'

import { Card }             from '@ui/card'
import { Condition }        from '@ui/condition'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { useWindowWidth }   from '@ui/utils'

import { DrawerCardsProps } from './drawer-card.interfaces'

export const DrawerCard: FC<DrawerCardsProps> = ({ card, index, array }) => {
  const { isUltra } = useWindowWidth()

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

      <Condition match={!isUltra}>
        <Card
          category={card.category}
          titleDesktop={card.title}
          description={card.description}
          indent={110}
          widthCategoryBox={104}
        />
      </Condition>

      <Condition match={isUltra}>
        <Card
          category={card.category}
          titleDesktop={card.title}
          description={card.description}
          indent={110}
          widthCategoryBox={154}
        />
      </Condition>

      <Indent />

      <Condition match={index === 0}>
        <Layout flexBasis={20} flexShrink='0' />
      </Condition>
    </Row>
  )
}
