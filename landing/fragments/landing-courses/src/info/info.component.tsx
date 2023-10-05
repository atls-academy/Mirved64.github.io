import React                from 'react'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { useWindowWidth }   from '@ui/utils/src'

import { TextBlockAccent }  from './text-block'
import { TextBlockPrimary } from './text-block'
import { useCourses }       from '../data'

export const Info = () => {
  const { isMobile } = useWindowWidth()

  const infoData = useCourses()

  const atlantisInfo: string[] = infoData?.data?.sectionBy?.content?.split('\n')[1].split(' ')
  const courseInfo: string[] = infoData?.data?.sectionBy?.content?.split('\n')[2].split(' ')

  return (
    <Box flexDirection={['column', 'row']}>
      <Row maxWidth={{ _: 335, standard: 710, ultra: 1065 }} flexWrap='wrap'>
        {atlantisInfo?.slice(0, 3).map((word) => (
          <TextBlockPrimary text={word} key={word} />
        ))}

        <TextBlockAccent text={atlantisInfo?.slice(3, 4)} />

        {atlantisInfo?.slice(4, 7).map((word) => (
          <TextBlockPrimary text={word} key={word} />
        ))}

        {atlantisInfo?.slice(7, 9).map((word) => (
          <TextBlockAccent text={word} key={word} />
        ))}

        {atlantisInfo?.slice(9, 13).map((word) => (
          <TextBlockPrimary text={word} key={word} />
        ))}

        <TextBlockAccent text={atlantisInfo?.slice(13, 14)} />

        <TextBlockAccent
          text={atlantisInfo?.slice(-1).join('').split('').slice(0, -1).join('')}
          space={false}
        />

        <TextBlockPrimary text={atlantisInfo?.slice(-1).join('').split('').splice(-1).join('')} />
      </Row>

      <Layout flexBasis={20} flexGrow='1' />

      <Row maxWidth={{ _: 335, standard: 559, ultra: 840 }} flexWrap='wrap'>
        {courseInfo?.slice(0, 5).map((word, index) => (
          <TextBlockPrimary text={word} key={word} space={!(isMobile && index === 2)} />
        ))}

        <TextBlockAccent text={courseInfo?.slice(5, 6)} />

        {courseInfo?.slice(6, 9).map((word) => (
          <TextBlockPrimary text={word} key={word} />
        ))}
      </Row>
    </Box>
  )
}
