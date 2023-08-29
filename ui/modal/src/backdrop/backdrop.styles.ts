import { CSSObject } from '@emotion/css'

export const baseBackdropStyles: CSSObject = {
  zIndex: -1,
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(10px)',
}
