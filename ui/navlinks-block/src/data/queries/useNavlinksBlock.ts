import { useQuery }          from '@apollo/client'

import { GET_NAVLINKSBLOCK } from './navlinks-block.query'

export const useNavlinksBlock = () => useQuery(GET_NAVLINKSBLOCK)
