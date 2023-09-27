export const getColorText = (hover: boolean, active: boolean): string => {
  if (hover) return 'accentPurple'
  if (active) return 'ghostPurple'
  return 'darkPurple'
}
