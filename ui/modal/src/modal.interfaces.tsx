import { MouseEventHandler } from 'react'

export interface ModalProps {
  open: boolean
  onClose: MouseEventHandler<HTMLDivElement>
}
