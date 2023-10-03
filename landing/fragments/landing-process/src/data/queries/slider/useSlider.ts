import { useQuery }   from '@apollo/client'

import { GET_SLIDER } from './slider.query'

export const useSlider = () => useQuery(GET_SLIDER)
