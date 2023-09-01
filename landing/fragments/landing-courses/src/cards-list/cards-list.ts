interface CardProps {
  id: number
  isMobileOnly?: boolean
  category: string
  title: string
  descriptionMobile?: string
  descriptionDesktop?: string
}

export const CadrsList: CardProps[] = [
  {
    id: 0,
    isMobileOnly: false,
    category: 'обучение',
    title: 'Frontend Engineer',
    descriptionMobile:
      'Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
    descriptionDesktop:
      'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
  },
  {
    id: 1,
    isMobileOnly: false,
    category: 'мини-курс',
    title: 'Основы разработки',
    descriptionMobile:
      'Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
    descriptionDesktop:
      'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
  },
  {
    id: 2,
    isMobileOnly: false,
    category: 'учебный материал',
    title: 'Как использовать библиотеки',
  },
  {
    id: 3,
    isMobileOnly: false,
    category: 'учебный материал',
    title: 'Дизайн, Figma, Математика',
  },
  {
    id: 4,
    isMobileOnly: true,
    category: 'учебный материал',
    title: 'Как использовать библиотеки',
  },
  {
    id: 5,
    isMobileOnly: true,
    category: 'учебный материал',
    title: 'Дизайн, Figma, Математика',
  },
]
