import { useQuery }         from '@apollo/client'

import { GET_TECHNOLOGIES } from './technologies.query'

export const useTechnogies = () => useQuery(GET_TECHNOLOGIES)
