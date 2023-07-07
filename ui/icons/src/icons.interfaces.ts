import { SVGProps } from 'react'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  width?: string | number | string[] | number[]
  height?: string | number | string[] | number[]
}
