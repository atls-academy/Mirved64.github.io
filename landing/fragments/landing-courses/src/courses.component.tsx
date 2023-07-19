import React                    from 'react'
import { FormattedMessage }     from 'react-intl'
import { useIntl }              from 'react-intl'

import { Button }               from '@ui/button'
import { Divider }              from '@ui/divider'
import { ArrowRightIcon }       from '@ui/icons'
import { Box }                  from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Column }               from '@ui/layout'
import { NextLink }             from '@ui/link'
import { Text }                 from '@ui/text'

import { CardLearningMaterial } from './cards'
import { Cards }                from './cards'
import { Info }                 from './info'
import { Sidebar }              from './sidebar'

export const Courses = () => {
  const { formatMessage } = useIntl()
  return (
    <Box
      backgroundColor='background.courses.mainColor'
      width='100%'
      margin='0 auto'
      flexDirection='column'
    >
      <Layout flexBasis={[64, 160]} />

      <Row>
        <Layout flexBasis={[20, 230]} />

        <Column flexBasis={[335, 1610]} flexGrow='1' margin='0 auto'>
          <Row justifyContent='space-between' alignItems='center'>
            <Box flexWrap='wrap'>
              <Text
                color='text.courses.primary'
                fontSize={['regular', 'stupendous']}
                fontWeight='normal'
                lineHeight={['common', 'stupendous']}
                letter='-2%'
              >
                <FormattedMessage id='coursesTitle' />
              </Text>
            </Box>

            <Box display={['none', 'flex']} width={254} height={72} flexShrink='0'>
              <Button
                variant='transparentBackgroundBlackText'
                fill
                gap={24}
                icon={<ArrowRightIcon width={16} height={16} />}
                widthIcon={48}
                heightIcon={48}
                backgroundIcon='background.courses.white'
              >
                <NextLink>
                  <Text fontSize='small' fontWeight='normal' lineHeight='small'>
                    <FormattedMessage id='coursesButton' />
                  </Text>
                </NextLink>
              </Button>
            </Box>
          </Row>

          <Layout flexBasis={[40, 80]} />

          <Divider backgroundColor='divider.secondary' weight='1px' />

          <Layout flexBasis={[40, 80]} />

          <Info />

          <Layout flexBasis={[40, 80]} />

          <Box flexDirection={['column', 'row']}>
            <Cards />

            <Layout flexBasis={[0, 40]} flexShrink='0' />

            <Sidebar />
          </Box>
        </Column>

        <Layout flexBasis={[20, 80]} />
      </Row>

      <Row display={['flex', 'none']} overflow='hidden'>
        <Layout flexBasis={20} flexShrink='0' />

        <CardLearningMaterial
          category={formatMessage({
            id: 'coursesCardLearningMaterial',
          })}
          title={formatMessage({
            id: 'coursesCardLearningMaterialLibraries',
          })}
        />

        <Layout flexBasis={20} flexShrink='0' />

        <CardLearningMaterial
          category={formatMessage({
            id: 'coursesCardLearningMaterial',
          })}
          title={formatMessage({
            id: 'coursesCardLearningMaterialDesign',
          })}
        />
      </Row>

      <Layout flexBasis={[52, 160]} flexShrink='0' />

      <Box display={['flex', 'none']}>
        <Layout flexBasis={20} flexShrink='0' />

        <Box width={254} height={72}>
          <Button
            variant='transparentBackgroundBlackText'
            fill
            gap={24}
            icon={<ArrowRightIcon width={16} height={16} />}
            widthIcon={48}
            heightIcon={48}
            backgroundIcon='background.courses.white'
          >
            <NextLink>
              <Text fontSize='small' fontWeight='normal' lineHeight='small'>
                <FormattedMessage id='coursesButton' />
              </Text>
            </NextLink>
          </Button>
        </Box>
      </Box>

      <Layout flexBasis={[64, 0]} />
    </Box>
  )
}
