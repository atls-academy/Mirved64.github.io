import React                from 'react'

import { Header }           from '@landing/fragment-header'
import { Background }       from '@ui/background'
import { Condition }        from '@ui/condition'
import { useWindowWidth }   from '@ui/utils'

import { LibrarySection }   from './sections'
import { MaterialsSection } from './sections'

const LibraryPage = () => {
  const { isMobile } = useWindowWidth()

  return (
    <>
      <Condition match={!isMobile}>
        <Header />
      </Condition>

      <Background
        backgroundImage='navyBlueGradient'
        position='absolute'
        overflow='hidden'
        width='100%'
        height={{ _: 587, standard: 1815, wide: 970, ultra: 1326 }}
        zIndex={1}
      >
        <LibrarySection />
      </Background>

      <Background
        backgroundColor='white'
        borderRadius={['hugeTop', 'giantTop']}
        position='absolute'
        top={{ _: 500, standard: 739, wide: 800, ultra: 1196 }}
        width='100%'
        zIndex={11}
      >
        <MaterialsSection />
      </Background>
    </>
  )
}

export default LibraryPage
