export interface FormProps {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  phoneNumber: string
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
  send: boolean
  setSend: () => void
  display: boolean
  setDisplay: () => void
  onClose: () => void
}
