import { gql } from '@apollo/client'

export const GET_FORM = gql`
  query Form {
    allForms {
      nodes {
        forms {
          text
        }
      }
    }
  }
`
