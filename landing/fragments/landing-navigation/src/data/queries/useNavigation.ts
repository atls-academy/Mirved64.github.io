import { useQuery }       from '@apollo/client'

import { GET_NAVIGATION } from './navigation.query'

export const useNavigation = () => useQuery(GET_NAVIGATION)
