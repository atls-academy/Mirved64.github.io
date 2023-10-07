import { gql } from '@apollo/client'

export const GET_FAQ = gql`
  query Faq {
    allFAQ {
      nodes {
        faq {
          question
          answer
        }
        id
      }
    }
    section(id: "cG9zdDoyMzE=") {
      sections {
        title
      }
    }
    navigationBy(id: "cG9zdDoyODQ=") {
      title
    }
  }
`
