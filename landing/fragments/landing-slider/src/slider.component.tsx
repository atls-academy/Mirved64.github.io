import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { ArrowLeftIcon }    from '@ui/icons'
import { ArrowRightIcon }   from '@ui/icons'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

export const Slider = () => (
  <Box backgroundColor='background.slider' width='100%' margin='0 auto' flexDirection='column'>
    <Layout flexBasis={[24, 160]} flexShrink='0'/>
    
    <Column>
      <Column margin='0 auto' alignItems='center' flexWrap='wrap' >
        <Box>
          <Text
            color='text.primary'
            fontSize={['atom', 'tiny']}
            lineHeight={['atom', 'extraSmall']}
            textTransform='uppercase'
          >
            <FormattedMessage id='sliderSubtitle' />
          </Text>
        </Box>
        
        <Layout flexBasis={[16, 24]} flexShrink='0' />
        
        <Box justifyContent='center' >
          <Box flexBasis={[335, 960]} flexShrink='1' >
          <Text
            color='text.primary'
            fontSize={['medium', 'regular']}
            lineHeight={['normal', 'mean']}
            textAlign='center'
            letterSpacing='-1%'
          >
            <FormattedMessage id='sliderSlogan' />
          </Text>
          </Box>
        </Box>
      </Column>
      
      <Layout flexBasis={[24, 50]} flexShrink='0' />
      
      <Column margin='0 auto'>
        <Box margin='0 auto' maxWidth={['138px', '960px']} height={['340px', 'auto']} flexShrink='1'>
          <ImageBlock src='./image/mockup.png' />
        </Box>
        
        <Layout flexBasis={[25, 32]} flexShrink='0' />
        
        <Box justifyContent='center'>
        <Row justifyContent='space-between' alignItems='center' flexBasis={[335, 960]}>
          <Box height='60px' width='40px' justifyContent='center' alignItems='center'>
            <ArrowLeftIcon width='30px' height='15px' />
          </Box>
          
          <Box height={['100%', 60]} flexBasis={['175px', '778px']} alignItems='center' justifyContent='center'>
            <Text color='text.primary' fontSize={['atom', 'little']} lineHeight={['tiny', 'medium']} textAlign='center'>
              <FormattedMessage id='sliderSign' />
            </Text>
          </Box>
          
          <Box height='60px' width='40px' justifyContent='center' alignItems='center'>
            <ArrowRightIcon width='30px' height='15px' />
          </Box>
        </Row></Box>
      </Column>
    </Column>
    
    <Layout flexBasis={[70, 160]} flexShrink='0'/>
  </Box>
)
