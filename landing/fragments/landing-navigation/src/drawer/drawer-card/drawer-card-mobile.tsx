import React                  from 'react'
import { FC }                 from 'react'

import { Condition }          from '@ui/condition'
import { Divider }            from '@ui/divider'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Text }               from '@ui/text'

import { DrawerCardCategory } from './drawer-card.interfaces'
import { DrawerCardsProps }   from './drawer-card.interfaces'

export const DrawerCardMobile: FC<DrawerCardsProps> = ({ card, index, array }) => (
  <Column>
    <Box
      width={card.category === DrawerCardCategory.Base ? 87 : 122}
      height={32}
      border='thinnestPrimary'
      borderRadius='tiny'
      justifyContent='center'
      alignItems='center'
    >
      <Text color='text.primaryText' fontSize='atom' lineHeight='small' textTransform='uppercase'>
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

      <Divider backgroundColor='background.primaryTransparent' weight={1} width='100%' />

      <Layout flexBasis={20} />
    </Condition>
  </Column>
)
