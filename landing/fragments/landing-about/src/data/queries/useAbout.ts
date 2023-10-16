import { useQuery }  from '@apollo/client'

import { GET_ABOUT } from './about.query'

export const useAbout = () => useQuery(GET_ABOUT)
