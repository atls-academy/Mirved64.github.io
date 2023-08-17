import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearanceTransparentBackgroundWhiteTextDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundWhiteText.default.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundWhiteText.default.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundWhiteText.default.border'),
})

const appearanceTransparentBackgroundWhiteTextHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundWhiteText.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundWhiteText.hover.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundWhiteText.hover.border'),
})

const appearanceTransparentBackgroundWhiteTextPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundWhiteText.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundWhiteText.pressed.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundWhiteText.pressed.border'),
})

const appearanceTransparentBackgroundWhiteTextDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundWhiteText.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundWhiteText.disabled.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundWhiteText.disabled.border'),
})

const appearanceTransparentBackgroundBlackTextDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundBlackText.default.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundBlackText.default.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundBlackText.default.border'),
})

const appearanceTransparentBackgroundBlackTextHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundBlackText.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundBlackText.hover.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundBlackText.hover.border'),
})

const appearanceTransparentBackgroundBlackTextPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundBlackText.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundBlackText.pressed.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundBlackText.pressed.border'),
})

const appearanceTransparentBackgroundBlackTextDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundBlackText.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundBlackText.disabled.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundBlackText.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  transparentBackgroundWhiteText: ifProp(
    prop('disabled', false),
    appearanceTransparentBackgroundWhiteTextDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentBackgroundWhiteTextPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentBackgroundWhiteTextHoverStyles,
        appearanceTransparentBackgroundWhiteTextDefaultStyles
      )
    )
  ),
  transparentBackgroundBlackText: ifProp(
    prop('disabled', false),
    appearanceTransparentBackgroundBlackTextDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentBackgroundBlackTextPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentBackgroundBlackTextHoverStyles,
        appearanceTransparentBackgroundBlackTextDefaultStyles
      )
    )
  ),
})

export { appearanceStyles }
