export interface IconProps {
  hover?: boolean | { onMouseEnter: () => void; onMouseLeave: () => void }
  width?: string | number
  height?: string | number
}
