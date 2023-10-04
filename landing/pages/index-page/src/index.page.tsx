import React                    from 'react'
import { RefObject }            from 'react'
import { useAnimationControls } from 'framer-motion'
import { useRef }               from 'react'
import { mergeRefs }            from 'react-merge-refs'

import { HeaderIndex }          from '@landing/fragment-header'
import { AnimateOnClick }       from '@ui/animate'
import { AnimateOnLoad }        from '@ui/animate'
import { Background }           from '@ui/background'
import { Condition }            from '@ui/condition'
import { Navbar }               from '@ui/navbar'
import { useDivHeight }         from '@ui/utils'
import { useWindowWidth }       from '@ui/utils'

import { AcademySection }       from './sections'
import { CoursesSection }       from './sections'
import { FaqSection }           from './sections'
import { TeachingSection }      from './sections'

const IndexPage = () => {
  const { isMobile } = useWindowWidth()

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
        <AcademySection sectionRefs={sectionRefs} animateOnLoadProps={animateOnLoadProps} />
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
          <CoursesSection />
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
          top={{ _: 2655, standard: 3761, wide: 3591, ultra: 4435 }}
        >
          <TeachingSection />
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
          <FaqSection />
        </Background>
      </AnimateOnClick>
    </>
  )
}

export default IndexPage
