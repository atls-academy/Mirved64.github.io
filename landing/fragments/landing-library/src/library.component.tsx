import React                     from 'react'
import { useState }              from 'react'

import { Divider }               from '@ui/divider'
import { SearchIcon }            from '@ui/icons'
import { Input }                 from '@ui/input'
import { Box }                   from '@ui/layout'
import { Column }                from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Text }                  from '@ui/text'
import { useFocus }              from '@ui/utils'
import { useHover }              from '@ui/utils'

import { SearchButton }          from './search'
import { useLibrary }            from './data'
import { changeColorSearchIcon } from './helpers'
import { changeColorSearchText } from './helpers'

export const LibraryBanner = () => {
  const { hover, hoverProps } = useHover()
  const { focus, focusProps } = useFocus()

  const [searchQuery, setSearchQuery] = useState<string>('')

  const library = useLibrary()

  const title: string = library?.data?.sectionBy?.sections?.title
  const about: string = library?.data?.sectionBy?.content?.split('\n')[1]
  const search: string = library?.data?.sectionBy?.content?.split('\n')[5]

  return (
    <Box flexGrow='1'>
      <Layout flexBasis={{ _: 20, standard: 230, ultra: 620 }} flexShrink='0' />

      <Column flexGrow='1' flexShrink={{ wide: 0 }}>
        <Layout flexBasis={{ _: 100, standard: 200, wide: 256, ultra: 428 }} />

        <Box width={{ _: 225, standard: 1460, wide: 1987, ultra: 2920 }}>
          <Text
            color='text.white'
            fontSize={{ _: 'normal', standard: 'stupendous', ultra: 'biggest' }}
            lineHeight={{ _: 'huge', standard: 'normal' }}
          >
            {title}
          </Text>
        </Box>

        <Layout flexBasis={{ _: 24, standard: 48, ultra: 72 }} />

        <Divider backgroundColor='background.ghost' weight={1} />

        <Layout flexBasis={{ _: 24, standard: 48, ultra: 72 }} />

        <Box maxWidth={{ _: '100%', standard: 600, wide: 640, ultra: 960 }}>
          <Text
            color='text.white'
            fontSize={{ _: 'tiny', standard: 'medium', ultra: 'usual' }}
            lineHeight='huge'
          >
            {about}
          </Text>
        </Box>

        <Layout flexBasis={{ _: 24, standard: 48, ultra: 72 }} />

        <Box maxWidth={[335, 600]} {...hoverProps} {...focusProps}>
          <Input
            value={searchQuery}
            onChange={setSearchQuery}
            variant='search'
            size='normalSizeNormalRadii'
            icon={
              <SearchIcon
                width={20}
                height={20}
                color={colorSearchIcon(hover, focus, searchQuery)}
              />
            }
            widthIcon={20}
            heightIcon={20}
            filled={searchQuery}
            addon={searchQuery ? <SearchButton /> : null}
            placeholder={search}
            color={changeColorSearchText(hover, focus, searchQuery)}
          />
        </Box>

        <Layout flexBasis={{ _: 100, standard: 240 }} />
      </Column>

      <Layout flexBasis={{ _: 20, standard: 230, ultra: 620 }} flexShrink='0' />
    </Box>
  )
}
