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
import { useActive }        from '@ui/utils'
import { useHover }         from '@ui/utils'

export const LibraryBanner = () => {
  const { hover, hoverProps } = useHover()
  const { active, activeProps } = useActive()
  const intl = useIntl()
  const [searchQuery, setSearchQuery] = useState('')

  const searcButton = (
    <Box width={102}>
      <Button variant='navyBackgroundWhiteText' size='smallSizeCompactRadii'>
        <Text color='text.white' fontSize='little' lineHeight='little'>
          <FormattedMessage id='library.search-button' />
        </Text>
      </Button>
    </Box>
  )

  const getColor = () => {
    if (hover) return 'darkPurpurTransparent'
    if (active) return 'darkestPurpur'
    return 'gray'
  }

  return (
    <Row>
      <Layout flexBasis={[20, 230]} flexShrink='0' />

      <Column flexGrow='1'>
        <Layout flexBasis={[100, 200]} />

        <Box>
          <Text
            color='text.white'
            fontSize={['normal', 'stupendous']}
            lineHeight={['ordinary', 'massive']}
          >
            <FormattedMessage id='library.title' />
          </Text>
        </Box>

        <Layout flexBasis={[24, 48]} />

        <Divider backgroundColor='divider.ghost' weight={1} />

        <Layout flexBasis={[24, 48]} />

        <Box maxWidth={['100%', '600px']}>
          <Text color='text.white' fontSize={['tiny', 'medium']} lineHeight={['compact', 'usual']}>
            <FormattedMessage id='library.text' />
          </Text>
        </Box>

        <Layout flexBasis={[24, 48]} />

        <Box maxWidth={[335, 600]}>
          <Input
            value={searchQuery}
            onChange={setSearchQuery}
            variant='search'
            size='normalSizeNormallRadii'
            icon={<SearchIcon width={20} height={20} color={getColor()} />}
            widthIcon={20}
            heightIcon={20}
            addon={searchQuery ? searcButton : null}
            placeholder={intl.formatMessage({ id: 'library.search.placeholder' })}
            {...hoverProps}
            {...activeProps}
            color={getColor()}
          />
        </Box>

        <Layout flexBasis={[100, 240]} />
      </Column>

      <Layout flexBasis={[20, 230]} flexShrink='0' />
    </Row>
  )
}
