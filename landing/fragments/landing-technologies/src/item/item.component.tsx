import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { TechnologyProps }  from './item.interfaces'

export const Item: FC<TechnologyProps> = ({ technologyName, divider, font = 'primary' }) => (
  <Layout flexShrink='0' flexGrow='1'>
    <Layout flexShrink='0'>
      <Text
        color='text.process.primary'
        fontSize={['huge', 'massive']}
        fontWeight='lighter'
        fontFamily={font}
        lineHeight={['mean', 'giant']}
        whiteSpace='nowrap'
        textTransform='uppercase'
      >
        <FormattedMessage id={technologyName} />
      </Text>
    </Layout>

    <Layout flexBasis={24} flexShrink='0' />

    <Layout width='48px' flexShrink='0'>
      <Divider backgroundColor='divider.primary' weight={divider} margin='auto 0' />
    </Layout>

    <Layout flexBasis={24} flexShrink='0' />
  </Layout>
)
