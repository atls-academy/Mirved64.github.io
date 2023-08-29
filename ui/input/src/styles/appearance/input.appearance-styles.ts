import { createAppearanceStyles } from '@atls-ui-parts/input'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearanceCommonDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.common.default.font'),
  backgroundColor: prop('theme.colors.input.common.default.background'),
  borderColor: prop('theme.colors.input.common.default.border'),
})

const appearanceCommonHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.common.hover.font'),
  backgroundColor: prop('theme.colors.input.common.hover.background'),
  borderColor: prop('theme.colors.input.common.hover.border'),
})

const appearanceCommonFocusStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.common.focus.font'),
  backgroundColor: prop('theme.colors.input.common.focus.background'),
  borderColor: prop('theme.colors.input.common.focus.border'),
})

const appearanceCommonFilledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.common.filled.font'),
  backgroundColor: prop('theme.colors.input.common.filled.background'),
  borderColor: prop('theme.colors.input.common.filled.border'),
})

const appearanceCommonDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.input.common.disabled.font'),
  backgroundColor: prop('theme.colors.input.common.disabled.background'),
  borderColor: prop('theme.colors.input.common.disabled.border'),
})

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
  common: ifProp(
    prop('disabled', false),
    appearanceCommonDisabledStyles,
    ifProp(
      prop('filled', false),
      appearanceCommonFilledStyles,
      ifProp(
        prop('focus', false),
        appearanceCommonFocusStyles,
        ifProp(prop('hover', false), appearanceCommonHoverStyles, appearanceCommonDefaultStyles)
      )
    )
  ),
  search: ifProp(
    prop('focus', false),
    appearanceSearchFocusStyles,
    ifProp(prop('hover', false), appearanceSearchHoverStyles, appearanceSearchDefaultStyles)
  ),
})

export { appearanceStyles }
