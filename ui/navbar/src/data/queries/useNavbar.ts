import { useQuery }   from '@apollo/client'

import { GET_NAVBAR } from './navbar.query'

export const useNavBar = () => useQuery(GET_NAVBAR)
