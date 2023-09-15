import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { SearchIcon }       from '@ui/icons'
import { Input }            from '@ui/input'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useFocus }         from '@ui/utils'
import { useHover }         from '@ui/utils'

export const LibraryBanner = () => {
  const { hover, hoverProps } = useHover()
  const { focus, focusProps } = useFocus()
  const intl = useIntl()
  const [searchQuery, setSearchQuery] = useState('')

  const searchButton = (
    <Box width={172}>
      <Button variant='navyBackgroundWhiteText' size='usualSizeCompactRadii'>
        <Text color='text.white' fontSize='little' lineHeight='usual'>
          <FormattedMessage id='library.search-button' />
        </Text>
      </Button>
    </Box>
  )

  const getColor = (): string => {
    if (hover) return 'darkPurpleTransparent'
    if (focus) return 'darkestPurple'
    if (searchQuery) return 'darkestPurple'
    return 'gray'
  }

  return (
    <Row display={{ _: 'flex', standard: 'none' }}>
      <Layout flexBasis={20} flexShrink='0' />

      <Column flexGrow='1'>
        <Layout flexBasis={100} />

        <Box maxWidth={225}>
          <Text color='text.white' fontSize='normal' lineHeight='huge'>
            <FormattedMessage id='library.title' />
          </Text>
        </Box>

        <Layout flexBasis={24} />

        <Divider backgroundColor='background.ghost' weight={1} />

        <Layout flexBasis={24} />

        <Box maxWidth='100%'>
          <Text color='text.white' fontSize='tiny' lineHeight='huge'>
            <FormattedMessage id='library.text' />
          </Text>
        </Box>

        <Layout flexBasis={24} />

        <Box maxWidth={335} {...hoverProps} {...focusProps}>
          <Input
            value={searchQuery}
            onChange={setSearchQuery}
            variant='search'
            size='normalSizeNormalRadii'
            icon={<SearchIcon width={20} height={20} color={getColor()} />}
            widthIcon={20}
            heightIcon={20}
            filled={searchQuery}
            addon={searchQuery ? searchButton : null}
            placeholder={intl.formatMessage({ id: 'library.search.placeholder' })}
            color={getColor()}
          />
        </Box>

        <Layout flexBasis={100} />
      </Column>

      <Layout flexBasis={20} flexShrink='0' />
    </Row>
  )
}
