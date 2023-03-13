import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_GITHUB_TOKEN

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
const cache = new InMemoryCache();

persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

