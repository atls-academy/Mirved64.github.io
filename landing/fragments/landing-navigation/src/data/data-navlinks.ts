interface NavLinksProps {
  id: string | number
  name: string
  path: string
}

export const NavLinks: NavLinksProps[] = [
  {
    id: 'academy',
    name: 'Academy',
    path: 'academy',
  },
  {
    id: 'courses',
    name: 'Курсы',
    path: 'courses',
  },
  {
    id: 'teaching',
    name: 'Обучение',
    path: 'teaching',
  },
  {
    id: 'faq',
    name: 'FAQ',
    path: 'faq',
  },
]
