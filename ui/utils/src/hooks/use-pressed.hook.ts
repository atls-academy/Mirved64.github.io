import { useState } from 'react'

export const usePressed = () => {
  const [pressed, setPressed] = useState(false)

  const pressedProps = {
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
  }

  return { pressed, pressedProps }
}
