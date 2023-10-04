import React                      from 'react'
import { FC }                     from 'react'
import { Parallax }               from 'react-scroll-parallax'

import { About }                  from '@landing/fragment-about'
import { Hero }                   from '@landing/fragment-hero'
import { NavigationDesktopIndex } from '@landing/fragment-navigation'
import { NavigationMobile }       from '@landing/fragment-navigation'
import { AnimateOnLoad }          from '@ui/animate'
import { Background }             from '@ui/background'
import { Box }                    from '@ui/layout'

import { AcademySectionProps }    from './academy.interfaces'

export const AcademySection: FC<AcademySectionProps> = ({ sectionRefs, animateOnLoadProps }) => (
  <>
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
  </>
)
