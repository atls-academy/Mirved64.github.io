import { createAppearanceStyles } from '@atls-ui-parts/input'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearanceSearchDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.search.default.font'),
  backgroundColor: prop('theme.colors.input.search.default.background'),
  borderColor: prop('theme.colors.input.search.default.border'),
})

const appearanceSearchHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.search.hover.font'),
  backgroundColor: prop('theme.colors.input.search.hover.background'),
  borderColor: prop('theme.colors.input.search.hover.border'),
})

const appearanceSearchFocusStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.search.focus.font'),
  backgroundColor: prop('theme.colors.input.search.focus.background'),
  borderColor: prop('theme.colors.input.search.focus.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  search: ifProp(
    prop('focus', false),
    appearanceSearchFocusStyles,
    ifProp(prop('hover', false), appearanceSearchHoverStyles, appearanceSearchDefaultStyles)
  ),
})

export { appearanceStyles }
