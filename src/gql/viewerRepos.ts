import { gql } from '@apollo/client'
import { REPO_INFO } from '@/gql/repoInfo'
import { PAGE_INFO } from '@/gql/pageInfo'

export const VIEWER_REPOS = gql`
  ${REPO_INFO}
  ${PAGE_INFO}
  query ViewerRepos($after: String) {
    viewer {
      repositories(
        after: $after
        first: 10
        orderBy: { field: NAME, direction: DESC }
      ) {
        nodes {
          ...REPO_INFO
        }
        pageInfo {
          ...PAGE_INFO
        }
      }
    }
  }
`