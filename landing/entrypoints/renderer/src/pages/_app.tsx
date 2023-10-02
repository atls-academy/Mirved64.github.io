import * as messages        from '../../locales/ru.json'

import { ApolloProvider }   from '@apollo/client'

import React                from 'react'
import { IntlProvider }     from 'react-intl'
import { ParallaxProvider } from 'react-scroll-parallax'

import { ThemeProvider }    from '@ui/theme'
import { getClient }        from '@globals/data'

const App = ({ Component, pageProps, ...props }) => {
  const client = getClient()

  return (
    <ApolloProvider client={client}>
      <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
        <ThemeProvider>
          <ParallaxProvider>
            <Component {...pageProps} {...props} />
          </ParallaxProvider>
        </ThemeProvider>
      </IntlProvider>
    </ApolloProvider>
  )
}

export default App
