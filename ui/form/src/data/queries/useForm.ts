import { useQuery } from '@apollo/client'

import { GET_FORM } from './form.query'

export const useForm = () => useQuery(GET_FORM)
