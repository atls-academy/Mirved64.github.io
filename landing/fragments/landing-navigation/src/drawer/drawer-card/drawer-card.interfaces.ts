export enum DrawerCardCategory { // eslint-disable-line
  Base = 'базовый',
  Advanced = 'продвинутый',
}

export interface DrawerCardProps {
  id: number
  category: DrawerCardCategory | string
  title: string
  description?: string
}

export interface DrawerCardsProps {
  card: DrawerCardProps
  index: number
  array: DrawerCardProps[]
}
