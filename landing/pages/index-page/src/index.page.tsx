import React                      from 'react'
import { Parallax }               from 'react-scroll-parallax'
import { useRef }                 from 'react'

import { About }                  from '@landing/fragment-about'
import { Courses }                from '@landing/fragment-courses'
import { Faq }                    from '@landing/fragment-faq'
import { Hero }                   from '@landing/fragment-hero'
import { NavigationDesktopIndex } from '@landing/fragment-navigation'
import { NavigationMobile }       from '@landing/fragment-navigation'
import { Process }                from '@landing/fragment-process'
import { Steps }                  from '@landing/fragment-steps'
import { Technologies }           from '@landing/fragment-technologies'
import { Background }             from '@ui/background'
import { Condition }              from '@ui/condition'
import { Navbar }                 from '@ui/navbar'
import { useWindowWidth }         from '@ui/utils'

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
          <Background
            backgroundColor='banner'
            backgroundSize='1920px 1080px'
            backgroundRepeat='no-repeat'
          >
            <Parallax translateY={[-5, 10]}>
              <NavigationDesktopIndex sectionRefs={sectionRefs} />

              <Hero />

              <About />
            </Parallax>
          </Background>
        </Condition>

        <Condition match={isMobile}>
          <Background
            backgroundColor='banner'
            backgroundSize='736px 415px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-260px -20px'
          >
            <NavigationMobile />

            <Hero />

            <About />
          </Background>
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
        <Background
          backgroundColor='wavesGradient'
          backgroundSize={['2200px 400px', '4400px 800px']}
          backgroundRepeat='no-repeat'
          backgroundPosition={['-982px 409px', '-2480px 645px']}
        >
          <Condition match={!isMobile}>
            <Parallax translateY={[-5, 10]}>
              <Courses />
            </Parallax>
          </Condition>

          <Condition match={isMobile}>
            <Courses />
          </Condition>
        </Background>
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
        <Condition match={!isMobile}>
          <Parallax translateY={[-1, 5]}>
            <Background
              backgroundColor='wavesGradient'
              backgroundSize='4400px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='0 124px'
            >
              <Steps />
            </Background>

            <Technologies />

            <Background
              backgroundColor='wavesGradient'
              backgroundSize='4400px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='-2480px 235px'
            >
              <Process />
            </Background>
          </Parallax>
        </Condition>

        <Condition match={isMobile}>
          <Background
            backgroundColor='wavesGradient'
            backgroundSize='1015px 464px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-340px 121px'
          >
            <Steps />
          </Background>

          <Technologies />

          <Background
            backgroundColor='wavesGradient'
            backgroundSize='1015px 464px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-341px 165px'
          >
            <Process />
          </Background>
        </Condition>
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
        <Background
          backgroundColor='wavesGradient'
          backgroundSize={['1015px 464px', '4400px 800px']}
          backgroundRepeat='no-repeat'
          backgroundPosition={['-340px 121px', '-2480px 232px']}
        >
          <Faq />
        </Background>
      </Background>
    </>
  )
}

export default IndexPage
