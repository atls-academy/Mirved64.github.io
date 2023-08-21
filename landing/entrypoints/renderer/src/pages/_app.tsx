import * as messages        from '../../locales/ru.json'

import React                from 'react'
import { IntlProvider }     from 'react-intl'
import { ParallaxProvider } from 'react-scroll-parallax'

import { ThemeProvider }    from '@ui/theme'

const App = ({ Component, pageProps, ...props }) => (
  <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
    <ThemeProvider>
      <ParallaxProvider>
        <Component {...pageProps} {...props} />
      </ParallaxProvider>
    </ThemeProvider>
  </IntlProvider>
)

export default App
