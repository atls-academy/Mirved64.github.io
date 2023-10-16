import React                from 'react'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

import { DesktopTextBlock } from './text-block'
import { useAbout }         from './data'

export const About = () => {
  const about = useAbout()

  const problemMobile: string = about?.data?.section.content.split('\n')[1]
  const sloganMobile: string = about?.data?.section.content.split('\n')[2]
  const problemDesktop: string[] = problemMobile?.split('.').slice(0, 2)
  const sloganDesktop: string = sloganMobile?.slice(0, -1)

  return (
    <Column flexGrow='1'>
      <Layout flexBasis={[64, 160]} />

      <Row>
        <Layout flexBasis={[20, 230]} />

        <Column flexBasis={[335, 1460]} flexGrow='1' flexShrink='0'>
          <Box display={['none', 'inline']}>
            {problemDesktop?.map((el) => (
              <DesktopTextBlock key={el[0]} text={el.trim()} />
            ))}
          </Box>

          <Column display={['flex', 'none']}>
            <Text color='text.white' fontSize='small' lineHeight='huge'>
              {problemMobile}
            </Text>

            <Layout flexBasis={28} />

            <Text color='text.white' fontSize='small' lineHeight='huge'>
              {sloganMobile}
            </Text>
          </Column>

          <Layout flexBasis={[0, 40]} />

          <Box display={['none', 'inline']}>
            <Box display='inline'>
              <DesktopTextBlock text={sloganDesktop} />
            </Box>
          </Box>
        </Column>

        <Layout flexBasis={[20, 230]} />
      </Row>

      <Layout flexBasis={[128, 240]} />
    </Column>
  )
}
