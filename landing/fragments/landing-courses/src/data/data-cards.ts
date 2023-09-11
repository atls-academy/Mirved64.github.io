export enum CardCategory { // eslint-disable-line
  Teach = 'обучение',
  MiniCourse = 'мини-курс',
  EducationalMaterial = 'учебный материал',
}

interface CardProps {
  id: number
  isMobileOnly?: boolean
  category: CardCategory
  title: string
  descriptionMobile?: string
  descriptionDesktop?: string
  image?: string
}

export const CardsList: CardProps[] = [
  {
    id: 0,
    isMobileOnly: false,
    category: CardCategory.Teach,
    title: 'Frontend Engineer',
    descriptionMobile:
      'Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
    descriptionDesktop:
      'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
    image: './image/Object.png',
  },
  {
    id: 1,
    isMobileOnly: false,
    category: CardCategory.MiniCourse,
    title: 'Основы разработки',
    descriptionMobile:
      'Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
    descriptionDesktop:
      'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
    image: './image/Object.png',
  },
  {
    id: 2,
    isMobileOnly: false,
    category: CardCategory.EducationalMaterial,
    title: 'Как использовать библиотеки',
  },
  {
    id: 3,
    isMobileOnly: false,
    category: CardCategory.EducationalMaterial,
    title: 'Дизайн, Figma, Математика',
  },
  {
    id: 4,
    isMobileOnly: true,
    category: CardCategory.EducationalMaterial,
    title: 'Как использовать библиотеки',
  },
  {
    id: 5,
    isMobileOnly: true,
    category: CardCategory.EducationalMaterial,
    title: 'Дизайн, Figma, Математика',
  },
]

export const CardsListWide: CardProps[] = [
  {
    id: 0,
    category: CardCategory.EducationalMaterial,
    title: 'Как использовать библиотеки',
  },
  {
    id: 1,
    category: CardCategory.EducationalMaterial,
    title: 'Как использовать библиотеки',
  },
  {
    id: 2,
    category: CardCategory.EducationalMaterial,
    title: 'Как использовать библиотеки',
  },
  {
    id: 3,
    category: CardCategory.EducationalMaterial,
    title: 'Как использовать библиотеки',
  },
  {
    id: 4,
    category: CardCategory.EducationalMaterial,
    title: 'Как использовать библиотеки',
  },
]
