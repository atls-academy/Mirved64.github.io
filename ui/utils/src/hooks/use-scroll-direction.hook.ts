import { useEffect } from 'react'
import { useState }  from 'react'

export const SCROLL_UP = 'up'
export const SCROLL_DOWN = 'down'

export const useScrollDirection = ({
  initialDirection = SCROLL_DOWN,
  thresholdPixels = 10,
} = {}) => {
  const [scrollDir, setScrollDir] = useState<string>(initialDirection)
  const [scrollYpx, setScrollYpx] = useState<number>(0)

  const handleScroll = () => setScrollYpx(window.scrollY)

  useEffect(() => {
    handleScroll()
    const threshold: number = thresholdPixels || 0
    let lastScrollY: number = window.scrollY
    let ticking: boolean = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY //eslint-disable-line

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      if (scrollY <= 120) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [initialDirection, thresholdPixels])

  return { scrollDir, scrollYpx }
}
