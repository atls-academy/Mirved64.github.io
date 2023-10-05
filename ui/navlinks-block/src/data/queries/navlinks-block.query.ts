import { gql } from '@apollo/client'

export const GET_NAVLINKSBLOCK = gql`
  query NavLinksBlock {
    allNavigation {
      nodes {
        id
        title
      }
    }
  }
`
