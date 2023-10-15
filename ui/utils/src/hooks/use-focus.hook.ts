import { useState } from 'react'

export const useFocus = () => {
  const [focus, setFocus] = useState<boolean>(false)

  const focusProps = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
  }

  return { focus, focusProps }
}
