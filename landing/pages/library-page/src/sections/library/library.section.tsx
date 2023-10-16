import React                 from 'react'
import { Parallax }          from 'react-scroll-parallax'

import { LibraryBanner }     from '@landing/fragment-library'
import { NavigationDesktop } from '@landing/fragment-navigation'
import { NavigationMobile }  from '@landing/fragment-navigation'
import { AnimateOnLoad }     from '@ui/animate'
import { Background }        from '@ui/background'
import { Box }               from '@ui/layout'

export const LibrarySection = () => {
  const animateOnLoadProps = {
    transition: { duration: 4 },
  }

  return (
    <>
      <Box display={{ _: 'none', ultra: 'flex' }}>
        <AnimateOnLoad
          animate={{ x: 0 }}
          initial={{ x: '100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 2 }}
        >
          <Background
            width='100%'
            height='1226px'
            backgroundImage='symbol'
            backgroundSize='large'
            backgroundPosition='right top'
            backgroundRepeat='no-repeat'
          />
        </AnimateOnLoad>

        <AnimateOnLoad
          animate={{ x: 0 }}
          initial={{ x: '-100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 2 }}
        >
          <Background
            width='100%'
            height='1226px'
            backgroundImage='triangleGradient'
            backgroundSize='contain'
            backgroundRepeat='no-repeat'
          />
        </AnimateOnLoad>

        <AnimateOnLoad
          animate={{ y: 0 }}
          initial={{ y: '-100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 23 }}
        >
          <NavigationDesktop />
        </AnimateOnLoad>

        <AnimateOnLoad
          animate={{ y: 0 }}
          initial={{ y: '100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 4 }}
        >
          <Parallax translateY={[5, 17]}>
            <LibraryBanner />
          </Parallax>
        </AnimateOnLoad>
      </Box>

      <Box display={{ _: 'none', wide: 'flex', ultra: 'none' }}>
        <AnimateOnLoad
          animate={{ x: 0 }}
          initial={{ x: '100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 2 }}
        >
          <Background
            width='100%'
            height='970px'
            backgroundImage='symbol'
            backgroundSize='contain'
            backgroundPosition='right top'
            backgroundRepeat='no-repeat'
          />
        </AnimateOnLoad>

        <AnimateOnLoad
          animate={{ x: 0 }}
          initial={{ x: '-100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 2 }}
        >
          <Background
            width='100%'
            height='970px'
            backgroundImage='triangleGradient'
            backgroundSize='contain'
            backgroundRepeat='no-repeat'
          />
        </AnimateOnLoad>

        <AnimateOnLoad
          animate={{ y: 0 }}
          initial={{ y: '-100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 23 }}
        >
          <NavigationDesktop />
        </AnimateOnLoad>

        <AnimateOnLoad
          animate={{ y: 0 }}
          initial={{ y: '100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 4 }}
        >
          <Parallax translateY={[5, 15]}>
            <LibraryBanner />
          </Parallax>
        </AnimateOnLoad>
      </Box>

      <Box display={{ _: 'none', standard: 'flex', wide: 'none' }}>
        <AnimateOnLoad
          animate={{ x: 0 }}
          initial={{ x: '100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 2 }}
        >
          <Background
            width='100%'
            height='1815px'
            backgroundImage='symbol'
            backgroundSize='contain'
            backgroundPosition='right top'
            backgroundRepeat='no-repeat'
          />
        </AnimateOnLoad>

        <AnimateOnLoad
          animate={{ x: 0 }}
          initial={{ x: '-100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 2 }}
        >
          <Background
            width='100%'
            height='1815px'
            backgroundImage='triangleGradient'
            backgroundSize='contain'
            backgroundRepeat='no-repeat'
          />
        </AnimateOnLoad>

        <AnimateOnLoad
          animate={{ y: 0 }}
          initial={{ y: '-100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 23 }}
        >
          <NavigationDesktop />
        </AnimateOnLoad>

        <AnimateOnLoad
          animate={{ y: 0 }}
          initial={{ y: '100%' }}
          {...animateOnLoadProps}
          style={{ zIndex: 4 }}
        >
          <Parallax translateY={[9, 15]}>
            <LibraryBanner />
          </Parallax>
        </AnimateOnLoad>
      </Box>

      <Box display={{ _: 'flex', standard: 'none' }}>
        <Background
          backgroundImage='banner'
          backgroundSize='little'
          backgroundPosition='-260px top'
          backgroundRepeat='no-repeat'
          width='100%'
        >
          <NavigationMobile />

          <LibraryBanner />
        </Background>
      </Box>
    </>
  )
}
