import { gql } from '@apollo/client'

export const GET_PROCESS = gql`
  query Process {
    section(id: "cG9zdDoyMzA=") {
      content
      sections {
        title
      }
    }
    slides {
      nodes {
        slider {
          text
          imageDesktop {
            sourceUrl
          }
          imageMobile {
            sourceUrl
          }
        }
      }
    }
  }
`
