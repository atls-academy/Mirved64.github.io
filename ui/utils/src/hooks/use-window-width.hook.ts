import { useEffect } from 'react'
import { useState }  from 'react'

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  const handleResize = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    windowWidth,
    isMobile: windowWidth < 1220,
    isDesktop: windowWidth > 1220 && windowWidth < 2200,
    isWideDesktop: windowWidth > 2200 && windowWidth < 3300,
    isTV: windowWidth > 3300,
  }
}
