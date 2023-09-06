import React                   from 'react'
import { Parallax }            from 'react-scroll-parallax'
import { useRef }              from 'react'

import { About }               from '@landing/fragment-about'
import { Courses }             from '@landing/fragment-courses'
import { Faq }                 from '@landing/fragment-faq'
import { Hero }                from '@landing/fragment-hero'
import { HeroWide }            from '@landing/fragment-hero'
import { NavigationIndexPage } from '@landing/fragment-navigation'
import { Process }             from '@landing/fragment-process'
import { Steps }               from '@landing/fragment-steps'
import { Technologies }        from '@landing/fragment-technologies'
import { Background }          from '@ui/background'
import { Condition }           from '@ui/condition'
import { Navbar }              from '@ui/navbar'
import { useWindowWidth }      from '@ui/utils'

const IndexPage = () => {
  const { isMobile, isDesktop, isWideDesktop, isTV } = useWindowWidth()
  const sectionRefs = [
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
        height={{ standart: 1750, wide: 1440, ultra: 2240 }}
      >
        <Condition match={isTV}>
          <Parallax translateY={[-10, 15]}>
            <Background
              backgroundColor='banner'
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
            >
              <NavigationIndexPage sectionRefs={sectionRefs} />
              <HeroWide />
            </Background>
          </Parallax>
        </Condition>

        <Condition match={isWideDesktop}>
          <Parallax translateY={[-10, 11]}>
            <Background
              backgroundColor='banner'
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
            >
              <NavigationIndexPage sectionRefs={sectionRefs} />
              <HeroWide />
            </Background>
          </Parallax>
        </Condition>

        <Condition match={isDesktop}>
          <Parallax translateY={[-5, 10]}>
            <Background
              backgroundColor='banner'
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
            >
              <NavigationIndexPage sectionRefs={sectionRefs} />
              <Hero />
            </Background>

            <About />
          </Parallax>
        </Condition>

        <Condition match={isMobile}>
          <Background
            backgroundColor='banner'
            backgroundSize='736px 415px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-260px -20px'
          >
            <NavigationIndexPage sectionRefs={sectionRefs} />

            <Hero />
          </Background>

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
        top={{ _: 939, standard: 1670, wide: 1360 }}
        overflow='hidden'
      >
        <Background
          backgroundColor='wavesGradient'
          backgroundSize={['2200px 400px', '4400px 800px']}
          backgroundRepeat='no-repeat'
          backgroundPosition={{
            _: '-982px 409px',
            standard: '-2480px 645px',
            wide: '-1840px 464px',
          }}
          display='flex'
        >
          <Courses />
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
        top={{ _: 2634, standard: 3761, wide: 3571 }}
      >
        <Condition match={!isWideDesktop}>
          <Background
            backgroundColor='wavesGradient'
            backgroundSize={['1015px 464px', 'cover']}
            backgroundRepeat='no-repeat'
            backgroundPosition={['-340px 121px', '0 124px']}
          >
            <Steps />
          </Background>
        </Condition>

        <Condition match={isWideDesktop}>
          <Background
            backgroundColor='wavesGradientWide'
            backgroundSize='4400px 800px'
            backgroundRepeat='no-repeat'
            backgroundPosition='0 124px'
          >
            <Steps />
          </Background>
        </Condition>

        <Technologies />

        <Background backgroundColor='darkPurpleGradientFlash'>
          <Condition match={!isWideDesktop}>
            <Background
              backgroundColor='wavesGradient'
              backgroundSize={['1015px 464px', '4400px 800px']}
              backgroundRepeat='no-repeat'
              backgroundPosition={['-341px 165px', '-2480px 235px']}
            >
              <Process />
            </Background>
          </Condition>

          <Condition match={isWideDesktop}>
            <Background
              backgroundColor='wavesGradientWide'
              backgroundSize='2560px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='0 -40px'
            >
              <Process />
            </Background>
          </Condition>
        </Background>
      </Background>

      <Background
        id='faq'
        ref={sectionRefs[3]}
        backgroundColor='white'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        width='100%'
        zIndex={3}
        top={{ _: 4264, standard: 6450, wide: 6600 }}
      >
        <Condition match={!isWideDesktop}>
          <Background
            backgroundColor='wavesGradient'
            backgroundSize={['1015px 464px', '4400px 800px']}
            backgroundRepeat='no-repeat'
            backgroundPosition={['-340px 121px', '-2480px 232px']}
          >
            <Faq />
          </Background>
        </Condition>

        <Condition match={isWideDesktop}>
          <Background
            backgroundColor='wavesGradientWide'
            backgroundSize='4400px 800px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-194px 186px'
          >
            <Faq />
          </Background>
        </Condition>
      </Background>
    </>
  )
}

export default IndexPage
