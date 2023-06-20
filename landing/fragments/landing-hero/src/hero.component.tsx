import React            from 'react'

import { DefaultIcon }  from '@ui/icons'
import { TelegramIcon } from '@ui/icons'
import { GitHubIcon }   from '@ui/icons'
import { MailIcon }     from '@ui/icons'
import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Text }         from '@ui/text'
import { Space }        from '@ui/text'

export const Hero = () => (
  <Box backgroundColor='#666666' width='100%' flexDirection='column' margin='0 auto'>
    <Box
      backgroundColor='#666666'
      margin='412px 40px 50px 230px'
      justifyContent='space-between'
      alignItems='end'
    >
      <Column>
        <Column flexWrap='wrap'>
          <Text color='primary' fontSize='biggest' fontWeight='normal' lineHeight='biggest'>
            Обучаем профессионалов
          </Text>
          <Text color='primary' fontSize='biggest' fontWeight='normal' lineHeight='biggest'>
            для революции в IT
          </Text>
        </Column>
        <Box border='solid 1px white' height='1px' marginTop='48px' marginBottom='48px' />
        <Column>
          <Text
            color='primary'
            fontSize='big'
            fontWeight='normal'
            lineHeight='normalMedium'
            flexWrap='wrap'
          >
            Мы не учим программированию и дизайну, мы учим мышлению,{' '}
          </Text>
          <Text
            color='primary'
            fontSize='big'
            fontWeight='normal'
            lineHeight='normalMedium'
            flexWrap='wrap'
          >
            способному реализовывывать невозможные идеи
          </Text>
        </Column>
      </Column>
      <Column width='56px' height='200px' justifyContent='space-between' alignItems='center'>
        <TelegramIcon width='18px' height='15px' />
        <GitHubIcon width='18px' height='18px' />
        <MailIcon width='18px' height='14px' />
      </Column>
    </Box>
    <Column margin='160px 230px' alignItems='center'>
      <Box display='inline'>
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
        <DefaultIcon width='40px' height='40px' />
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
        <DefaultIcon width='40px' height='40px' />
      </Box>
      <Box marginTop='40px' display='inline'>
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
        <DefaultIcon width='40px' height='40px' />
      </Box>
    </Column>
  </Box>
)
