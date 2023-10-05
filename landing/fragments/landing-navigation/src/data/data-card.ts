export enum DrawerCardType { // eslint-disable-line
  Base = 'Base',
  Advanced = 'Advanced',
}

interface CardProp {
  id: number
  type: DrawerCardType
  label: string
  title: string
}

export const CardDataMobile: CardProp[] = [
  {
    id: 0,
    type: DrawerCardType.Base,
    label: 'базовый',
    title: 'Frontend Engineer',
  },
  {
    id: 1,
    type: DrawerCardType.Advanced,
    label: 'продвинутый',
    title: 'Frontend Engineer',
  },
  {
    id: 2,
    type: DrawerCardType.Base,
    label: 'базовый',
    title: 'Backend Engineer',
  },
]
