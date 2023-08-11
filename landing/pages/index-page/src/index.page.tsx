import React            from 'react'
import { Parallax }     from 'react-scroll-parallax'

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
    {/* <Parallax
      translateY={['0px', '-100px']}
      
    > */}
    <Background backgroundColor='navyBlue'>
      <Navigation />
      <Hero />
      <About />
    </Background>
    {/* </Parallax> */}

    <Parallax translateY={['0px', '-1830px']}>
      <Background backgroundColor='white'>
        <Courses />
      </Background>
    </Parallax>

    <Parallax
    translateY={['-1690px', '-3520px']}
    >
    <Background backgroundColor='darkPurple'>
      <Process />
      <Technologies />
      <Slider />
    </Background>
    </Parallax>

    {/* <Parallax
    // translateY={[-30, 100]}
    > */}
    <Background backgroundColor='white'>
      <Faq />
    </Background>
    {/* </Parallax> */}
  </>
)
export default IndexPage
