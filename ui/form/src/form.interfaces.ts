export interface FormProps {
  name: string
  send: boolean
  setSend: React.Dispatch<React.SetStateAction<boolean>>
  onClose: () => void
  onChange: (userName: string) => void
}
