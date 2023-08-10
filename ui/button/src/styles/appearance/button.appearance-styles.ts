import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearancePrimaryBackgroundWhiteTextDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primaryBackgroundWhiteText.default.font'),
  backgroundColor: prop('theme.colors.button.primaryBackgroundWhiteText.default.background'),
  borderColor: prop('theme.colors.button.primaryBackgroundWhiteText.default.border'),
})

const appearancePrimaryBackgroundWhiteTextHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primaryBackgroundWhiteText.hover.font'),
  backgroundColor: prop('theme.colors.button.primaryBackgroundWhiteText.hover.background'),
  borderColor: prop('theme.colors.button.primaryBackgroundWhiteText.hover.border'),
})

const appearancePrimaryBackgroundWhiteTextPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primaryBackgroundWhiteText.pressed.font'),
  backgroundColor: prop('theme.colors.button.primaryBackgroundWhiteText.pressed.background'),
  borderColor: prop('theme.colors.button.primaryBackgroundWhiteText.pressed.border'),
})

const appearancePrimaryBackgroundWhiteTextDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primaryBackgroundWhiteText.disabled.font'),
  backgroundColor: prop('theme.colors.button.primaryBackgroundWhiteText.disabled.background'),
  borderColor: prop('theme.colors.button.primaryBackgroundWhiteText.disabled.border'),
})

const appearanceGhostBackgroundWhiteTextDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghostBackgroundWhiteText.default.font'),
  backgroundColor: prop('theme.colors.button.ghostBackgroundWhiteText.default.background'),
  borderColor: prop('theme.colors.button.ghostBackgroundWhiteText.default.border'),
})

const appearanceGhostBackgroundWhiteTextHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghostBackgroundWhiteText.hover.font'),
  backgroundColor: prop('theme.colors.button.ghostBackgroundWhiteText.hover.background'),
  borderColor: prop('theme.colors.button.ghostBackgroundWhiteText.hover.border'),
})

const appearanceGhostBackgroundWhiteTextPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghostBackgroundWhiteText.pressed.font'),
  backgroundColor: prop('theme.colors.button.ghostBackgroundWhiteText.pressed.background'),
  borderColor: prop('theme.colors.button.ghostBackgroundWhiteText.pressed.border'),
})

const appearanceGhostBackgroundWhiteTextDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghostBackgroundWhiteText.disabled.font'),
  backgroundColor: prop('theme.colors.button.ghostBackgroundWhiteText.disabled.background'),
  borderColor: prop('theme.colors.button.ghostBackgroundWhiteText.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  primaryBackgroundWhiteText: ifProp(
    prop('disabled', false),
    appearancePrimaryBackgroundWhiteTextDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearancePrimaryBackgroundWhiteTextPressedStyles,
      ifProp(
        prop('hover', false),
        appearancePrimaryBackgroundWhiteTextHoverStyles,
        appearancePrimaryBackgroundWhiteTextDefaultStyles
      )
    )
  ),
  ghostBackgroundWhiteText: ifProp(
    prop('disabled', false),
    appearanceGhostBackgroundWhiteTextDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceGhostBackgroundWhiteTextPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceGhostBackgroundWhiteTextHoverStyles,
        appearanceGhostBackgroundWhiteTextDefaultStyles
      )
    )
  ),
})

export { appearanceStyles }
