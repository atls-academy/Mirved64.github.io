import { RefObject } from 'react'

export interface NavLinksBlockIndexInterfaces {
  sectionRefs: RefObject<HTMLDivElement>[]
  handleStartAnimation?: () => void
}
