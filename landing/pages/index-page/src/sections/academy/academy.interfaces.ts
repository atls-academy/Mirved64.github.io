import { RefObject } from 'react'

export interface AcademySectionProps {
  sectionRefs: RefObject<HTMLDivElement>[]
  animateOnLoadProps: { transition: { duration: number } }
}
