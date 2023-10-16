import { useQuery }    from '@apollo/client'

import { GET_PROCESS } from './process.query'

export const useProcess = () => useQuery(GET_PROCESS)
