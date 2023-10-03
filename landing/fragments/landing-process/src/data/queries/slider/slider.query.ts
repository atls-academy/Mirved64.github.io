import { gql } from '@apollo/client'

export const GET_SLIDER = gql`
  query Slider {
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
