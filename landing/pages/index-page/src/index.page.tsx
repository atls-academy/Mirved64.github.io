import React           from 'react'

import { Courses }     from '@landing/courses-fragment'
import { Faq }         from '@landing/faq-fragment'
import { MainSection } from '@landing/main-section-fragment'
import { Navigation }  from '@landing/navigation-fragment'
import { Process }     from '@landing/process-fragment'

export const IndexPage = () => (
  <>
    <Navigation />
    <MainSection />
    <Courses />
    <Process />
    <Faq />
  </>
)
export default IndexPage
