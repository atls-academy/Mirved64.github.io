import React                      from 'react'
import { RefObject }              from 'react'
import { Parallax }               from 'react-scroll-parallax'
import { useRef }                 from 'react'
import { mergeRefs }              from 'react-merge-refs'

import { About }                  from '@landing/fragment-about'
import { Courses }                from '@landing/fragment-courses'
import { Faq }                    from '@landing/fragment-faq'
import { HeaderIndex }            from '@landing/fragment-header'
import { Hero }                   from '@landing/fragment-hero'
import { HeroWide }               from '@landing/fragment-hero'
import { NavigationDesktopIndex } from '@landing/fragment-navigation'
import { NavigationMobile }       from '@landing/fragment-navigation'
import { Process }                from '@landing/fragment-process'
import { Steps }                  from '@landing/fragment-steps'
import { Technologies }           from '@landing/fragment-technologies'
import { AnimateOnClick }         from '@ui/animate'
import { AnimateOnLoad }          from '@ui/animate'
import { Background }             from '@ui/background'
import { Condition }              from '@ui/condition'
import { Column }                 from '@ui/layout'
import { Box }                    from '@ui/layout'
import { Navbar }                 from '@ui/navbar'
import { useDimensions }          from '@ui/utils'
import { useWindowWidth }         from '@ui/utils'

const IndexPage = () => {
  const { isMobile, isDesktop, isWideDesktop, isTV } = useWindowWidth()

  const [academyRef, academyHeight] = useDimensions()
  const [coursesRef, coursesHeight, coursesTop, coursesY] = useDimensions()
  const [teachingRef, teachingHeight, teachingTop, teachingY] = useDimensions()
  const [faqRef, faqHeight, faqTop, faqY] = useDimensions()

  const clickAnimation = {
    transition: {
      duration: 2.3,
      times: [0, 1, 0.3, 1],
      ease: ['linear', 'easeInOut', 'linear', 'easeInOut'],
    },
  }

  const COURSES_DELTA = -(0.75 * academyHeight - 80)
  const TEACHING_DELTA = -(coursesHeight + 0.5 * academyHeight - 80)
  const FAQ_DELTA = -(teachingHeight + coursesHeight + 0.25 * academyHeight - 80)

  const COURSES_DELTA_REVERSE = 0.75 * academyHeight - 80
  const TEACHING_DELTA_REVERSE = COURSES_DELTA_REVERSE + coursesHeight - 80
  const FAQ_DELTA_REVERSE = TEACHING_DELTA_REVERSE + teachingHeight - 80

  const sectionRefs: RefObject<HTMLDivElement>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  /* eslint-disable */
  console.log(
    `academyHeight ${academyHeight}, coursesHeight ${coursesHeight}, teachingHeight ${teachingHeight}, faqHeight ${faqHeight}, coursesTop ${coursesTop}, teachingTop ${teachingTop}, faqTop ${faqTop}, coursesY ${coursesY}, teachingY ${teachingY}, faqY ${faqY}`
  )
  console.log(
    `${COURSES_DELTA}, ${COURSES_DELTA_REVERSE}, ${TEACHING_DELTA}, ${TEACHING_DELTA_REVERSE}, ${FAQ_DELTA}, ${FAQ_DELTA_REVERSE}`
  )
  /* eslint-enable */
  return (
    <>
      <Condition match={!isMobile}>
        <HeaderIndex sectionRefs={sectionRefs} />
      </Condition>

      <AnimateOnLoad
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Navbar sectionRefs={sectionRefs} />
      </AnimateOnLoad>

      <Background
        id='academy'
        ref={mergeRefs([sectionRefs[0], academyRef])}
        backgroundColor='navyBlueGradient'
        position='absolute'
        overflow='hidden'
        width='100%'
        height={{ _: '1030px', standard: '1830px', wide: '1440px', ultra: '2070px' }}
        zIndex={1}
      >
        <Box display={{ _: 'none', ultra: 'flex' }}>
          <AnimateOnLoad
            animate={{ x: 0 }}
            initial={{ x: '100%' }}
            transition={{ duration: 1.2 }}
            style={{ zIndex: 2, position: 'absolute', minWidth: '100%' }}
          >
            <Background
              width='100%'
              height='2070px'
              backgroundColor='symbol'
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ x: 0 }}
            initial={{ x: '-100%' }}
            transition={{ duration: 1.2 }}
            style={{ zIndex: 2, position: 'absolute', minWidth: '100%' }}
          >
            <Background
              width='100%'
              height='2070px'
              backgroundColor='triangleGradient'
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 3 }}
          >
            <NavigationDesktopIndex sectionRefs={sectionRefs} />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 4 }}
          >
            <Parallax translateY={[6, 12]}>
              <HeroWide />
            </Parallax>
          </AnimateOnLoad>
        </Box>

        <Box display={{ _: 'none', wide: 'flex', ultra: 'none' }}>
          <AnimateOnLoad
            animate={{ x: 0 }}
            initial={{ x: '100%' }}
            transition={{ duration: 1.2 }}
            style={{ zIndex: -1, position: 'absolute', minWidth: '100%' }}
          >
            <Background
              width='100%'
              height='1440px'
              backgroundColor='symbol'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ x: 0 }}
            initial={{ x: '-100%' }}
            transition={{ duration: 1.2 }}
            style={{ zIndex: -1, position: 'absolute', minWidth: '100%' }}
          >
            <Background
              width='100%'
              height='1440px'
              backgroundColor='triangleGradient'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 2 }}
          >
            <NavigationDesktopIndex sectionRefs={sectionRefs} />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%' }}
          >
            <Parallax translateY={[4, 12]}>
              <HeroWide />
            </Parallax>
          </AnimateOnLoad>
        </Box>

        <Box display={{ _: 'none', standard: 'flex', wide: 'none' }}>
          <AnimateOnLoad
            animate={{ x: 0 }}
            initial={{ x: '100%' }}
            transition={{ duration: 1.2 }}
            style={{ zIndex: -1, position: 'absolute', minWidth: '100%' }}
          >
            <Background
              width='100%'
              height='1708px'
              backgroundColor='symbol'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ x: 0 }}
            initial={{ x: '-100%' }}
            transition={{ duration: 1.2 }}
            style={{ zIndex: -1, position: 'absolute', minWidth: '100%' }}
          >
            <Background
              width='100%'
              height='1708px'
              backgroundColor='triangleGradient'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 2 }}
          >
            <NavigationDesktopIndex sectionRefs={sectionRefs} />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ duration: 1.2 }}
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

      <AnimateOnClick
        animate={{
          y: [coursesTop, 0.25 * academyHeight, 0.25 * academyHeight, COURSES_DELTA_REVERSE],
        }}
        {...clickAnimation}
      >
        <Background
          id='courses'
          ref={mergeRefs([sectionRefs[1], coursesRef])}
          backgroundColor='white'
          borderRadius={['hugeTop', 'giantTop']}
          position='absolute'
          width='100%'
          zIndex={11}
          top={{ _: 934, standard: 1628, wide: 1340, ultra: 1989 }}
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
      </AnimateOnClick>

      <AnimateOnClick
        animate={{
          y: [teachingTop, 0.5 * academyHeight, 0.5 * academyHeight, TEACHING_DELTA_REVERSE],
        }}
        {...clickAnimation}
      >
        <Background
          id='teaching'
          ref={mergeRefs([sectionRefs[2], teachingRef])}
          backgroundColor='darkPurple'
          borderRadius={['hugeTop', 'giantTop']}
          position='absolute'
          width='100%'
          zIndex={12}
          top={{ _: 2629, standard: 3636, wide: 3591, ultra: 4275 }}
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
      </AnimateOnClick>

      <AnimateOnClick
        animate={{
          y: [faqTop, 0.75 * academyHeight, 0.75 * academyHeight, FAQ_DELTA_REVERSE],
        }}
        {...clickAnimation}
      >
        <Background
          id='faq'
          ref={mergeRefs([sectionRefs[3], faqRef])}
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
      </AnimateOnClick>
    </>
  )
}

export default IndexPage
