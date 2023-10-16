import { useQuery }   from '@apollo/client'

import { GET_HEADER } from './header.query'

export const useHeader = () => useQuery(GET_HEADER)
