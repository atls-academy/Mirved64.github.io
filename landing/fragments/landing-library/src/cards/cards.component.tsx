import React          from 'react'

import { Condition }  from '@ui/condition'
import { Divider }    from '@ui/divider'
import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'

import { Card }       from './card'
import { useLibrary } from '../data'

export const CardsLibrary = () => {
  const libraryCards = useLibrary()

  const libraryCardsList: { title: string; description: string; skills: { title: string }[] }[] =
    libraryCards?.data?.allTutorials?.nodes?.map((element) => ({
      title: element.title,
      description: element.learningMaterials.description,
      skills: element.learningMaterials.skills,
    }))

  const libraryCardsListLong: {
    id: number
    title: string
    description: string
    skills: { title: string }[]
  }[] = Array.from({ length: 3 })
    .fill(libraryCardsList)
    .flat()
    .map((el, index) => ({
      ...(el as { title: string; description: string; skills: { title: string }[] }),
      id: index,
    }))

  return (
    <Box>
      <Layout flexBasis={{ _: 20, standard: 230, ultra: 620 }} flexShrink='0' />

      <Column flexGrow='1'>
        <Layout flexBasis={[64, 160]} />

        <Divider weight={1} backgroundColor='background.grayGhost' />

        <Box flexDirection={{ _: 'column', wide: 'row' }} flexWrap='wrap'>
          {libraryCardsListLong.map((card, index, array) => (
            <Row maxWidth={{ wide: '50%' }} key={card?.id}>
              <Condition match={index % 2 !== 0}>
                <Layout flexBasis={{ _: 0, wide: 20 }} flexShrink='0' />
              </Condition>

              <Column flexGrow='1'>
                <Layout flexBasis={32} />

                <Card
                  title={card?.title}
                  technologiesList={card?.skills}
                  description={card?.description}
                />

                <Layout flexBasis={32} />

                <Divider weight={1} backgroundColor='background.grayGhost' />

                <Condition match={index === array.length - 1}>
                  <Layout flexBasis={32} />
                </Condition>
              </Column>

              <Condition match={index === 0 || index % 2 === 0}>
                <Layout flexBasis={{ _: 0, wide: 20 }} flexShrink='0' />
              </Condition>
            </Row>
          ))}
        </Box>

        <Layout flexBasis={[144, 240]} />
      </Column>

      <Layout flexBasis={{ _: 20, standard: 230, ultra: 620 }} flexShrink='0' />
    </Box>
  )
}
