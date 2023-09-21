import { AnimationControls } from 'framer-motion'
import { RefObject }         from 'react'

export interface HeaderIndexProps {
  sectionRefs: RefObject<HTMLDivElement>[]
  controlsCourses: AnimationControls
  controlsTeaching: AnimationControls
  controlsFaq: AnimationControls
  coursesDelta: number
  teachingDelta: number
  faqDelta: number
}
