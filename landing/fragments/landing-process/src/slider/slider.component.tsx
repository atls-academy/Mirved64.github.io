import React              from 'react'

import { Condition }      from '@ui/condition'
import { Box }            from '@ui/layout'
import { Slider }         from '@ui/slider'
import { useWindowWidth } from '@ui/utils'

import { useProcess }     from '../data'

export const SliderContainer = () => {
  const { isMobile, isDesktop, isWide, isUltra } = useWindowWidth()

  const slider = useProcess()

  const imageUrlDesktop: string = slider?.data?.slides?.nodes[0].slider?.imageDesktop?.sourceUrl
  const imageUrlMobile: string = slider?.data?.slides?.nodes[0].slider?.imageMobile?.sourceUrl
  const text: string = slider?.data?.slides?.nodes[0].slider?.text

  return (
    <Box>
      <Condition match={isDesktop}>
        <Slider images={imageUrlDesktop} text={text} />
      </Condition>

      <Condition match={isMobile}>
        <Slider images={imageUrlMobile} text={text} />
      </Condition>

      <Condition match={isWide || isUltra}>
        <Slider images={imageUrlDesktop} text={text} />
      </Condition>
    </Box>
  )
}
