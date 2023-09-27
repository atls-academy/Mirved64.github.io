import { Dispatch }          from 'react'
import { MouseEventHandler } from 'react'
import { SetStateAction }    from 'react'

export interface FormProps {
  name: string
  send: boolean
  setSend: Dispatch<SetStateAction<boolean>>
  onClose: MouseEventHandler<HTMLDivElement>
  onChange: (userName: string) => void
}
