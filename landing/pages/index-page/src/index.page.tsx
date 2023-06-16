import React          from 'react'

import { Courses }    from '@landing/courses-fragment'
import { Faq }        from '@landing/faq-fragment'
import { Hero }       from '@landing/hero-fragment'
import { Navigation } from '@landing/navigation-fragment'
import { Process }    from '@landing/process-fragment'

export const IndexPage = () => (
  <>
    <Navigation />
    <Hero />
    <Courses />
    <Process />
    <Faq />
  </>
)
export default IndexPage
