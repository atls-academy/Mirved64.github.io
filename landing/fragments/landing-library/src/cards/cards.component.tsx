import React         from 'react'

import { Condition } from '@ui/condition'
import { Divider }   from '@ui/divider'
import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'

import { CardKeys }  from '../card'
import { Card }      from '../card'
import { dataCards } from '../data'

export const CardsLibrary = () => {
  const cards = (array: Array<CardKeys>): Array<CardKeys> =>
    Array.from({ length: 3 })
      .fill(array)
      .flat()
      .map((el, index) => ({ ...(el as CardKeys), id: index }))

  return (
    <Box>
      <Layout flexBasis={[20, 230]} flexShrink='0' />

      <Column flexGrow='1'>
        <Layout flexBasis={[64, 160]} />

        <Divider weight={1} backgroundColor='divider.grayGhost' />

        {cards(dataCards).map((card, index, array) => (
          <Column key={card.id}>
            <Layout flexBasis={32} />

            <Card
              title={card.title}
              technologiesList={card.technologiesList}
              description={card.description}
            />

            <Layout flexBasis={32} />

            <Divider weight={1} backgroundColor='divider.grayGhost' />

            <Condition match={index === array.length - 1}>
              <Layout flexBasis={32} />
            </Condition>
          </Column>
        ))}

        <Layout flexBasis={[144, 240]} />
      </Column>

      <Layout flexBasis={[20, 230]} flexShrink='0' />
    </Box>
  )
}
