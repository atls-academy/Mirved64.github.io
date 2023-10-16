import React                from 'react'
import { FC }               from 'react'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { DrawerContainer }  from '@ui/drawer'
import { ArrowUpIcon }      from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { NODE_ID_LIST }     from '../helpers'
import { DrawerCardMobile } from './drawer-card'
import { DrawerProps }      from './drawer.interfaces'
import { useNavigation }    from '../data'

export const DrawerMobile: FC<DrawerProps> = ({ active, onClose }) => {
  const navigation = useNavigation()

  const buttonTitle: string = navigation?.data?.allNavigation.nodes.find(
    (obj) => obj.id === 'cG9zdDoyMjI='
  )?.title

  const getNodeId = (id) => navigation?.data?.courses?.nodes?.find((node) => node.id === id)?.course

  return (
    <DrawerContainer active={active}>
      <Background backgroundColor='white' borderRadius={['normalBottom', 'bigBottom']} width='100%'>
        <Column>
          <Layout flexBasis={20} />

          <Row height={40} alignItems='center'>
            <Layout flexBasis={20} />

            <Box>
              <Logo fill='primary' width={40} height={40} />
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
                  {buttonTitle}
                </Text>
              </Button>
            </Box>

            <Layout flexBasis={20} />
          </Row>

          <Layout flexBasis={78} />

          <Row>
            <Layout flexBasis={20} />

            <Column flexGrow='1'>
              {NODE_ID_LIST?.map((id, index, array) => (
                <DrawerCardMobile card={getNodeId(id)} index={index} array={array} key={id} />
              ))}
            </Column>

            <Layout flexBasis={20} />
          </Row>

          <Layout flexBasis={20} />
        </Column>
      </Background>
    </DrawerContainer>
  )
}
