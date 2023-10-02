import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

export const getClient = () =>
  new ApolloClient({
    uri: 'https://wp.api.atls.academy/graphql',
    cache: new InMemoryCache(),
  })
