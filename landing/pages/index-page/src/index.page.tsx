import React                      from 'react'
import { Parallax }               from 'react-scroll-parallax'
import { useRef }                 from 'react'

import { About }                  from '@landing/fragment-about'
import { Courses }                from '@landing/fragment-courses'
import { Faq }                    from '@landing/fragment-faq'
import { Hero }                   from '@landing/fragment-hero'
import { HeroWide }               from '@landing/fragment-hero'
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
  const { isMobile, isDesktop, isWideDesktop, isTV } = useWindowWidth()
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
        <Condition match={isTV}>
          <Parallax translateY={[-7.5, 15]}>
            <Background
              backgroundColor='banner'
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
            >
              <NavigationDesktopIndex sectionRefs={sectionRefs} />

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
              <NavigationDesktopIndex sectionRefs={sectionRefs} />

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
              <NavigationDesktopIndex sectionRefs={sectionRefs} />

              <Hero />

              <About />
            </Background>
          </Parallax>
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
        top={{ _: 934, standard: 1670, wide: 1440, ultra: 2160 }}
        overflow='hidden'
      >
        <Condition match={isTV}>
          <Parallax translateY={[-5, 8]}>
            <Background
              backgroundColor='wavesGradient'
              backgroundSize='4400px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='0 777px'
              display='flex'
              width='100%'
            >
              <Courses />
            </Background>
          </Parallax>
        </Condition>

        <Condition match={isWideDesktop}>
          <Parallax translateY={[-5, 9]}>
            <Background
              backgroundColor='wavesGradient'
              backgroundSize='4400px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='-196px 464px'
              display='flex'
              width='100%'
            >
              <Courses />
            </Background>
          </Parallax>
        </Condition>

        <Condition match={isDesktop}>
          <Parallax translateY={[-5, 14]}>
            <Background
              backgroundColor='wavesGradient'
              backgroundSize='4400px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='-2480px 645px'
              display='flex'
              width='100%'
            >
              <Courses />
            </Background>
          </Parallax>
        </Condition>

        <Condition match={isMobile}>
          <Background
            backgroundColor='wavesGradientSmall'
            backgroundSize='2200px 400px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-982px 409px'
            display='flex'
            width='100%'
          >
            <Courses />
          </Background>
        </Condition>
      </Background>

      <Background
        id='teaching'
        ref={sectionRefs[2]}
        backgroundColor='darkPurple'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        width='100%'
        zIndex={2}
        top={{ _: 2629, standard: 3761, wide: 3591, ultra: 4435 }}
      >
        <Condition match={isTV}>
          <Parallax translateY={[-5, 5]}>
            <Background
              backgroundColor='wavesGradient'
              backgroundSize='4400px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='-196px 124px'
            >
              <Steps />
            </Background>

            <Technologies />

            <Background
              backgroundColor='wavesGradient'
              backgroundSize='4400px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='-470px 388px'
            >
              <Background backgroundColor='darkPurpleGradientFlash'>
                <Process />
              </Background>
            </Background>
          </Parallax>
        </Condition>

        <Condition match={isWideDesktop}>
          <Parallax translateY={[-2, 5]}>
            <Background
              backgroundColor='wavesGradient'
              backgroundSize='4400px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='-196px 124px'
            >
              <Steps />
            </Background>

            <Technologies />

            <Background
              backgroundColor='wavesGradient'
              backgroundSize='4400px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='-920px -38px'
            >
              <Background backgroundColor='darkPurpleGradientFlash'>
                <Process />
              </Background>
            </Background>
          </Parallax>
        </Condition>

        <Condition match={isDesktop}>
          <Parallax translateY={[-5, 8]}>
            <Background
              backgroundColor='wavesGradient'
              backgroundSize='4400px 800px'
              backgroundRepeat='no-repeat'
              backgroundPosition='-196px 124px'
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
              <Background backgroundColor='darkPurpleGradientFlash'>
                <Process />
              </Background>
            </Background>
          </Parallax>
        </Condition>

        <Condition match={isMobile}>
          <Background
            backgroundColor='blendGradient'
            backgroundSize='1015px 464px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-300px 121px'
          >
            <Steps />
          </Background>

          <Technologies />

          <Background
            backgroundColor='blendGradient'
            backgroundSize='1015px 464px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-299px 165px'
          >
            <Background backgroundColor='darkPurpleGradientFlash'>
              <Process />
            </Background>
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
        top={{ _: 4237, standard: 6491, wide: 6699, ultra: 7983 }}
      >
        <Condition match={isWideDesktop || isTV}>
          <Background
            backgroundColor='wavesGradient'
            backgroundSize='4400px 800px'
            backgroundRepeat='no-repeat'
            backgroundPosition={{ wide: '-194px 186px', ultra: '-190px 102px' }}
          >
            <Faq />
          </Background>
        </Condition>

        <Condition match={isDesktop}>
          <Background
            backgroundColor='wavesGradient'
            backgroundSize='4400px 800px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-196px 232px'
          >
            <Faq />
          </Background>
        </Condition>

        <Condition match={isMobile}>
          <Background
            backgroundColor='blendGradientSmall'
            backgroundSize='1015px 464px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-300px 121px'
          >
            <Faq />
          </Background>
        </Condition>
      </Background>
    </>
  )
}

export default IndexPage
