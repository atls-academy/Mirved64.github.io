import { gql } from '@apollo/client'

export const GET_HERO = gql`
  query Hero {
    section(id: "cG9zdDoyMjY=") {
      content
      sections {
        title
      }
    }
  }
`
