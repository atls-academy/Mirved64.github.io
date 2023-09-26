const colors = {
  darkPurple: 'rgba(58, 55, 93, 1)',
  darkPurpleTransparent: 'rgba(58, 55, 93, .75)',
  darkestPurple: 'rgba(34, 33, 36, 1)',
  accentPurple: 'rgba(77, 60, 242, 1)',
  ghostPurple: 'rgba(114, 108, 182, 1)',
  gray: 'rgba(161, 160, 163, 1)',
  background: {
    blackTransparent: 'rgba(0, 0, 0, 0.4)',
    black: 'rgba(0, 0, 0, 1)',
    navyBlue: 'rgba(77, 60, 242, 1)',
    ghost: 'rgba(255, 255, 255, 0.25)',
    gray: 'rgba(102, 102, 102, 1)',
    graySemiTransparent: 'rgba(255, 255, 255, 0.4)',
    grayTransparent: 'rgba(58, 55, 94, 0.15)',
    grayGhost: 'rgba(27, 26, 51, 0.15)',
    primaryTransparent: 'rgba(58, 55, 93, 0.25)',
    purpleTransparent: 'rgba(123, 84, 233, 0.2)',
    purple: 'rgba(123, 84, 233, 1)',
    lightGray: 'rgba(244, 242, 255, 1)',
    lightGrayTransparent: 'rgba(217, 217, 217, 1)',
    white: 'rgba(255, 255, 255, 1)',
    whiteTransparent: 'rgba(255, 255, 255, .08)',
    whiteSemiTransparent: 'rgba(255, 255, 255, .5)',
  },
  text: {
    white: 'rgba(255, 255, 255, 1)',
    whiteTransparent: 'rgba(255, 255, 255, 0.6)',
    whiteSemiTransparent: 'rgba(255, 255, 255, .5)',
    gray: 'rgba(255, 255, 255, 0.4)',
    ghost: 'rgba(0, 0, 0, 0.4)',
    black: 'rgba(0, 0, 0, 1)',
    primary: 'rgba(58, 55, 93, 1)',
    primaryTransparent: 'rgba(58, 55, 94, 0.6)',
    primaryTransparentText: 'rgba(58, 55, 93, 0.75)',
    primaryText: 'rgba(27, 26, 51, 1)',
    accent: 'rgba(77, 60, 242, 1)',
    purple: 'rgba(123, 84, 233, 1)',
    active: 'rgba(114, 108, 182, 1)',
  },
  button: {
    primaryBackgroundWhiteText: {
      default: {
        background: 'rgba(58, 55, 93, 1)',
      },
      hover: {
        background: 'rgba(88, 83, 140, 1)',
      },
      pressed: {
        background: 'rgba(114, 108, 182, 1)',
      },
      disabled: {
        background: 'rgba(58, 55, 93, 0.25)',
      },
    },
    ghostBackgroundWhiteText: {
      default: {
        background: 'rgba(255, 255, 255, 0.08)',
      },
      hover: {
        background: 'rgba(255, 255, 255, 0.35)',
      },
      pressed: {
        background: 'rgba(255, 255, 255, 0.5)',
      },
      disabled: {
        background: 'rgba(255, 255, 255, 0.1)',
      },
    },
    navyBackgroundWhiteText: {
      default: {
        background: 'rgba(77, 60, 242, 1)',
      },
      hover: {
        background: 'rgba(77, 60, 242, .5)',
      },
    },
  },
  input: {
    common: {
      default: {
        border: 'rgba(58, 55, 94, 0.15)',
        font: 'rgba(58, 55, 94, 0.6)',
        background: 'rgba(255, 255, 255, 1)',
      },
      hover: {
        border: 'rgba(123, 84, 233, 1)',
        font: 'rgba(58, 55, 94, 0.6)',
        background: 'rgba(255, 255, 255, 1)',
      },
      focus: {
        border: 'rgba(123, 84, 233, 1)',
        font: 'rgba(58, 55, 94, 0.15)',
        background: 'rgba(255, 255, 255, 1)',
      },
      filled: {
        border: 'rgba(58, 55, 93, 1)',
        font: 'rgba(27, 26, 51, 1)',
        background: 'rgba(255, 255, 255, 1)',
      },
    },
    search: {
      default: {
        border: 'rgba(0, 0, 0, 0)',
        font: 'rgba(161, 160, 163, 1)',
        background: 'rgba(246, 246, 246, 1)',
      },
      hover: {
        border: 'rgba(0, 0, 0, 0)',
        font: 'rgba(58, 55, 93, 0.75)',
        background: 'rgba(246, 246, 246, 1)',
      },
      focus: {
        border: 'rgba(36, 130, 240, 1)',
        font: 'rgba(34, 33, 36, 1)',
        background: 'rgba(248, 248, 248, 1)',
      },
      filled: {
        border: 'rgba(0, 0, 0, 0)',
        font: 'rgba(34, 33, 36, 1)',
        background: 'rgba(248, 248, 248, 1)',
      },
      selected: {
        border: 'rgba(0, 0, 0, 0)',
        font: 'rgba(34, 33, 36, 1)',
        background: 'rgba(248, 248, 248, 1)',
      },
    },
  },
}

export { colors }
