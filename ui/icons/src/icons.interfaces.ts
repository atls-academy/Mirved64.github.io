import { SVGProps } from 'react'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  width?: string | number | any
  height?: string | number | any
}
