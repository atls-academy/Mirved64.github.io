import { gql } from '@apollo/client'

export const GET_ABOUT = gql`
  query About {
    section(id: "cG9zdDoyMjY=") {
      content
    }
  }
`
