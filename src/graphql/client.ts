import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
const httpLink = createHttpLink({
  uri: 'http://localhost:8888'
})

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: { fetchPolicy: 'no-cache', errorPolicy: 'ignore' },
    query: { fetchPolicy: 'no-cache', errorPolicy: 'all' }
  }
})
