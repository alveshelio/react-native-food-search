import React from 'react';
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

import Navigator from './Navigator'

const cache = new InMemoryCache()
const link = createHttpLink({
  uri: 'https://api.yelp.com/v3/graphql',
  headers: {
    'Content-Type': 'application/graphql'
  }
});

const authLink = setContext((_, { headers }) => {
  const token = 'abcd'
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''

    }
  }
})

const client = new ApolloClient({
  cache,
  link
})
const App = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
)

export default App