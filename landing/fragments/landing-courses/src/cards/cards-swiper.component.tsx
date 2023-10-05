import React           from 'react'

import { Card }        from '@ui/card'
import { Condition }   from '@ui/condition/src'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { SwiperProps } from '@ui/swiper'
import { Swiper }      from '@ui/swiper'
import { SwiperSlide } from '@ui/swiper'

import { useCourses }  from '../data'

export const CardsSwiper = ({ spaceBetween, slidesPerView, className }: SwiperProps) => {
  const swiperCards = useCourses()

  const cardsList: { label: string; labelId: number; title: string }[] =
    swiperCards?.data?.courses.nodes
      .filter((obj) => obj.course.label[0].labelId === 194)
      ?.map((element) => ({
        label: element.course.label[0].title,
        labelId: element.course.label[0].labelId,
        title: element.course.title,
      }))
      .reverse()

  return (
    <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView} className={className}>
      {cardsList?.map((card, index, array) => (
        <SwiperSlide key={card.title}>
          <Row>
            <Condition match={index === 0}>
              <Layout flexBasis={20} flexShrink='0' />
            </Condition>

            <Card
              label={card.label}
              title={card.title}
              isMobileOnly
              indent={62}
              widthCategoryBox={142}
            />

            <Condition match={index === array.length - 1}>
              <Layout flexBasis={20} flexShrink='0' />
            </Condition>
          </Row>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
