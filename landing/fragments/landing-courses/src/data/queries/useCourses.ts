import { useQuery }    from '@apollo/client'

import { GET_COURSES } from './courses.query'

export const useCourses = () => useQuery(GET_COURSES)
