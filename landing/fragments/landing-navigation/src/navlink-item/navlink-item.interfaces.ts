export interface NavLinkItemProps {
  name: string
  path: string
  active?: boolean
}

export interface NavLinkItemDrawerProps {
  name: string
  path: string
  currentElementIndexInViewport: number
  index: number
  onClick?: () => void
}
