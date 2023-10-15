export enum DrawerCardType { // eslint-disable-line
  Base = 'Base',
  Advanced = 'Advanced',
  Training = 'Training',
}

export interface DrawerCardProps {
  id: number
  type: DrawerCardType
  category: string
  title: string
  description?: string
}

export interface DrawerCardsProps {
  card: DrawerCardProps
  index: number
  array: DrawerCardProps[]
}
