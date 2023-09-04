interface CardProps {
  id: number
  title: string
  technologiesList: string[]
  description: string
}

export const dataCards: CardProps[] = [
  {
    id: 0,
    title: 'Дизайн, Figma, Математика',
    technologiesList: ['nodejs', 'typescript', 'nestjs', 'kotlin', 'java', 'c#', 'c++'],
    description:
      'Комплексный учебный материал, разработанный для студентов и всех, кто интересуется сферой дизайна, созданием веб-интерфейсов и применением математики в процессе проектирования.',
  },
  {
    id: 1,
    title: 'Как использовать библиотеки',
    technologiesList: ['nodejs', 'typescript', 'nestjs', 'kotlin', 'java', 'c#', 'c++'],
    description:
      'Комплексный учебный материал, разработанный для студентов и всех, кто интересуется сферой дизайна, созданием веб-интерфейсов и применением математики в процессе проектирования.',
  },
  {
    id: 2,
    title: 'Гексагональная архитектура, понимание аггрегатов',
    technologiesList: ['nodejs', 'typescript', 'nestjs', 'kotlin', 'java', 'c#', 'c++'],
    description:
      'Комплексный учебный материал, разработанный для студентов и всех, кто интересуется сферой дизайна, созданием веб-интерфейсов и применением математики в процессе проектирования.',
  },
]
