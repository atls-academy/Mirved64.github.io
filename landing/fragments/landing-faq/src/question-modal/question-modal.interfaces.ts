import { MouseEventHandler } from 'react'

export interface QuestionModalProps {
  open: boolean
  setOpen: MouseEventHandler<HTMLDivElement>
}
