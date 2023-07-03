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
    <Layout flexBasis={[0, 160]} />
    <Column>
      <Column margin='0 auto' alignItems='center' flexWrap='wrap' maxWidth={['90%', '890px']}>
        <Box flexBasis='content'>
          <Text
            color='text.primary'
            fontSize={['atom', 'tiny']}
            lineHeight={['atom', 'extraSmall']}
            textTransform='uppercase'
          >
            <FormattedMessage id='sliderSubtitle' defaultMessage='процесс создания' />
          </Text>
        </Box>
        <Layout flexBasis={24} />
        <Box>
          <Text
            color='text.primary'
            fontSize={['medium', 'regular']}
            lineHeight={['normal', 'common']}
            textAlign='center'
            letter='-1%'
          >
            <FormattedMessage
              id='sliderSlogan'
              defaultMessage='Любой процесс перестаёт быть сложным, когда знаешь как он протекает'
            />
          </Text>
        </Box>
      </Column>
      <Column margin='0 auto'>
        <Box margin='0 auto' width={['138px', '960px']} height={['340px', '540px']}>
          <ImageBlock src='./image/Default.png' />
        </Box>
        <Layout flexBasis={[18, 51]} />
        <Row justifyContent='space-between' alignItems='center'>
          <Box height='60px' width='40px' justifyContent='center' alignItems='center'>
            <ArrowLeftIcon width='30px' height='15px' />
          </Box>
          <Box height={['100%', 60]} maxWidth={['190px', '780px']} alignItems='center'>
            <Text color='text.primary' fontSize='little' lineHeight='medium' textAlign='center'>
              <FormattedMessage
                id='sliderSign'
                defaultMessage='Формирование системы базовых фрагментов и компонентов'
              />
            </Text>
          </Box>
          <Box height='60px' width='40px' justifyContent='center' alignItems='center'>
            <ArrowRightIcon width='30px' height='15px' />
          </Box>
        </Row>
      </Column>
    </Column>
    <Layout flexBasis={[70, 160]} />
  </Box>
)
