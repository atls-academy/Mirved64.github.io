import React              from 'react'
import { Parallax }       from 'react-scroll-parallax'

import { About }          from '@landing/fragment-about'
import { Courses }        from '@landing/fragment-courses'
import { Faq }            from '@landing/fragment-faq'
import { Hero }           from '@landing/fragment-hero'
import { Navigation }     from '@landing/fragment-navigation'
import { Process }        from '@landing/fragment-process'
import { Slider }         from '@landing/fragment-slider'
import { Technologies }   from '@landing/fragment-technologies'
import { Background }     from '@ui/background'
import { Condition }      from '@ui/condition'
import { useWindowWidth } from '@ui/utils'

const IndexPage = () => {
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <>
      <Background backgroundColor='navyBlueGradient' position='absolute' width='100%'>
        <Navigation />

        <Condition match={isDesktop}>
          <Parallax translateY={[-7.5, 10]}>
            <Hero />

            <About />
          </Parallax>
        </Condition>

        <Condition match={isMobile}>
          <Hero />

          <About />
        </Condition>
      </Background>

      <Background
        backgroundColor='white'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        width='100%'
        zIndex={1}
        top={[939, 1750]}
      >
        <Courses />
      </Background>

      <Background
        backgroundColor='darkPurple'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        width='100%'
        zIndex={2}
        top={[2634, 3761]}
      >
        <Process />

        <Technologies />

        <Slider />
      </Background>

      <Background
        backgroundColor='white'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        width='100%'
        zIndex={3}
        top={[4264, 6450]}
      >
        <Faq />
      </Background>
    </>
  )
}

export default IndexPage
