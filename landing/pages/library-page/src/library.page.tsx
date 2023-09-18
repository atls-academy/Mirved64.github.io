import React                   from 'react'
import { Parallax }            from 'react-scroll-parallax'

import { Header }              from '@landing/fragment-header'
import { CardsLibrary }        from '@landing/fragment-library'
import { LibraryBanner }       from '@landing/fragment-library'
import { LibraryBannerMobile } from '@landing/fragment-library'
import { NavigationDesktop }   from '@landing/fragment-navigation'
import { NavigationMobile }    from '@landing/fragment-navigation'
import { AnimateOnLoad }       from '@ui/animate'
import { Background }          from '@ui/background'
import { Condition }           from '@ui/condition'
import { Box }                 from '@ui/layout'
import { useWindowWidth }      from '@ui/utils'

const LibraryPage = () => {
  const { isMobile, isDesktop, isWideDesktop, isTV } = useWindowWidth()

  return (
    <>
      <Condition match={!isMobile}>
        <Header />
      </Condition>

      <Background
        backgroundColor='navyBlueGradient'
        position='absolute'
        overflow='hidden'
        width='100%'
        height={{ _: 587, standard: 1815, wide: 970, ultra: 1326 }}
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
              height='1226px'
              backgroundColor='symbol'
              backgroundSize='3840px 2160px'
              backgroundPosition='right top'
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
              height='1226px'
              backgroundColor='triangleGradient'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 23 }}
          >
            <NavigationDesktop />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 4 }}
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
            transition={{ duration: 1.2 }}
            style={{ zIndex: 2, position: 'absolute', minWidth: '100%' }}
          >
            <Background
              width='100%'
              height='970px'
              backgroundColor='symbol'
              backgroundSize='contain'
              backgroundPosition='right top'
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
              height='970px'
              backgroundColor='triangleGradient'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 23 }}
          >
            <NavigationDesktop />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 4 }}
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
            transition={{ duration: 1.2 }}
            style={{ zIndex: 2, position: 'absolute', minWidth: '100%' }}
          >
            <Background
              width='100%'
              height='1815px'
              backgroundColor='symbol'
              backgroundSize='contain'
              backgroundPosition='right top'
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
              height='1815px'
              backgroundColor='triangleGradient'
              backgroundSize='contain'
              backgroundRepeat='no-repeat'
            />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '-100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 23 }}
          >
            <NavigationDesktop />
          </AnimateOnLoad>

          <AnimateOnLoad
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ duration: 1.2 }}
            style={{ position: 'absolute', minWidth: '100%', zIndex: 4 }}
          >
            <Parallax translateY={[9, 15]}>
              <LibraryBanner />
            </Parallax>
          </AnimateOnLoad>
        </Box>

        <Box display={{ _: 'flex', standard: 'none' }}>
          <Background
            backgroundColor='banner'
            backgroundSize='736px 415px'
            backgroundPosition='-260px 0'
            backgroundRepeat='no-repeat'
          >
            <NavigationMobile />

            <LibraryBannerMobile />
          </Background>
        </Box>
      </Background>

      <Background
        backgroundColor='white'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        top={{ _: 500, standard: 739, wide: 800, ultra: 1196 }}
        width='100%'
        zIndex={11}
      >
        <Condition match={isWideDesktop || isTV}>
          <Background
            backgroundColor='wavesGradient'
            backgroundSize='4400px 800px'
            backgroundRepeat='no-repeat'
            backgroundPosition='0 404px'
          >
            <CardsLibrary />
          </Background>
        </Condition>

        <Condition match={isDesktop}>
          <Background
            backgroundColor='wavesGradient'
            backgroundSize='4400px 800px'
            backgroundRepeat='no-repeat'
            backgroundPosition='0 1104px'
          >
            <CardsLibrary />
          </Background>
        </Condition>

        <Condition match={isMobile}>
          <Background
            backgroundColor='wavesGradientSmall'
            backgroundSize='2200px 400px'
            backgroundRepeat='no-repeat'
            backgroundPosition='-982px 409px'
          >
            <CardsLibrary />
          </Background>
        </Condition>
      </Background>
    </>
  )
}

export default LibraryPage
