import { RefObject } from 'react'
import { useEffect } from 'react'
import { useRef }    from 'react'
import { useState }  from 'react'

export function useDimensions(): [RefObject<HTMLDivElement>, number, number, number] {
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  const [divHeight, setDivHeight] = useState<number | null>(0)
  const [divTop, setDivTop] = useState<number | null>(0)
  const [divY, setDivY] = useState<number | null>(0)

  useEffect(() => {
    setDivHeight(ref.current!.getBoundingClientRect().height)
    setDivTop(ref.current!.getBoundingClientRect().top)
    setDivY(ref.current!.getBoundingClientRect().y)
  }, [])

  return [ref, divHeight!, divTop!, divY!]
}
