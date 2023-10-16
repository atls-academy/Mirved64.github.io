import { ApolloProvider }   from '@apollo/client'

import React                from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import { ThemeProvider }    from '@ui/theme'
import { getClient }        from '@globals/data'

const App = ({ Component, pageProps, ...props }) => {
  const client = getClient()

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <ParallaxProvider>
          <Component {...pageProps} {...props} />
        </ParallaxProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
