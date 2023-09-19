import { AnimationControls }   from 'framer-motion'
import { Target }              from 'framer-motion'
import { TargetAndTransition } from 'framer-motion'
import { VariantLabels }       from 'framer-motion'
import { Transition }          from 'framer-motion'
import {CSSProperties, RefObject} from 'react'

type StyleFunc = (theme: any) => CSSProperties

export interface AnimateOnClickProps {
  ref: RefObject<HTMLDivElement>
  custom: any
  animate: AnimationControls | TargetAndTransition | VariantLabels | boolean
  initial: boolean | Target | VariantLabels
  transition: Transition
  style?: CSSProperties | StyleFunc
  children: JSX.Element
}
