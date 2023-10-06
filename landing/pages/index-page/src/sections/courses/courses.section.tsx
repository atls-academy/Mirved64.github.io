import React              from 'react'
import { Parallax }       from 'react-scroll-parallax'

import { Courses }        from '@landing/fragment-courses'
import { Background }     from '@ui/background'
import { Condition }      from '@ui/condition'
import { useWindowWidth } from '@ui/utils'

export const CoursesSection = () => {
  const { isMobile, isDesktop, isWide, isUltra } = useWindowWidth()

  return (
    <>
      <Condition match={isUltra}>
        <Parallax translateY={[-5, 8]}>
          <Background
            backgroundImage='wavesGradient'
            backgroundSize='big'
            backgroundRepeat='no-repeat'
            backgroundPosition='0 777px'
            display='flex'
            width='100%'
          >
            <Courses />
          </Background>
        </Parallax>
      </Condition>

      <Condition match={isWide}>
        <Parallax translateY={[-5, 9]}>
          <Background
            backgroundImage='wavesGradient'
            backgroundSize='big'
            backgroundRepeat='no-repeat'
            backgroundPosition='left 464px'
            display='flex'
            width='100%'
          >
            <Courses />
          </Background>
        </Parallax>
      </Condition>

      <Condition match={isDesktop}>
        <Background
          backgroundImage='wavesGradient'
          backgroundSize='big'
          backgroundRepeat='no-repeat'
          backgroundPosition='left center'
          display='flex'
          width='100%'
        >
          <Parallax translateY={[-5, 10]}>
            <Courses />
          </Parallax>
        </Background>
      </Condition>

      <Condition match={isMobile}>
        <Background
          backgroundImage='wavesGradient'
          backgroundSize='normal'
          backgroundRepeat='no-repeat'
          backgroundPosition='-982px 409px'
          display='flex'
          width='100%'
        >
          <Courses />
        </Background>
      </Condition>
    </>
  )
}
