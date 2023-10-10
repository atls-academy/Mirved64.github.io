import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

export const getClient = () =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_ENV_LOCAL_GQL_URI ?? 'https://wp.api.atls.academy/graphql',
    cache: new InMemoryCache(),
  })
