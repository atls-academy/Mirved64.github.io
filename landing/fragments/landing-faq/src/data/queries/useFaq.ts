import { useQuery } from '@apollo/client'

import { GET_FAQ }  from './faq.query'

export const useFaq = () => useQuery(GET_FAQ)
