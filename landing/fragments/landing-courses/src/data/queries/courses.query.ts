import { gql } from '@apollo/client'

export const GET_COURSES = gql`
  query Courses {
    sectionBy(id: "cG9zdDoyMjc=") {
      content
      sections {
        title
      }
    }
    courses {
      nodes {
        id
        course {
          title
          description
          image {
            sourceUrl
          }
          label {
            ... on Label {
              title
              labelId
            }
          }
        }
      }
    }
    courseBy(id: "cG9zdDoyNzk=") {
      content
      course {
        title
        description
      }
    }
    navigationBy(id: "cG9zdDoyODM=") {
      navigation {
        linkName
      }
      title
    }
    allNavigation {
      nodes {
        id
        title
      }
    }
  }
`
