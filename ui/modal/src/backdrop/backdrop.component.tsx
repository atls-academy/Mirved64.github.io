import styled                 from '@emotion/styled'

import { BackdropElement }    from './backdrop.element'
import { baseBackdropStyles } from './backdrop.styles'

const Backdrop = styled(BackdropElement)(baseBackdropStyles)

Backdrop.defaultProps = {
  initial: 'enter',
  animate: 'target',
  exit: 'exit',
}

export { Backdrop }
