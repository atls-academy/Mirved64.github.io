type DisplayText = 'flex' | 'none'

export interface CardProps {
  topGap: string | string[] | number | number[]
  bottomGap: string | string[] | number | number[]
  leftGap: string | string[] | number | number[]
  widthCard?: string | string[] | number | number[]
  widthContent?: string | string[] | number | number[]
  gap: string | string[] | number | number[]
  category: string
  isMobailOnly?: boolean
  titleDesktop: string
  titleMobile?: string
  text?: string
  displayText: DisplayText
  path?: string
}
