import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';


const createClient = () => {

  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("accessToken");
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

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  })
}
export default createClient