import { useState } from 'react'

export const useActive = () => {
  const [active, setActive] = useState<boolean>(false)

  const activeProps = {
    onClick: () => setActive(!active),
  }

  return { active, activeProps }
}
