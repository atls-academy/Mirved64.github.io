import { useQuery }  from '@apollo/client'

import { GET_STEPS } from './steps.query'

export const useSteps = () => useQuery(GET_STEPS)
