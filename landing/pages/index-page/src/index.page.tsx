import React            from 'react'

import { Courses }      from '@landing/fragment-courses'
import { Faq }          from '@landing/fragment-faq'
import { Hero }         from '@landing/fragment-hero'
import { Navigation }   from '@landing/fragment-navigation'
import { Process }      from '@landing/fragment-process'
import { Slider }       from '@landing/fragment-slider'
import { Technologies } from '@landing/fragment-technologies'

export const IndexPage = () => (
  <>
    <Navigation />
    <Hero />
    <Courses />
    <Process />
    <Technologies />
    <Slider />
    <Faq />
  </>
)
export default IndexPage
