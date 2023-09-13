import { useEffect } from 'react'
import { useState }  from 'react'

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(3840)

  const handleResize = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    windowWidth,
    isMobile: windowWidth < 1280,
    isDesktop: windowWidth >= 1280 && windowWidth < 2560,
    isWideDesktop: windowWidth >= 2560 && windowWidth < 3840,
    isTV: windowWidth >= 3840,
  }
}
