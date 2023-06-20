import React            from 'react'

import { DefaultIcon }  from '@ui/icons'
import { TelegramIcon } from '@ui/icons'
import { GitHubIcon }   from '@ui/icons'
import { MailIcon }     from '@ui/icons'
import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { NextLink }     from '@ui/link'
import { Text }         from '@ui/text'
import { Space }        from '@ui/text'

export const Hero = () => (
  <Box backgroundColor='#666666' width='100%' flexDirection='column' margin='0 auto'>
    <Box
      flexDirection={['column', 'row']}
      backgroundColor='#666666'
      margin={['100px 20px 64px', '412px 40px 50px 230px']}
      justifyContent='space-between'
      alignItems={['center', 'end']}
    >
      <Column marginBottom={['24px', '0px']}>
        <Column flexWrap='wrap'>
          <Text
            color='primary'
            fontSize={['normalLarge', 'biggest']}
            fontWeight='normal'
            lineHeight={['normal', 'biggest']}
          >
            Обучаем профессионалов
          </Text>
          <Text
            color='primary'
            fontSize={['normalLarge', 'biggest']}
            fontWeight='normal'
            lineHeight={['normal', 'biggest']}
          >
            для революции в IT
          </Text>
        </Column>
        <Box
          border='solid 1px white'
          height='1px'
          marginTop={['24px', '48px']}
          marginBottom={['24px', '48px']}
        />
        <Column>
          <Text
            color='primary'
            fontSize={['atom', 'big']}
            fontWeight='normal'
            lineHeight={['smallMedium', 'normalMedium']}
            flexWrap='wrap'
          >
            Мы не учим программированию и дизайну, мы учим мышлению,{' '}
          </Text>
          <Text
            color='primary'
            fontSize={['atom', 'big']}
            fontWeight='normal'
            lineHeight={['smallMedium', 'normalMedium']}
            flexWrap='wrap'
          >
            способному реализовывывать невозможные идеи
          </Text>
        </Column>
      </Column>
      <Box
        flexDirection={['row', 'column']}
        order={['1', '0']}
        width={['100%', '56px']}
        height={['44px', '200px']}
        justifyContent={['space-around', 'space-between']}
        alignItems='center'
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
    </Box>
    <Column margin={['0 20px 64px', '160px 230px']} alignItems='center'>
      <Box display={['none', 'inline']}>
        <Text
          color='primary'
          fontSize='giant'
          fontWeight='normal'
          lineHeight='largeNormal'
          display='inline'
        >
          Digital становится всё более многолюдным, востребованность по направлениям при этом не
          снижается
        </Text>
        <Space count='8' />
        <Box>
          <DefaultIcon width='40px' height='40px' />
        </Box>

        <Space count='8' />
        <Text
          color='primary'
          fontSize='giant'
          fontWeight='normal'
          lineHeight='largeNormal'
          display='inline'
        >
          Но специалистов, готовых нести ответсвенность за свои решения по-прежнему мало
        </Text>
        <Space count='8' />
        <Box>
          <DefaultIcon width='40px' height='40px' />
        </Box>
      </Box>

      <Column display={['flex', 'none']}>
        <Text
          color='primary'
          fontSize='big'
          fontWeight='normal'
          lineHeight='normalMedium'
          display='inline'
          marginBottom='20px'
        >
          Digital становится всё более многолюдным, востребованность по направлениям при этом не
          снижается. Но специалистов, готовых нести ответсвенность за свои решения по-прежнему мало.
        </Text>
        <Text
          color='primary'
          fontSize='big'
          fontWeight='normal'
          lineHeight='normalMedium'
          display='inline'
        >
          Atlantis Academy обучает и формирует инженеров и архитекторов, а не программистов и
          дизайнеров
        </Text>
      </Column>

      <Box marginTop='40px' display={['none', 'inline']}>
        <Text
          color='primary'
          fontSize='giant'
          fontWeight='normal'
          lineHeight='largeNormal'
          display='inline'
        >
          Atlantis Academy обучает и формирует инженеров и архитекторов, а не программистов и
          дизайнеров
        </Text>
        <Space count='8' />
        <Box>
          <DefaultIcon width='40px' height='40px' />
        </Box>
      </Box>
    </Column>
  </Box>
)
