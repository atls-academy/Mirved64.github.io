export interface DrawerProps {
  active: boolean
  onClose: () => void
  sectionRefs: React.RefObject<HTMLDivElement>[]
}

export interface MobileDrawerProps {
  active: boolean
  onClose: () => void
}
