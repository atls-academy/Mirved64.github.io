import React              from 'react'

import { Condition }      from '@ui/condition'
import { Box }            from '@ui/layout'
import { Slider }         from '@ui/slider'
import { useWindowWidth } from '@ui/utils'

import { useProcess }     from '../data'

export const SliderContainer = () => {
  const { isMobile, isDesktop, isWide, isUltra } = useWindowWidth()
  const slider = useProcess()

  const sliderData = slider?.data?.slides?.nodes[0].slider

  return (
    <Box>
      <Condition match={isDesktop}>
        <Slider images={sliderData?.imageDesktop?.sourceUrl} text={sliderData?.text} />
      </Condition>

      <Condition match={isMobile}>
        <Slider images={sliderData?.imageMobile?.sourceUrl} text={sliderData?.text} />
      </Condition>

      <Condition match={isWide || isUltra}>
        <Slider images={sliderData?.imageDesktop?.sourceUrl} text={sliderData?.text} />
      </Condition>
    </Box>
  )
}
