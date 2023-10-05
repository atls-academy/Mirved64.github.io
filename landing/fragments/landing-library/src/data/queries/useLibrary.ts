import { useQuery }    from '@apollo/client'

import { GET_LIBRARY } from './library.query'

export const useLibrary = () => useQuery(GET_LIBRARY)
