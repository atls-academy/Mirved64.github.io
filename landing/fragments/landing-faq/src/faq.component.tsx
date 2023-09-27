import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { Accordion }        from '@ui/accordion'
import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { MailIcon }         from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { Question }         from './data'
import { QuestionModal }    from './question-modal'

export const Faq = () => {
  const { isMobile, isDesktop, isWide, isUltra } = useWindowWidth()

  const [open, setOpen] = useState<boolean>(false)
  const handleModalState = () => setOpen(!open)

  const questions = Array.from({ length: 6 }, () => Question).map((el, index) => ({
    ...el,
    id: index,
  }))

  return (
    <>
      <Row>
        <Layout flexBasis={{ _: 20, standard: 230, ultra: 695 }} flexShrink='0' />

        <Column flexGrow='1'>
          <Layout flexBasis={[80, 160]} />

          <Row alignItems='center'>
            <Box>
              <Text
                color='text.primary'
                fontSize={{
                  _: 'ordinary',
                  standard: 'stupendous',
                  ultra: 'biggest',
                }}
                lineHeight={['huge', 'normal']}
              >
                <FormattedMessage id='faq.title' />
              </Text>
            </Box>

            <Condition match={!isMobile}>
              <Layout flexBasis={20} flexGrow='1' />

              <Box width={{ standard: 247, ultra: 371 }} flexShrink='0'>
                <Condition match={!isUltra}>
                  <Button
                    variant='primaryBackgroundWhiteText'
                    size='hugeSizeRegularRadii'
                    icon={<MailIcon width={16} height={16} />}
                    widthIcon={48}
                    heightIcon={48}
                    backgroundIcon='background.white'
                    radiiIcon='normal'
                    onClick={handleModalState}
                  >
                    <Text color='text.white' fontSize='small' lineHeight='normal'>
                      <FormattedMessage id='faq.button' />
                    </Text>
                  </Button>
                </Condition>

                <Condition match={isUltra}>
                  <Button
                    variant='primaryBackgroundWhiteText'
                    size='massiveSizeLargeRadii'
                    icon={<MailIcon width={24} height={24} />}
                    widthIcon={72}
                    heightIcon={72}
                    backgroundIcon='background.white'
                    radiiIcon='regular'
                    onClick={handleModalState}
                  >
                    <Text color='text.white' fontSize='usual' lineHeight='normal'>
                      <FormattedMessage id='faq.button' />
                    </Text>
                  </Button>
                </Condition>
              </Box>
            </Condition>
          </Row>

          <Layout flexBasis={[60, 80]} />

          <Condition match={isDesktop}>
            <Divider backgroundColor='background.grayGhost' weight={1} />

            <Layout flexBasis={40} />
          </Condition>

          <Condition match={isMobile || isDesktop}>
            {questions.map((item, index, array) => (
              <Column key={item.id}>
                <Condition match={index !== 0}>
                  <Layout flexBasis={[16, 40]} />
                </Condition>

                <Accordion
                  question={item.question}
                  answer={item.answer}
                  isDivider={(index !== array.length - 1 && isMobile) || isDesktop}
                />
              </Column>
            ))}
          </Condition>

          <Condition match={isWide || isUltra}>
            <Row flexWrap='wrap' justifyContent='space-between'>
              {questions.map((item, index) => (
                <Column key={item.id} width={{ wide: 1005, ultra: 1180 }}>
                  <Condition match={index === 0 || index === 1}>
                    <Divider backgroundColor='background.grayGhost' weight={1} />
                  </Condition>

                  <Layout flexBasis={40} />

                  <Accordion
                    question={item.question}
                    answer={item.answer}
                    isDivider={isWide}
                  />
                </Column>
              ))}
            </Row>
          </Condition>

          <Condition match={isMobile}>
            <Layout flexBasis={60} />

            <Box>
              <Button
                variant='primaryBackgroundWhiteText'
                size='bigSizeNormalRadiiSmallPadding'
                icon={<MailIcon width={12} height={10} />}
                widthIcon={32}
                heightIcon={32}
                backgroundIcon='background.white'
                radiiIcon='tiny'
                onClick={handleModalState}
              >
                <Text color='text.white' fontSize='small' lineHeight='small'>
                  <FormattedMessage id='faq.button' />
                </Text>
              </Button>
            </Box>
          </Condition>

          <Layout flexBasis={[80, 160]} />
        </Column>

        <Layout flexBasis={{ _: 20, standard: 80, ultra: 545 }} flexShrink='0' />
      </Row>
      <QuestionModal open={open} setOpen={handleModalState} />
    </>
  )
}
