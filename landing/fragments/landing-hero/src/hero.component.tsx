import React    from 'react'

import { Box }  from '@ui/layout'
import { Text } from '@ui/text'

export const Hero = () => (
  <Box backgroundColor='#666666' width='1920px' flexDirection='column' margin='0 auto'>
    <Box
      backgroundColor='#666666'
      width='1650px'
      height='498px'
      margin='412px 40px 50px 230px'
      justifyContent='space-between'
      alignItems='end'
    >
      <Box width='1460px' height='498px' flexDirection='column'>
        <Box width='1166px' height='345px'>
          <Text color='primary' fontSize='biggest' fontWeight='normal' lineHeight='biggest'>
            Обучаем профессионалов для революции в IT
          </Text>
        </Box>
        <Box
          border='solid 1px white'
          width='1460px'
          height='1px'
          marginTop='48px'
          marginBottom='48px'
        />
        <Box width='640px' height='56px'>
          <Text color='primary' fontSize='big' fontWeight='normal' lineHeight='normalMedium'>
            Мы не учим программированию и дизайну, мы учим мышлению, способному реализовывывать
            невозможные идеи
          </Text>
        </Box>
      </Box>
      <Box border='solid 2px olive' width='56px' height='200px' flexDirection='column'>
        Text
      </Box>
    </Box>
    <Box width='1460px' height='350px' margin='160px 230px' flexWrap='wrap'>
      <Text color='primary' fontSize='giant' fontWeight='normal' lineHeight='largeNormal'>
        Digital становится всё более многолюдным, востребованность по направлениям при этом не
        снижается Но специалистов, готовых нести ответсвенность за свои решения по-прежнему мало
        Atlantis Academy обучает и формирует инженеров и архитекторов, а не программистов и
        дизайнеров
      </Text>
    </Box>
  </Box>
)
