import React              from 'react'

import { Faq }            from '@landing/fragment-faq'
import { Background }     from '@ui/background'
import { Condition }      from '@ui/condition'
import { useWindowWidth } from '@ui/utils'

export const FaqSection = () => {
  const { isMobile, isDesktop, isWide, isUltra } = useWindowWidth()

  return (
    <>
      <Condition match={isWide || isUltra}>
        <Background
          backgroundImage='wavesGradient'
          backgroundSize='big'
          backgroundRepeat='no-repeat'
          backgroundPosition={{ wide: 'left 231px', ultra: 'left 102px' }}
        >
          <Faq />
        </Background>
      </Condition>

      <Condition match={isDesktop}>
        <Background
          backgroundImage='wavesGradient'
          backgroundSize='big'
          backgroundRepeat='no-repeat'
          backgroundPosition='left 232px'
        >
          <Faq />
        </Background>
      </Condition>

      <Condition match={isMobile}>
        <Background
          backgroundImage='blendGradient'
          backgroundSize='small'
          backgroundRepeat='no-repeat'
          backgroundPosition='center 121px'
        >
          <Faq />
        </Background>
      </Condition>
    </>
  )
}
