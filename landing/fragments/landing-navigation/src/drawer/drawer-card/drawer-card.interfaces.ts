import { DrawerCardType } from '../../data'

export interface DrawerCardProps {
  id: number
  type?: DrawerCardType
  label: { title: string } | string
  title: string
  description?: string
}

export interface DrawerCardsProps {
  card: DrawerCardProps
  index: number
  array: DrawerCardProps[]
}
