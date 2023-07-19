import { createContentStyles } from '@atls-ui-parts/button'
import { createBaseStyles }    from '@atls-ui-parts/button'

import { styleFn }             from 'styled-system'
import { prop }                from 'styled-tools'
import { ifProp }              from 'styled-tools'

export const fillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()
