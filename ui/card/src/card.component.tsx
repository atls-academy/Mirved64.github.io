import React              from 'react'
import { FC }             from 'react'

import { Background }     from '@ui/background'
import { Condition }      from '@ui/condition'
import { Image }          from '@ui/image'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { useHover }       from '@ui/utils'
import { useWindowWidth } from '@ui/utils'

import { CardProps }      from './card.interfaces'

export const Card: FC<CardProps> = ({ isMobileOnly = false, ...props }) => {
  const { hover, hoverProps } = useHover()
  const { isMobile } = useWindowWidth()

  return (
    <Box
      {...hoverProps}
      boxShadow={hover ? 'blurBorder' : ''}
      borderRadius={['normal', 'regular']}
      width='100%'
      overflow='hidden'
      position='relative'
    >
      <Background
        display='flex'
        backgroundImage='whiteGhostGradient'
        width='100%'
        borderRadius={['normal', 'regular']}
      >
        <Condition match={!!props.image && !isMobile}>
          <Box position='absolute' top='40px' right='34px'>
            <Image src={props.image} width={360} height={360} />
          </Box>
        </Condition>

        <Layout flexBasis={[16, 40]} flexShrink='0' />

        <Column>
          <Layout flexBasis={[16, 40]} />

          <Box
            flexBasis={{ _: 27, standard: 38, wide: 57 }}
            width={props.widthCategoryBox}
            alignItems='center'
            backgroundColor='background.white'
            borderRadius={{ standard: 'tiny', wide: 'little' }}
            justifyContent='center'
          >
            <Text
              color='text.primary'
              fontSize={{ _: 'subAtom', standard: 'tiny', ultra: 'low' }}
              lineHeight='small'
              textTransform='uppercase'
            >
              {props.category}
            </Text>
          </Box>

          <Layout flexBasis={props.indent} />

          <Condition match={!isMobileOnly}>
            <Box maxWidth={{ _: 303, standard: 496, wide: 556 }}>
              <Text
                color='text.primary'
                fontSize={{ _: 'medium', standard: 'regular', ultra: 'big' }}
                lineHeight='usual'
              >
                {props.titleDesktop}
              </Text>
            </Box>
          </Condition>

          <Condition match={isMobileOnly}>
            <Box maxWidth={228} flexBasis={46}>
              <Text color='text.primary' fontSize='small' lineHeight='usual'>
                {props.titleMobile}
              </Text>
            </Box>
          </Condition>

          <Condition match={!!props.description}>
            <Column flexBasis={[132, 84]}>
              <Layout flexBasis={[12, 16]} />

              <Box maxWidth={{ _: 303, standard: 690, wide: 694 }}>
                <Text
                  color={{
                    _: 'text.primaryTransparentText',
                    standard: 'text.primary',
                    wide: 'text.primaryTransparentText',
                  }}
                  fontSize={{ _: 'tiny', standard: 'small', ultra: 'usual' }}
                  lineHeight={['big', 'huge']}
                >
                  {props.description}
                </Text>
              </Box>
            </Column>
          </Condition>

          <Layout flexBasis={[16, 40]} />
        </Column>

        <Layout flexBasis={[16, 40]} flexShrink='0' />
      </Background>
    </Box>
  )
}
