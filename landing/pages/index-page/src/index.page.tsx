import React                 from 'react'
import { Parallax }          from 'react-scroll-parallax'
import { useRef }            from 'react'

import { About }             from '@landing/fragment-about'
import { Courses }           from '@landing/fragment-courses'
import { Faq }               from '@landing/fragment-faq'
import { Hero }              from '@landing/fragment-hero'
import { NavigationDesktop } from '@landing/fragment-navigation'
import { NavigationMobile }  from '@landing/fragment-navigation'
import { Process }           from '@landing/fragment-process'
import { Steps }             from '@landing/fragment-steps'
import { Technologies }      from '@landing/fragment-technologies'
import { Background }        from '@ui/background'
import { Condition }         from '@ui/condition'
import { Navbar }            from '@ui/navbar'
import { useWindowWidth }    from '@ui/utils'

const IndexPage = () => {
  const { isMobile } = useWindowWidth()
  const sectionRefs: React.RefObject<HTMLDivElement>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />

      <Background
        id='academy'
        ref={sectionRefs[0]}
        backgroundColor='navyBlueGradient'
        position='absolute'
        width='100%'
      >
        <Condition match={!isMobile}>
          <NavigationDesktop sectionRefs={sectionRefs} />

          <Parallax translateY={[-7.5, 10]}>
            <Hero />

            <About />
          </Parallax>
        </Condition>

        <Condition match={isMobile}>
          <NavigationMobile />

          <Hero />

          <About />
        </Condition>
      </Background>

      <Background
        id='courses'
        ref={sectionRefs[1]}
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
        id='teaching'
        ref={sectionRefs[2]}
        backgroundColor='darkPurple'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        width='100%'
        zIndex={2}
        top={[2634, 3761]}
      >
        <Steps />

        <Technologies />

        <Process />
      </Background>

      <Background
        id='faq'
        ref={sectionRefs[3]}
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
