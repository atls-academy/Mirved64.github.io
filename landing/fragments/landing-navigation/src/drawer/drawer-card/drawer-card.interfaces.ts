export interface DrawerCardProps {
  id: number
  category: string
  title: string
  description?: string
}

export interface DrawerCardsProps {
  card: DrawerCardProps
  index: number
  array: DrawerCardProps[]
}
