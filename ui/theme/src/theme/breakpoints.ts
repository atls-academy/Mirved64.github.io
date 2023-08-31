type BreakpointsProp = Array<string | number | undefined> & {
  small?: string | number | undefined
  standard?: string | number | undefined
  wide?: string | number | undefined
  ultra?: string | number | undefined
}

export const breakpoints: BreakpointsProp = ['40em', '80em', '160em', '240em']

breakpoints[0] = breakpoints.small
breakpoints[1] = breakpoints.standard
breakpoints[2] = breakpoints.wide
breakpoints[3] = breakpoints.ultra
