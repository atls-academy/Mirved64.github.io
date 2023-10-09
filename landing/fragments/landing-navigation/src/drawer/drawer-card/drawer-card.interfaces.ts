export interface DrawerCardProps {
  id: number
  label: { title: string } | { title: string; labelId: number }
  title: string
  description?: string
}

export interface DrawerCardsProps {
  card: DrawerCardProps
  index: number
  array: DrawerCardProps[] | string[]
}
