import { AnimationControls }   from 'framer-motion'
import { TargetAndTransition } from 'framer-motion'
import { VariantLabels }       from 'framer-motion'
import { Transition }          from 'framer-motion'
import { CSSProperties }       from 'react'

type StyleFunc = (theme: any) => CSSProperties

export interface AnimateOnClickProps {
  animate: AnimationControls | TargetAndTransition | VariantLabels | boolean
  transition: Transition
  style?: CSSProperties | StyleFunc
  children: JSX.Element
}
