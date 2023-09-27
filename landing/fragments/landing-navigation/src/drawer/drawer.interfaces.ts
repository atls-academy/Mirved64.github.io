import { MouseEventHandler } from 'react'

export interface DrawerProps {
  active: boolean
  onClose: MouseEventHandler<HTMLButtonElement>
  children?: JSX.Element
}
