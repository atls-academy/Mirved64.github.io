import React              from 'react'

import { CardsLibrary }   from '@landing/fragment-library'
import { Background }     from '@ui/background'
import { Condition }      from '@ui/condition'
import { useWindowWidth } from '@ui/utils'

export const MaterialsSection = () => {
  const { isMobile, isDesktop, isWide, isUltra } = useWindowWidth()

  return (
    <>
      <Condition match={isWide || isUltra}>
        <Background
          backgroundImage='wavesGradient'
          backgroundSize='big'
          backgroundRepeat='no-repeat'
          backgroundPosition='0 404px'
        >
          <CardsLibrary />
        </Background>
      </Condition>

      <Condition match={isDesktop}>
        <Background
          backgroundImage='wavesGradient'
          backgroundSize='big'
          backgroundRepeat='no-repeat'
          backgroundPosition='0 1104px'
        >
          <CardsLibrary />
        </Background>
      </Condition>

      <Condition match={isMobile}>
        <Background
          backgroundImage='wavesGradient'
          backgroundSize='normal'
          backgroundRepeat='no-repeat'
          backgroundPosition='-982px 409px'
        >
          <CardsLibrary />
        </Background>
      </Condition>
    </>
  )
}
