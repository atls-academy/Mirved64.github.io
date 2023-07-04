import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

import { LOCALES }       from '../i18n/locales'
import { messages }      from '../i18n/messages'

const App = ({ Component, pageProps, ...props }) => {
  const locale = LOCALES.RUSSIAN

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.RUSSIAN}>
      <ThemeProvider>
        <Component {...pageProps} {...props} />
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
