import { gql } from '@apollo/client'
export const REPO_INFO = gql`
  fragment REPO_INFO on Repository {
    id
    stargazerCount
    url
    nameWithOwner
    pushedAt
  }
`