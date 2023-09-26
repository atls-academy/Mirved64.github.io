import React                 from 'react'
import { Parallax }          from 'react-scroll-parallax'

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
      <Background backgroundImage='navyBlueGradient' width='100%'>
        <Condition match={!isMobile}>
          <Background
            backgroundImage='banner'
            backgroundSize='usual'
            backgroundPosition='0'
            backgroundRepeat='no-repeat'
          >
            <Parallax translateY={[-17, 15]}>
              <NavigationDesktop />

              <LibraryBanner />
            </Parallax>
          </Background>
        </Condition>

        <Condition match={isMobile}>
          <Background
            backgroundImage='banner'
            backgroundSize='little'
            backgroundPosition='-260px -20px'
            backgroundRepeat='no-repeat'
          >
            <NavigationMobile />

            <LibraryBanner />
          </Background>
        </Condition>
      </Background>

      <Background
        backgroundColor='white'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        top={[500, 889]}
        width='100%'
        zIndex={1}
      >
        <Condition match={!isMobile}>
          <Background
            backgroundImage='wavesGradient'
            backgroundSize='ordinary'
            backgroundRepeat='no-repeat'
            backgroundPosition='0 1104px'
          >
            <CardsLibrary />
          </Background>
        </Condition>

        <Condition match={isMobile}>
          <Background
            backgroundImage='wavesGradient'
            backgroundSize='normal'
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
