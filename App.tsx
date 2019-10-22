import React from 'react';
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

import Navigator from './Navigator'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://api.yelp.com/v3/graphql',
});

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