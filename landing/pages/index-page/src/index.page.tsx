import React                      from 'react'
import { RefObject }              from 'react'
import { Parallax }               from 'react-scroll-parallax'
import { useAnimationControls }   from 'framer-motion'
import { useRef }                 from 'react'
import { mergeRefs }              from 'react-merge-refs'

import { About }                  from '@landing/fragment-about'
import { Courses }                from '@landing/fragment-courses'
import { Faq }                    from '@landing/fragment-faq'
import { HeaderIndex }            from '@landing/fragment-header'
import { Hero }                   from '@landing/fragment-hero'
import { NavigationDesktopIndex } from '@landing/fragment-navigation'
import { NavigationMobile }       from '@landing/fragment-navigation'
import { Process }                from '@landing/fragment-process'
import { Steps }                  from '@landing/fragment-steps'
import { Technologies }           from '@landing/fragment-technologies'
import { AnimateOnClick }         from '@ui/animate'
import { AnimateOnLoad }          from '@ui/animate'
import { Background }             from '@ui/background'
import { Condition }              from '@ui/condition'
import { Box }                    from '@ui/layout'
import { Navbar }                 from '@ui/navbar'
import { useDivHeight }           from '@ui/utils'
import { useWindowWidth }         from '@ui/utils'

const IndexPage = () => {
  const { isMobile, isDesktop, isWideDesktop, isUltraDesktop } = useWindowWidth()

  const [academyRef, academyHeight] = useDivHeight()
  const [coursesRef, coursesHeight] = useDivHeight()
  const [teachingRef, teachingHeight] = useDivHeight()

  const COURSES_DELTA = -(academyHeight - 80)
  const TEACHING_DELTA = -(coursesHeight - COURSES_DELTA)
  const FAQ_DELTA = -(teachingHeight - TEACHING_DELTA)

  const controlsCourses = useAnimationControls()
  const controlsTeaching = useAnimationControls()
  const controlsFaq = useAnimationControls()

  const sectionRefs: RefObject<HTMLDivElement>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  const animateOnLoadProps = {
    transition: { duration: 1.2 },
  }

  return (
    <>
      <Condition match={!isMobile}>
        <HeaderIndex
          sectionRefs={sectionRefs}
          controlsCourses={controlsCourses}
          controlsTeaching={controlsTeaching}
          controlsFaq={controlsFaq}
          coursesDelta={COURSES_DELTA}
          teachingDelta={TEACHING_DELTA}
          faqDelta={FAQ_DELTA}
        />
      </Condition>

      <AnimateOnLoad animate={{ opacity: 1 }} initial={{ opacity: 0 }} {...animateOnLoadProps}>
        <Navbar sectionRefs={sectionRefs} />
      </AnimateOnLoad>

      <Background
        id='academy'
        ref={mergeRefs([sectionRefs[0], academyRef])}
        backgroundImage='navyBlueGradient'
        position='absolute'
        overflow='hidden'
        width='100%'
        height={{ _: '1030px', standard: '1830px', wide: '1520px', ultra: '2240px' }}
        zIndex={0}
      >
        <Box display={{ _: 'none', ultra: 'flex' }}>
          <AnimateOnLoad animate={{ x: 0 }} initial={{ x: '100%' }} {...animateOnLoadProps}>
            <Background
              width='100%'
              height='2070px'
              backgroundImage='symbol'
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad animate={{ x: 0 }} initial={{ x: '-100%' }} {...animateOnLoadProps}>
            <Background
              width='100%'
              height='2070px'
              backgroundImage='triangleGradient'
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            {...animateOnLoadProps}
            style={{ zIndex: 3 }}
          >
            <NavigationDesktopIndex sectionRefs={sectionRefs} />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            {...animateOnLoadProps}
            style={{ zIndex: 2 }}
          >
            <Parallax translateY={[6, 12]}>
              <Hero />
            </Parallax>
          </AnimateOnLoad>
        </Box>

        <Box display={{ _: 'none', wide: 'flex', ultra: 'none' }}>
          <AnimateOnLoad animate={{ x: 0 }} initial={{ x: '100%' }} {...animateOnLoadProps}>
            <Background
              width='100%'
              height='1440px'
              backgroundImage='symbol'
              backgroundSize='contain'
              backgroundPosition='right'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad animate={{ x: 0 }} initial={{ x: '-100%' }} {...animateOnLoadProps}>
            <Background
              width='100%'
              height='1440px'
              backgroundImage='triangleGradient'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            {...animateOnLoadProps}
            style={{ zIndex: 2 }}
          >
            <NavigationDesktopIndex sectionRefs={sectionRefs} />
          </AnimateOnLoad>

          <AnimateOnLoad animate={{ y: 0 }} initial={{ y: '100%' }} {...animateOnLoadProps}>
            <Parallax translateY={[4, 12]}>
              <Hero />
            </Parallax>
          </AnimateOnLoad>
        </Box>

        <Box display={{ _: 'none', standard: 'flex', wide: 'none' }}>
          <AnimateOnLoad animate={{ x: 0 }} initial={{ x: '100%' }} {...animateOnLoadProps}>
            <Background
              width='100%'
              height='1708px'
              backgroundImage='symbol'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad animate={{ x: 0 }} initial={{ x: '-100%' }} {...animateOnLoadProps}>
            <Background
              width='100%'
              height='1708px'
              backgroundImage='triangleGradient'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            {...animateOnLoadProps}
            style={{ zIndex: 2 }}
          >
            <NavigationDesktopIndex sectionRefs={sectionRefs} />
          </AnimateOnLoad>

          <AnimateOnLoad animate={{ y: 0 }} initial={{ y: '100%' }} {...animateOnLoadProps}>
            <Parallax translateY={[4, 15]}>
              <Hero />

              <About />
            </Parallax>
          </AnimateOnLoad>
        </Box>

        <Box display={{ _: 'flex', standard: 'none' }}>
          <Background
            backgroundImage='banner'
            backgroundSize='little'
            backgroundRepeat='no-repeat'
            backgroundPosition='right top'
          >
            <NavigationMobile />

            <Hero />

            <About />
          </Background>
        </Box>
      </Background>

      <AnimateOnClick animate={controlsCourses} style={{ zIndex: 11 }}>
        <Background
          id='courses'
          ref={mergeRefs([sectionRefs[1], coursesRef])}
          backgroundColor='white'
          borderRadius={['hugeTop', 'giantTop']}
          position='absolute'
          width='100%'
          zIndex={11}
          top={{ _: 950, standard: 1750, wide: 1440, ultra: 2160 }}
          overflow='hidden'
        >
          <Condition match={isUltraDesktop}>
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

          <Condition match={isWideDesktop}>
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
              <Parallax translateY={[-5, 14]}>
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
        </Background>
      </AnimateOnClick>

      <AnimateOnClick animate={controlsTeaching} style={{ zIndex: 12 }}>
        <Background
          id='teaching'
          ref={mergeRefs([sectionRefs[2], teachingRef])}
          backgroundColor='darkPurple'
          borderRadius={['hugeTop', 'giantTop']}
          position='absolute'
          width='100%'
          zIndex={12}
          top={{ _: 2645, standard: 3761, wide: 3591, ultra: 4435 }}
        >
          <Condition match={isUltraDesktop}>
            <Parallax translateY={[-5, 5]}>
              <Background
                backgroundImage='wavesGradient'
                backgroundSize='big'
                backgroundRepeat='no-repeat'
                backgroundPosition='-196px 124px'
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

          <Condition match={isWideDesktop}>
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
        </Background>
      </AnimateOnClick>

      <AnimateOnClick animate={controlsFaq} style={{ zIndex: 13 }}>
        <Background
          id='faq'
          ref={sectionRefs[3]}
          backgroundColor='white'
          borderRadius={['hugeTop', 'giantTop']}
          position='absolute'
          width='100%'
          zIndex={13}
          top={{ _: 4254, standard: 6491, wide: 6699, ultra: 7983 }}
        >
          <Condition match={isWideDesktop || isUltraDesktop}>
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
        </Background>
      </AnimateOnClick>
    </>
  )
}

export default IndexPage
