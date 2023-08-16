import React           from 'react'
import { FC }          from 'react'

import { Card }        from '@ui/card'
import { Condition }   from '@ui/condition'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { SwiperProps } from '@ui/swiper'
import { Swiper }      from '@ui/swiper'
import { SwiperSlide } from '@ui/swiper'

import { CadrsList }   from '../cards-list'

export const CardsLearning = () => (
  <Column>
    {CadrsList.filter((card) => card.category === 'обучение' || card.category === 'мини-курс').map((
      card
    ) => (
      <Column key={card.id}>
        <Card category={card.category} titleDesktop={card.title} description={card.description} />

        <Layout flexBasis={[20, 40]} />
      </Column>
    ))}
  </Column>
)

export const CardsMaterials = () => (
  <Row>
    {CadrsList.filter((card) => card.category === 'учебный материал' && !card.isMobileOnly).map((
      card,
      index,
      array
    ) => (
      <Row key={card.id}>
        <Condition match={index === 0}>
          <Card category={card.category} titleDesktop={card.title} />

          <Layout flexBasis={[10, 20]} flexShrink='0' />
        </Condition>

        <Condition match={index !== 0 && index !== array.length - 1}>
          <Layout flexBasis={[10, 20]} flexShrink='0' />

          <Card category={card.category} titleDesktop={card.title} />

          <Layout flexBasis={[10, 20]} flexShrink='0' />
        </Condition>

        <Condition match={index === array.length - 1}>
          <Layout flexBasis={[10, 20]} flexShrink='0' />

          <Card category={card.category} titleDesktop={card.title} />
        </Condition>
      </Row>
    ))}
  </Row>
)

export const CardsSwiper: FC<SwiperProps> = ({ spaceBetween, slidesPerView, className }) => (
  <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView} className={className}>
    {CadrsList.filter((card) => card.category === 'учебный материал' && card.isMobileOnly).map((
      card,
      index,
      array
    ) => (
      <SwiperSlide key={card.id}>
        <Condition match={index === 0}>
          <Row>
            <Layout flexBasis={20} flexShrink='0' />

            <Card
              category={card.category}
              titleMobile={card.title}
              isMobileOnly={card.isMobileOnly}
            />
          </Row>
        </Condition>

        <Condition match={index !== 0 && index !== array.length - 1}>
          <Card
            category={card.category}
            titleMobile={card.title}
            isMobileOnly={card.isMobileOnly}
          />
        </Condition>

        <Condition match={index === array.length - 1}>
          <Row>
            <Card
              category={card.category}
              titleMobile={card.title}
              isMobileOnly={card.isMobileOnly}
            />

            <Layout flexBasis={20} flexShrink='0' />
          </Row>
        </Condition>
      </SwiperSlide>
    ))}
  </Swiper>
)
