import { MouseEventHandler } from 'react'
import { RefObject }         from 'react'

export interface NavLinksBlockIndexInterfaces {
  sectionRefs: RefObject<HTMLDivElement>[]
  handleStartAnimation?: MouseEventHandler<HTMLDivElement>
}
