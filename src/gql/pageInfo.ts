import { gql } from '@apollo/client'
export const PAGE_INFO = gql`
  fragment PAGE_INFO on PageInfo {
    startCursor
    endCursor
    hasPreviousPage
    hasNextPage
  }
`