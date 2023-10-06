import { gql } from '@apollo/client'

export const GET_FAQ = gql`
  query Faq {
    allFAQ {
      nodes {
        faq {
          question
          answer
        }
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
    allForms {
      nodes {
        forms {
          text
        }
      }
    }
  }
`
