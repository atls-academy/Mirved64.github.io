interface CardProp {
  id: number
  category: string
  title: string
  description?: string
}

export const CardDataDesktop: CardProp = {
  id: 0,
  category: 'обучение',
  title: 'Frontend Engineer',
  description:
    'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
}
export const CardDataMobile: CardProp[] = [
  {
    id: 0,
    category: 'базовый',
    title: 'Frontend Engineer',
  },
  {
    id: 1,
    category: 'продвинутый',
    title: 'Frontend Engineer',
  },
  {
    id: 2,
    category: 'базовый',
    title: 'Backend Engineer',
  },
]
