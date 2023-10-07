import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

export const getClient = () =>
  new ApolloClient({
    uri: process.env.GQL_URI,
    cache: new InMemoryCache(),
  })
