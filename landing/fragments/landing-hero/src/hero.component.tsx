import React            from 'react'

import { DefaultIcon }  from '@ui/icons'
import { TelegramIcon } from '@ui/icons'
import { GitHubIcon }   from '@ui/icons'
import { MailIcon }     from '@ui/icons'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'
import { NextLink }     from '@ui/link'
import { Text }         from '@ui/text'
import { Space }        from '@ui/text'

export const Hero = () => (
  <Box backgroundColor='background.hero' width='100%' flexDirection='column' margin='0 auto'>
    <Layout flexDirection='column' flexBasis={[80, 412]} />
    <Box flexDirection={['column', 'row']} alignItems={['center', 'end']}>
      <Layout flexBasis={[20, 230]} />
      <Column flexBasis={['content', 1460]} maxWidth={['90%', '100%']}>
        <Column>
          <Box flexWrap='wrap' maxWidth={['90%', '800px']}>
            <Text
              color='text.primary'
              fontSize={['normalLarge', 'biggest']}
              fontWeight='normal'
              lineHeight={['normal', 'biggest']}
            >
              Обучаем профессионалов
            </Text>
          </Box>
          <Box>
            <Text
              color='text.primary'
              fontSize={['normalLarge', 'biggest']}
              fontWeight='normal'
              lineHeight={['normal', 'biggest']}
            >
              для революции в IT
            </Text>
          </Box>
        </Column>
        <Layout flexBasis={[24, 48]} />
        <Box border='solid 1px white' maxWidth={['100%', 1460]} />
        <Layout flexBasis={[24, 48]} />
        <Box maxWidth={['350px', '600px']} flexWrap='wrap'>
          <Text
            color='text.primary'
            fontSize={['atom', 'big']}
            fontWeight='normal'
            lineHeight={['smallMedium', 'normalMedium']}
          >
            Мы не учим программированию и дизайну, мы учим мышлению, способному реализовывывать
            невозможные идеи
          </Text>
        </Box>
      </Column>
      <Box
        flexDirection={['row', 'column']}
        order={['1', '0']}
        flexGrow={[0, 2]}
        width={['90%', '56px']}
        height={['44px', '200px']}
        justifyContent='space-around'
        alignItems={['center', 'end']}
      >
        <Box width={['15px', '18px']} height={['12px', '15px']}>
          <NextLink>
            <TelegramIcon width='100%' height='100%' />
          </NextLink>
        </Box>
        <Box width={['15px', '18px']} height={['15px', '18px']}>
          <NextLink>
            <GitHubIcon width='100%' height='100%' />
          </NextLink>
        </Box>
        <Box width={['15px', '18px']} height={['12px', '14px']}>
          <NextLink>
            <MailIcon width='100%' height='100%' />
          </NextLink>
        </Box>
      </Box>
      <Layout flexBasis={[20, 40]} />
    </Box>
    <Layout flexDirection='column' flexBasis={[84, 210]} />
    <Box>
      <Layout flexBasis={[20, 230]} />
      <Column maxWidth={['90%', 1460]}>
        <Box display={['none', 'inline']}>
          <Text
            color='text.primary'
            fontSize='giant'
            fontWeight='normal'
            lineHeight='largeNormal'
            display='inline'
          >
            Digital становится всё более многолюдным, востребованность по направлениям при этом не
            снижается
          </Text>
          <Space count='8' />
          <Box display='inline'>
            <DefaultIcon width='40px' height='40px' />
          </Box>
          <Space count='8' />
          <Text
            color='text.primary'
            fontSize='giant'
            fontWeight='normal'
            lineHeight='largeNormal'
            display='inline'
          >
            Но специалистов, готовых нести ответсвенность за свои решения по-прежнему мало
          </Text>
          <Space count='8' />
          <Box display='inline'>
            <DefaultIcon width='40px' height='40px' />
          </Box>
        </Box>
        <Column display={['flex', 'none']}>
          <Text
            color='text.primary'
            fontSize='big'
            fontWeight='normal'
            lineHeight='normalMedium'
            display='inline'
          >
            Digital становится всё более многолюдным, востребованность по направлениям при этом не
            снижается. Но специалистов, готовых нести ответсвенность за свои решения по-прежнему
            мало.
          </Text>
          <Layout flexBasis={20} />
          <Text
            color='text.primary'
            fontSize='big'
            fontWeight='normal'
            lineHeight='normalMedium'
            display='inline'
          >
            Atlantis Academy формирует инженеров и архитекторов, а не программистов и
            дизайнеров
          </Text>
        </Column>
        <Layout flexDirection='column' flexBasis={40} />
        <Box display={['none', 'inline']}>
          <Text
            color='text.primary'
            fontSize='giant'
            fontWeight='normal'
            lineHeight='largeNormal'
            display='inline'
          >
            Atlantis Academy обучает и формирует инженеров и архитекторов, а не программистов и
            дизайнеров
          </Text>
          <Space count='8' />
          <Box display='inline'>
            <DefaultIcon width='40px' height='40px' />
          </Box>
        </Box>
        <Layout flexBasis={[64, 160]} />
      </Column>
      <Layout flexBasis={[20, 230]} />
    </Box>
  </Box>
)
