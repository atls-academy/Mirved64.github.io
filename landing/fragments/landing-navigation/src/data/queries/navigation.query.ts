import { gql } from '@apollo/client'

export const GET_NAVIGATION = gql`
  query Navigation {
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
    courses {
      nodes {
        id
        course {
          label {
            ... on Label {
              title
              labelId
            }
          }
          title
        }
      }
    }
  }
`
