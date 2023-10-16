export interface CardProps {
  label: string
  isMobileOnly?: boolean
  widthCategoryBox: string | string[] | number | number[] | object
  indent: string | string[] | number | number[] | object
  title: string
  description?: string
  image?: string
}
