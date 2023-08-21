import { useState } from 'react'

export const useHover = () => {
  const [hover, setHover] = useState(false)

  const hoverProps = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }

  return [hover, hoverProps]
}
