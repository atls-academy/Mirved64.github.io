import { RefObject } from 'react'
import { useEffect } from 'react'
import { useRef }    from 'react'
import { useState }  from 'react'

export function useDivHeight(): [RefObject<HTMLDivElement>, number] {
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  const [divHeight, setDivHeight] = useState<number | null>(0)

  useEffect(() => {
    setDivHeight(ref.current!.getBoundingClientRect().height)
  }, [])

  return [ref, divHeight!]
}
