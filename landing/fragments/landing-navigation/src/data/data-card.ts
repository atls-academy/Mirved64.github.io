enum DrawerCardType { // eslint-disable-line
  Base = 'Base',
  Advanced = 'Advanced',
  Training = 'Training',
}

interface CardProp {
  id: number
  type: DrawerCardType
  category: string
  title: string
  description?: string
}

export const CardDataDesktop: CardProp = {
  id: 0,
  type: DrawerCardType.Training,
  category: 'обучение',
  title: 'Frontend Engineer',
  description:
    'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
}
export const CardDataMobile: CardProp[] = [
  {
    id: 0,
    type: DrawerCardType.Base,
    category: 'базовый',
    title: 'Frontend Engineer',
  },
  {
    id: 1,
    type: DrawerCardType.Advanced,
    category: 'продвинутый',
    title: 'Frontend Engineer',
  },
  {
    id: 2,
    type: DrawerCardType.Base,
    category: 'базовый',
    title: 'Backend Engineer',
  },
]
