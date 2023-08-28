import React             from 'react'

import { CardsLibrary }  from '@landing/fragment-library'
import { LibraryBanner } from '@landing/fragment-library'
import { Navigation }    from '@landing/fragment-navigation'
import { Background }    from '@ui/background'

const LibraryPage = () => (
  <>
    <Background backgroundColor='navyBlueGradient' width='100%'>
      <Background
        backgroundColor='banner'
        backgroundSize={['736px 415px', '100% 1080px']}
        backgroundPosition={['-260px -20px', '0']}
        backgroundRepeat='no-repeat'
      >
        <Navigation />

        <LibraryBanner />
      </Background>
    </Background>

    <Background
      backgroundColor='white'
      borderRadius={['hugeTop', 'giantTop']}
      position='absolute'
      top={[460, 889]}
      width='100%'
    >
      <Background
        backgroundColor='wavesGradient'
        backgroundSize={['2200px 400px', '1920px 800px']}
        backgroundRepeat='no-repeat'
        backgroundPosition={['-982px 409px', '0 1104px']}
      >
        <CardsLibrary />
      </Background>
    </Background>
  </>
)

export default LibraryPage
