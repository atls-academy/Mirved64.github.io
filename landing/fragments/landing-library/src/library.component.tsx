import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Divider }          from '@ui/divider'
import { SearchIcon }       from '@ui/icons'
import { Input }            from '@ui/input'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useFocus }         from '@ui/utils'
import { useHover }         from '@ui/utils'

import { SearchButton }     from './search'

export const LibraryBanner = () => {
  const { hover, hoverProps } = useHover()
  const { focus, focusProps } = useFocus()
  const intl = useIntl()
  const [searchQuery, setSearchQuery] = useState('')

  const Indent = () => <Layout flexBasis={{ standard: 48, ultra: 72 }} />

  const getColor = (): string => {
    if (hover) return 'darkPurpleTransparent'
    if (focus) return 'darkestPurple'
    if (searchQuery) return 'darkestPurple'
    return 'gray'
  }

  return (
    <Box display={{ standard: 'flex' }} flexGrow='1'>
      <Layout flexBasis={{ standard: 230, ultra: 620 }} flexShrink='0' />

      <Column flexGrow='1' flexShrink={{ wide: 0 }}>
        <Layout flexBasis={{ standard: 200, wide: 256, ultra: 428 }} />

        <Box width={{ standard: 1460, wide: 1987, ultra: 2920 }}>
          <Text
            color='text.white'
            fontSize={{ standard: 'stupendous', ultra: 'biggest' }}
            lineHeight='normal'
          >
            <FormattedMessage id='library.title' />
          </Text>
        </Box>

        <Indent />

        <Divider backgroundColor='background.ghost' weight={1} />

        <Indent />

        <Box maxWidth={{ standard: '600px', wide: 640, ultra: 960 }}>
          <Text
            color='text.white'
            fontSize={{ standard: 'medium', ultra: 'usual' }}
            lineHeight='huge'
          >
            <FormattedMessage id='library.text' />
          </Text>
        </Box>

        <Indent />

        <Box maxWidth={[335, 600]} {...hoverProps} {...focusProps}>
          <Input
            value={searchQuery}
            onChange={setSearchQuery}
            variant='search'
            size='normalSizeNormalRadii'
            icon={<SearchIcon width={20} height={20} color={getColor()} />}
            widthIcon={20}
            heightIcon={20}
            filled={searchQuery}
            addon={searchQuery ? <SearchButton /> : null}
            placeholder={intl.formatMessage({ id: 'library.search.placeholder' })}
            color={getColor()}
          />
        </Box>

        <Layout flexBasis={240} />
      </Column>

      <Layout flexBasis={{ standard: 230, ultra: 620 }} flexShrink='0' />
    </Box>
  )
}
