import React              from 'react'
import { FC }             from 'react'

import { Condition }      from '@ui/condition'
import { ArrowRightIcon } from '@ui/icons'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'
import { useWindowWidth } from '@ui/utils'
import { useHover }       from '@ui/utils'
import { useActive }      from '@ui/utils'

import { CardKeys }       from './card.interfaces'

export const Card: FC<CardKeys> = ({ title, technologiesList, description }: CardKeys) => {
  const { isMobile } = useWindowWidth()
  const { hover, hoverProps } = useHover()
  const { active, activeProps } = useActive()

  const getColor = (): string => {
    if (hover) return 'accentPurpur'
    if (active) return 'ghostPurpur'
    return 'darkPurpur'
  }

  return (
    <Box alignItems='center' {...hoverProps} {...activeProps} cursor='pointer'>
      <Column maxWidth={['100%', 785]}>
        <Box>
          <Text
            color={getColor()}
            fontSize={['regular', 'giant']}
            lineHeight={['standart', 'small']}
          >
            {title}
          </Text>
        </Box>

        <Layout flexBasis={20} />

        <Row maxWidth={[335, 600]} flexWrap='wrap'>
          {technologiesList.map((technology, index, array) => (
            <Column key={technology}>
              <Row>
                <Box
                  height={32}
                  alignItems='center'
                  borderRadius='tiny'
                  border='thinnestPrimaryTransparent'
                  maxWidth={103}
                  padding='10px 12px 10px 12px'
                >
                  <Text
                    color='text.primaryText'
                    fontSize='atom'
                    lineHeight='small'
                    textTransform='uppercase'
                  >
                    {technology}
                  </Text>
                </Box>

                <Condition match={index !== array.length - 1}>
                  <Layout width={10} />
                </Condition>
              </Row>

              <Layout flexBasis={12} />
            </Column>
          ))}
        </Row>

        <Layout flexBasis={8} />

        <Box>
          <Text color='text.primaryTransparent' fontSize='little' lineHeight='big'>
            {description}
          </Text>
        </Box>
      </Column>

      <Condition match={!isMobile}>
        <Layout flexBasis={20} flexGrow='1' />

        <Box width={56} height={56} justifyContent='center' alignItems='center'>
          <ArrowRightIcon width={21} height={42} color={getColor()} />
        </Box>
      </Condition>
    </Box>
  )
}
