type BreakpointsProp = Array<string> & {
  standard?: string | number | undefined
  wide?: string | number | undefined
  ultra?: string | number | undefined
}

export const breakpoints: BreakpointsProp = ['80em', '160em', '240em']

breakpoints.standard = breakpoints[0] // eslint-disable-line
breakpoints.wide = breakpoints[1] // eslint-disable-line
breakpoints.ultra = breakpoints[2] // eslint-disable-line
