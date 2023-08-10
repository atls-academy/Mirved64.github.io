import { styleFn } from 'styled-system'
import { prop }    from 'styled-tools'
import { ifProp }  from 'styled-tools'

export const fillStyles: styleFn = ifProp(prop('fill', true), { width: '100%' })
