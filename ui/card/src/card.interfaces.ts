export interface CardProps {
  category: string
  widthCategoryBox: string | string[] | number | number[] | object
  indent: string | string[] | number | number[] | object
  isMobileOnly?: boolean
  titleDesktop?: string
  titleMobile?: string
  description?: string
  image?: string
}
