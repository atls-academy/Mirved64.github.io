import React            from 'react'

import { Courses }      from '@landing/courses-fragment'
import { Faq }          from '@landing/faq-fragment'
import { Hero }         from '@landing/hero-fragment'
import { Navigation }   from '@landing/navigation-fragment'
import { Process }      from '@landing/process-fragment'
import { Slider }       from '@landing/slider-fragment'
import { Technologies } from '@landing/technologies-fragment'

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
