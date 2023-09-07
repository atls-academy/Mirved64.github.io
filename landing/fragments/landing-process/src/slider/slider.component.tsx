import React              from 'react'

import { Condition }      from '@ui/condition'
import { Box }            from '@ui/layout'
import { Slider }         from '@ui/slider'
import { useWindowWidth } from '@ui/utils'

import { imagesDesktop }  from './slider.images'
import { imagesMobile }   from './slider.images'

export const SliderContainer = () => {
  const { isMobile } = useWindowWidth()

  return (
    <Box>
      <Condition match={!isMobile}>
        <Slider images={imagesDesktop} />
      </Condition>

      <Condition match={isMobile}>
        <Slider images={imagesMobile} />
      </Condition>
    </Box>
  )
}
