import { gql } from '@apollo/client'
import { REPO_INFO } from '@/gql/repoInfo'
import { PAGE_INFO } from '@/gql/pageInfo'

export const SEARCH_REPOS = gql`
  ${REPO_INFO}
  ${PAGE_INFO}
  query SearchRepos($query: String!, $after: String) {
    search(query: $query, type: REPOSITORY, first: 10, after: $after) {
      nodes {
        ...REPO_INFO
      }
      pageInfo {
        ...PAGE_INFO
      }
    }
  }
`