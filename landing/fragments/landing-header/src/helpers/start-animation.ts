import { AnimationControls } from 'framer-motion'

export const startAnimation = (
  controlsFirstSection: AnimationControls,
  controlsSecondSection: AnimationControls,
  controlsThirdSection: AnimationControls,
  deltaFirstSection: number,
  deltaSecondSection: number,
  deltaThirdSection: number
) => {
  controlsFirstSection.start({
    y: [deltaFirstSection, 0],
    transition: {
      duration: 4,
      times: [0, 1],
      ease: ['easeInOut', 'easeInOut'],
    },
  })

  controlsSecondSection.start({
    y: [deltaSecondSection, 0],
    transition: {
      duration: 4,
      times: [0, 1],
      ease: ['easeInOut', 'easeInOut'],
    },
  })

  controlsThirdSection.start({
    y: [deltaThirdSection, 0],
    transition: {
      duration: 4,
      times: [0, 1],
      ease: ['easeInOut', 'easeInOut'],
    },
  })
}
