import React          from 'react'

import { Background } from '@ui/background'
import { ArrowIcon }  from '@ui/icons'
import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { NextLink }   from '@ui/link'
import { Text }       from '@ui/text'
import { useHover }   from '@ui/utils'

import { CardCell }   from './card-cell'
import { useCourses } from '../../data'

export const CardsMaterialsWide = () => {
  const { hover, hoverProps } = useHover()

  const cards = useCourses()

  const path: string = cards?.data?.navigationBy.navigation.linkName
  const cardLibraryTitle: string = cards?.data?.navigationBy.title
  const cardsList: { id: string; label: string; title: string }[] = cards?.data?.courses.nodes
    .filter((obj) => obj.course.label[0].labelId === 194)
    ?.map((element) => ({
      id: element.id,
      label: element.course.label[0].title,
      title: element.course.title,
    }))
    .reverse()

  const cardsListLong: { id: number; label: string; title: string }[] = Array.from({ length: 5 }, (
    _,
    index
  ) =>
    index < 3
      ? cardsList?.slice(0, 1).map((el) => ({
          ...(el as { id: string; label: string; title: string }),
          id: index,
        }))
      : cardsList?.slice(1, 2).map((el) => ({
          ...(el as { id: string; label: string; title: string }),
          id: index,
        }))).flat()

  return (
    <Row flexWrap='wrap' maxWidth={{ wide: 1800, ultra: 2090 }}>
      {cardsListLong?.map((card, index) => (
        <CardCell
          key={index} /*eslint-disable-line */
          index={card?.id}
          label={card?.label}
          title={card?.title}
        />
      ))}

      <NextLink path={path} width={{ wide: 572, ultra: 670 }}>
        <Background
          {...hoverProps}
          borderRadius='regular'
          overflow='hidden'
          backgroundImage={hover ? 'purpleGradient' : 'navyGradient'}
          backgroundColor={hover ? 'purpleGradient' : 'navyGradient'}
          display='flex'
          height='100%'
        >
          <Layout flexBasis={40} flexShrink='0' />

          <Column justifyContent='end' flexGrow='1'>
            <Row alignItems='center'>
              <Box>
                <Text
                  color='text.white'
                  fontSize={{ wide: 'regular', ultra: 'big' }}
                  lineHeight='usual'
                >
                  {cardLibraryTitle}
                </Text>
              </Box>

              <Layout flexBasis={15} />

              <ArrowIcon width={66} height={40} />
            </Row>

            <Layout flexBasis={40} />
          </Column>

          <Layout flexBasis={40} flexShrink='0' />
        </Background>
      </NextLink>
    </Row>
  )
}
