import React from 'react'

const App = ({ Component, pageProps, ...props }) => {
  return <Component {...pageProps} {...props} />
}

export default App
