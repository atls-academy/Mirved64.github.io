import React              from 'react'
import { Parallax }       from 'react-scroll-parallax'

import { Process }        from '@landing/fragment-process'
import { Steps }          from '@landing/fragment-steps'
import { Technologies }   from '@landing/fragment-technologies'
import { Background }     from '@ui/background'
import { Condition }      from '@ui/condition'
import { useWindowWidth } from '@ui/utils'

export const TeachingSection = () => {
  const { isMobile, isDesktop, isWide, isUltra } = useWindowWidth()

  return (
    <>
      <Condition match={isUltra}>
        <Parallax translateY={[-5, 5]}>
          <Background
            backgroundImage='wavesGradient'
            backgroundSize='big'
            backgroundRepeat='no-repeat'
            backgroundPosition='left 332px'
          >
            <Steps />
          </Background>

          <Technologies />

          <Background
            backgroundImage='wavesGradient'
            backgroundSize='big'
            backgroundRepeat='no-repeat'
            backgroundPosition='-470px 388px'
          >
            <Background backgroundImage='darkPurpleGradientFlash'>
              <Process />
            </Background>
          </Background>
        </Parallax>
      </Condition>

      <Condition match={isWide}>
        <Parallax translateY={[-2, 5]}>
          <Background
            backgroundImage='wavesGradient'
            backgroundSize='big'
            backgroundRepeat='no-repeat'
            backgroundPosition='left center'
          >
            <Steps />
          </Background>

          <Technologies />

          <Background
            backgroundImage='wavesGradient'
            backgroundSize='big'
            backgroundRepeat='no-repeat'
            backgroundPosition='center -38px'
          >
            <Background backgroundImage='darkPurpleGradientFlash'>
              <Process />
            </Background>
          </Background>
        </Parallax>
      </Condition>

      <Condition match={isDesktop}>
        <Parallax translateY={[-5, 8]}>
          <Background
            backgroundImage='wavesGradient'
            backgroundSize='big'
            backgroundRepeat='no-repeat'
            backgroundPosition='left 124px'
          >
            <Steps />
          </Background>

          <Technologies />

          <Background
            backgroundImage='wavesGradient'
            backgroundSize='big'
            backgroundRepeat='no-repeat'
            backgroundPosition='right 235px'
          >
            <Background backgroundImage='darkPurpleGradientFlash'>
              <Process />
            </Background>
          </Background>
        </Parallax>
      </Condition>

      <Condition match={isMobile}>
        <Background
          backgroundImage='blendGradient'
          backgroundSize='small'
          backgroundRepeat='no-repeat'
          backgroundPosition='center 121px'
        >
          <Steps />
        </Background>

        <Technologies />

        <Background
          backgroundImage='blendGradient'
          backgroundSize='small'
          backgroundRepeat='no-repeat'
          backgroundPosition='center 165px'
        >
          <Background backgroundImage='darkPurpleGradientFlash'>
            <Process />
          </Background>
        </Background>
      </Condition>
    </>
  )
}
