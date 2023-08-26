export interface ItemProps {
  name: string
  path: string
  active?: boolean
}

export interface ItemDrawerProps {
  name: string
  path: string
  currentElementIndexInViewport: number
  index: number
}
