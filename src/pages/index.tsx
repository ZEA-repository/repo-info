import { Search } from '@/components/Search'
import { RepoTable } from '@/components/RepoTable'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { SEARCH_REPOS } from '@/gql/searchRepos'
import { VIEWER_REPOS } from '@/gql/viewerRepos'
import { useStore } from '@/hooks/useStore'
import { observer } from 'mobx-react-lite'

export const HomePage = observer(() => {
  const {
    rootStore: { AuthStore },
  } = useStore()
  const [params, setParams] = useSearchParams()
  const query = params.get('query')
  if (!AuthStore.token) return <p>Please, login via Github</p>
  return (
    <section>
      <Search
        initialValue={query || ''}
        onSubmit={(query) => setParams(query ? { query } : {})}
      />
      <SearchResults />
    </section>
  )
})

const SearchResults: React.FC = observer(() => {
  const [params, setParams] = useSearchParams()
  const query = params.get('query')
  const after = params.get('after')
  const { loading, error, data, pageInfo } = fetchData(query, after)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <>
      <RepoTable data={data} />
      <div className='mt16'>
        <button
          disabled={!pageInfo.hasPreviousPage}
          onClick={() => {
            window.history.back()
          }}
        >
          Previous page
        </button>
        <button
          disabled={!pageInfo.hasNextPage}
          onClick={() => {
            setParams({
              ...Object.fromEntries(params),
              after: pageInfo.endCursor,
            })
          }}
        >
          Next page
        </button>
      </div>
    </>
  )
})

const fetchData = (query: string | null, after?: string | null) => {
  if (!query) {
    const { loading, error, data } = useQuery(VIEWER_REPOS, {
      variables: { after },
    })
    return {
      loading,
      error,
      data: data?.viewer?.repositories?.nodes,
      pageInfo: data?.viewer?.repositories?.pageInfo,
    }
  }
  const { loading, error, data } = useQuery(SEARCH_REPOS, {
    variables: {
      query: `${query} sort:stars-desc`,
      after,
    },
  })

  return {
    loading,
    error,
    data: data?.search?.nodes,
    pageInfo: data?.search?.pageInfo,
  }
}
