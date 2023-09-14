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
import { Column }                 from '@ui/layout'
import { Box }                    from '@ui/layout'
import { Navbar }                 from '@ui/navbar'
import { AnimateOnLoad }          from '@ui/preloader'
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
      <AnimateOnLoad animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}>
        <Navbar sectionRefs={sectionRefs} />
      </AnimateOnLoad>

      <Background
        id='academy'
        ref={sectionRefs[0]}
        backgroundColor='navyBlueGradient'
        position='absolute'
        overflow='hidden'
        width='100%'
        height={{ _: '1030px', standard: '1830px', ultra: '2070px' }}
        zIndex={1}
      >
        <Box display={{ _: 'none', ultra: 'flex' }}>
          <Parallax translateY={[-7.5, 15]}>
            <AnimateOnLoad
              animate={{ x: 0 }}
              initial={{ x: '100%' }}
              transition={{ duration: 2 }}
              style={{ zIndex: 2, position: 'absolute', minWidth: '100%' }}
            >
              <Background
                width='100%'
                height='2160px'
                backgroundColor='symbol'
                backgroundSize='cover'
                backgroundRepeat='no-repeat'
                onCompositionEnd='absolute'
              />
            </AnimateOnLoad>

            <AnimateOnLoad
              animate={{ x: 0 }}
              initial={{ x: '-100%' }}
              transition={{ duration: 2 }}
              style={{ zIndex: 2, position: 'absolute', minWidth: '100%' }}
            >
              <Background
                width='100%'
                height='2160px'
                backgroundColor='triangleGradient'
                backgroundSize='cover'
                backgroundRepeat='no-repeat'
                onCompositionEnd='absolute'
              />
            </AnimateOnLoad>

            <AnimateOnLoad
              animate={{ y: 0 }}
              initial={{ y: '-100%' }}
              transition={{ duration: 2 }}
              style={{ position: 'absolute', minWidth: '100%', zIndex: 3 }}
            >
              <NavigationDesktopIndex sectionRefs={sectionRefs} />
            </AnimateOnLoad>

            <AnimateOnLoad
              animate={{ y: 0 }}
              initial={{ y: '100%' }}
              transition={{ duration: 2 }}
              style={{ position: 'absolute', minWidth: '100%', zIndex: 4 }}
            >
              <HeroWide />
            </AnimateOnLoad>
          </Parallax>
        </Box>

        <Box display={{ _: 'none', wide: 'flex', ultra: 'none' }}>
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
        </Box>

        <Box display={{ _: 'none', standard: 'flex', wide: 'none' }}>
          <AnimateOnLoad
            animate={{ x: 0 }}
            initial={{ x: '100%' }}
            transition={{ duration: 2 }}
            style={{ zIndex: -1, position: 'absolute', minWidth: '100%' }}
          >
            <Background
              width='100%'
              height='1708px'
              backgroundColor='symbol'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
              onCompositionEnd='absolute'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ x: 0 }}
            initial={{ x: '-100%' }}
            transition={{ duration: 2 }}
            style={{ zIndex: -1, position: 'absolute', minWidth: '100%' }}
          >
            <Background
              width='100%'
              height='1708px'
              backgroundColor='triangleGradient'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
              onCompositionEnd='absolute'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            transition={{ duration: 2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 2 }}
          >
            <NavigationDesktopIndex sectionRefs={sectionRefs} />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ duration: 2 }}
            style={{ position: 'absolute', minWidth: '100%' }}
          >
            <Column>
              <Parallax translateY={[4, 11]}>
                <Hero />
                <About />
              </Parallax>
            </Column>
          </AnimateOnLoad>
        </Box>

        <Box display={{ _: 'flex', standard: 'none' }}>
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
        </Box>
      </Background>

      <Background
        id='courses'
        ref={sectionRefs[1]}
        backgroundColor='white'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        width='100%'
        zIndex={11}
        top={{ _: 934, standard: 1628, wide: 1440, ultra: 1989 }}
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
        zIndex={12}
        top={{ _: 2629, standard: 3636, wide: 3591, ultra: 4435 }}
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
        zIndex={13}
        top={{ _: 4237, standard: 6337, wide: 6699, ultra: 7983 }}
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
