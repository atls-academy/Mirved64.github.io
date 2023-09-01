export interface DrawerProps {
  active: boolean
  onClose: () => void
  sectionRefs: React.RefObject<HTMLDivElement>[]
}
