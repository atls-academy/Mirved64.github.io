import React               from 'react'
import { FC }              from 'react'

import { Condition }       from '@ui/condition/src'
import { ArrowRightIcon }  from '@ui/icons/src'
import { Box }             from '@ui/layout/src'
import { Column }          from '@ui/layout/src'
import { Layout }          from '@ui/layout/src'
import { Row }             from '@ui/layout/src'
import { Text }            from '@ui/text/src'
import { useWindowWidth }  from '@ui/utils/src'
import { useHover }        from '@ui/utils/src'
import { useActive }       from '@ui/utils/src'

import { CardKeys }        from './card.interfaces'
import { changeColorText } from '../../helpers'
import { changeColorIcon } from '../../helpers'

export const Card: FC<CardKeys> = ({ title, technologiesList, description }) => {
  const { isMobile } = useWindowWidth()
  const { hover, hoverProps } = useHover()
  const { active, activeProps } = useActive()

  return (
    <Box alignItems='center' {...hoverProps} {...activeProps} cursor='pointer'>
      <Column maxWidth={['100%', 785]}>
        <Box>
          <Text
            color={changeColorText(hover, active)}
            fontSize={['regular', 'giant']}
            lineHeight={['standard', 'small']}
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
                  padding='tinyYopSmallX'
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
          <ArrowRightIcon width={21} height={42} color={changeColorIcon(hover, active)} />
        </Box>
      </Condition>
    </Box>
  )
}
