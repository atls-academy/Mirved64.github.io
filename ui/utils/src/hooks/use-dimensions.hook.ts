import {RefObject, useLayoutEffect, useRef} from 'react'
import { useState }    from 'react'

type DimensionsValues = {
  height: number,
  top: number,
  y: number
}

export function useDimensions() {
  const ref: RefObject<HTMLDivElement> = useRef()
  const [dimensions, setDimensions] = useState<DimensionsValues>({})

  useLayoutEffect(() => {
    setDimensions(ref.current.getBoundingClientRect().toJSON())

  }, [ref.current])

  return [ref, dimensions]
}
