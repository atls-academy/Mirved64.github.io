import { useState } from 'react'

export const useHover = () => {
  const [hover, setHover] = useState<boolean>(false)

  const hoverProps = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }

  return { hover, hoverProps }
}
