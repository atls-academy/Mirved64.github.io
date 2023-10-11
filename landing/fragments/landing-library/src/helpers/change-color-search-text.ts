export const changeColorSearchText = (
  hover: boolean,
  focus: boolean,
  searchQuery: string
): string => {
  if (hover) return 'darkPurpleTransparent'
  if (focus) return 'darkestPurple'
  if (searchQuery) return 'darkestPurple'
  return 'gray'
}
