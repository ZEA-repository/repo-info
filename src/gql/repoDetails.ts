import { gql } from '@apollo/client'
export const REPO_DETAILS = gql`
  query RepoDetails($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      nameWithOwner
      stargazerCount
      pushedAt
      owner {
        avatarUrl
        login
        url
      }
      languages(first: 10) {
        nodes {
          name
          color
          id
        }
      }
      description
    }
  }
`