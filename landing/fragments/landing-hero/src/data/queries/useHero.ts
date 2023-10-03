import { useQuery } from '@apollo/client'

import { GET_HERO } from './hero.query'

export const useHero = () => useQuery(GET_HERO)
