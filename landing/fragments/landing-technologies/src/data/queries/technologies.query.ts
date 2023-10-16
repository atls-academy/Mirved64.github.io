import { gql } from '@apollo/client'

export const GET_TECHNOLOGIES = gql`
  query Technologies {
    skills {
      nodes {
        title
        skillId
      }
    }
  }
`
