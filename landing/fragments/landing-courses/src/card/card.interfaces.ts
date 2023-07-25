type DisplayText = 'flex' | 'none'

export interface CardProps {
  topGapBasis: string | string[] | number | number[]
  bottomGapBasis: string | string[] | number | number[]
  leftGapBasis: string | string[] | number | number[]
  widthCard?: string | string[] | number | number[]
  widthContent?: string | string[] | number | number[]
  gapBasis: string | string[] | number | number[]
  category: string
  isMobileOnly?: boolean
  titleDesktop: string
  titleMobile?: string
  text?: string
  displayText: DisplayText
  path?: string
}
