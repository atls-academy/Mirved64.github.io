export interface DrawerIndexProps {
  active: boolean
  onClose: () => void
  sectionRefs: React.RefObject<HTMLDivElement>[]
}

export interface DrawerProps {
  active: boolean
  onClose: () => void
}
