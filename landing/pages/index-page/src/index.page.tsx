import React            from 'react'

import { About }        from '@landing/fragment-about'
import { Courses }      from '@landing/fragment-courses'
import { Faq }          from '@landing/fragment-faq'
import { Hero }         from '@landing/fragment-hero'
import { Navigation }   from '@landing/fragment-navigation'
import { Process }      from '@landing/fragment-process'
import { Slider }       from '@landing/fragment-slider'
import { Technologies } from '@landing/fragment-technologies'
import { Background }   from '@ui/background'

export const IndexPage = () => (
  <>
    <Background backgroundColor='navyBlue'>
      <Navigation />
      <Hero />
      <About />
    </Background>
    <Courses />
    <Process />
    <Technologies />
    <Slider />
    <Faq />
  </>
)
export default IndexPage
