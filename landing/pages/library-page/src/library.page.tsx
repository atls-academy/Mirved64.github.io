import React          from 'react'

import { Library }    from '@landing/fragment-library'
import { Navigation } from '@landing/fragment-navigation'
import { Background } from '@ui/background'

const LibraryPage = () => (
  <Background backgroundColor='navyBlueGradient' width='100%'>
    <Background
      backgroundColor='banner'
      backgroundSize={['736px 415px', '100% 1080px']}
      backgroundPosition={['-260px', '0']}
      backgroundRepeat='no-repeat'
    >
      <Navigation />
      <Library />
    </Background>
  </Background>
)

export default LibraryPage
