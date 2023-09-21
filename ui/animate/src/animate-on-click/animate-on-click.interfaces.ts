import { AnimationControls } from 'framer-motion'
import { CSSProperties }     from 'react'

type StyleFunc = (theme: any) => CSSProperties

export interface AnimateOnClickProps {
  animate: AnimationControls
  style?: CSSProperties | StyleFunc
  children: JSX.Element
}
