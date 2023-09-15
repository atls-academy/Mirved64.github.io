import React                 from 'react'
import { Parallax }          from 'react-scroll-parallax'

import { Header }            from '@landing/fragment-header'
import { CardsLibrary }      from '@landing/fragment-library'
import { LibraryBanner }     from '@landing/fragment-library'
import { NavigationDesktop } from '@landing/fragment-navigation'
import { NavigationMobile }  from '@landing/fragment-navigation'
import { Background }        from '@ui/background'
import { Condition }         from '@ui/condition'
import { useWindowWidth }    from '@ui/utils'

const LibraryPage = () => {
  const { isMobile } = useWindowWidth()

  return (
    <>
      <Condition match={!isMobile}>
        <Header />
      </Condition>

      <Background
        backgroundColor='navyBlueGradient'
        width='100%'
        height={{ standard: 1815, wide: 970, ultra: 1226 }}
      >
        <Background
          backgroundColor='banner'
          backgroundSize={['736px 415px', '100% 1080px']}
          backgroundPosition={['-260px -20px', '0']}
          backgroundRepeat='no-repeat'
        >
          <NavigationDesktop />
          <Parallax translateY={[-17, 15]}>
            <LibraryBanner />
          </Parallax>

          <NavigationMobile />

          <LibraryBanner />
        </Background>
      </Background>

      <Background
        backgroundColor='white'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        top={{ _: 500, standard: 889, wide: 890, ultra: 1306 }}
        width='100%'
        zIndex={1}
      >
        <Condition match={!isMobile}>
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
