import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { DrawerContainer }  from '@ui/drawer'
import { ArrowUpIcon }      from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { CardDataMobile }   from '../data'
import { DrawerProps }      from './drawer.interfaces'

export const DrawerMobile: FC<DrawerProps> = ({ active, onClose }: DrawerProps) => (
  <DrawerContainer active={active}>
    <Background backgroundColor='white' borderRadius={['normalBottom', 'bigBottom']} width='100%'>
      <Column>
        <Layout flexBasis={20} />

        <Row height={40} alignItems='center'>
          <Layout flexBasis={20} />

          <Box>
            <Logo fill='rgba(58, 55, 93, 1)' width={40} height={40} />
          </Box>

          <Layout flexBasis={195} flexGrow='1' flexShrink='10' />

          <Box width={100}>
            <Button
              onClick={onClose}
              variant='primaryBackgroundWhiteText'
              size='smallSizeLittleRadii'
              icon={<ArrowUpIcon width={9} height={5} />}
              widthIcon={28}
              heightIcon={28}
              backgroundIcon='background.white'
              radiiIcon='atom'
            >
              <Text color='white' fontSize='tiny' fontWeight='normal' lineHeight='small'>
                <FormattedMessage id='navigation.button' />
              </Text>
            </Button>
          </Box>

          <Layout flexBasis={20} />
        </Row>

        <Layout flexBasis={78} />

        <Row>
          <Layout flexBasis={20} />

          <Column flexGrow='1'>
            {CardDataMobile.map((card, index, array) => (
              <Column key={card.id}>
                <Box
                  width={card.category === 'базовый' ? 87 : 122}
                  height={32}
                  border='thinnestPrimary'
                  borderRadius='tiny'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Text
                    color='text.primaryText'
                    fontSize='atom'
                    lineHeight='small'
                    textTransform='uppercase'
                  >
                    {card.category}
                  </Text>
                </Box>

                <Layout flexBasis={8} />

                <Box>
                  <Text color='text.primaryText' fontSize='ordinary' lineHeight='huge'>
                    {card.title}
                  </Text>
                </Box>

                <Condition match={index < array.length - 1}>
                  <Layout flexBasis={20} />

                  <Divider
                    backgroundColor='background.primaryTransparent'
                    weight={1}
                    width='100%'
                  />

                  <Layout flexBasis={20} />
                </Condition>
              </Column>
            ))}
          </Column>

          <Layout flexBasis={20} />
        </Row>

        <Layout flexBasis={20} />
      </Column>
    </Background>
  </DrawerContainer>
)
