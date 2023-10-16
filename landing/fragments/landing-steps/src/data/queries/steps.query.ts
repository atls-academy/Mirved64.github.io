import { gql } from '@apollo/client'

export const GET_STEPS = gql`
  query Steps {
    processes {
      nodes {
        process {
          description
          title
        }
        processId
      }
    }
  }
`
