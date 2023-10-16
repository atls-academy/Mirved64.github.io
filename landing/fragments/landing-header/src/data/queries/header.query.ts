import { gql } from '@apollo/client'

export const GET_HEADER = gql`
  query Header {
    allNavigation {
      nodes {
        id
        title
      }
    }
    courseBy(id: "cG9zdDoxNTY=") {
      course {
        title
        description
        label {
          ... on Label {
            title
          }
        }
      }
    }
  }
`
