import React                   from 'react'
import { FC }                  from 'react'
import { motion }              from 'framer-motion'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { AnimateOnTimer }      from '@ui/animate/src'
import { Background }          from '@ui/background'
import { Button }              from '@ui/button'
import { Condition }           from '@ui/condition'
import { ArrowLeftWhiteIcon }  from '@ui/icons'
import { ArrowRightWhiteIcon } from '@ui/icons'
import { Image }               from '@ui/image'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Text }                from '@ui/text'
import { useWindowWidth }      from '@ui/utils'
import { useHover }            from '@ui/utils'

import { SliderProps }         from './slider.interfaces'

export const Slider: FC<SliderProps> = ({ images, text }) => {
  const { isMobile, isDesktop, isWide, isUltra } = useWindowWidth()
  const { hover, hoverProps } = useHover()

  const [slideIndex, setSlideIndex] = useState<number>(0)
  const [animation, setAnimation] = useState<number>(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex(slideIndex + 1)
    }, 9050)
    return () => clearTimeout(timer)
  }, [slideIndex])

  const increaseSlideIndex = () => {
    setSlideIndex(slideIndex + 1)

    setAnimation(animation + 1)
  }

  const decreaseSlideIndex = () => {
    setSlideIndex(slideIndex - 1)

    setAnimation(animation + 1)
  }

  const animateOnTimerProps = {
    whileHover: { scale: 1.05 },
    animate: { opacity: 1 },
    initial: { opacity: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <Column alignItems='center'>
      <Background
        backgroundImage='darkPurpleGradient'
        backgroundColor='darkPurpleGradient'
        borderRadius={{ _: 'ordinary', standard: 'regular', wide: 'big' }}
        border={['thinGhost', 'boldGhost']}
        overflow='hidden'
        width={{ _: 155, standard: 960, wide: 1280, ultra: 1300 }}
      >
        <Box
          justifyContent='center'
          position='relative'
          height={{ _: 323, standard: 540, wide: 731 }}
          overflow='hidden'
        >
          <Condition match={isDesktop}>
            <Box position='absolute' zIndex={9}>
              <Image src='./image/Title-bar.png' width={936} height={25} />
            </Box>

            <Box {...hoverProps} zIndex={8}>
              <AnimateOnTimer key={slideIndex} {...animateOnTimerProps}>
                <Image src={images} width={720} height={540} hover={hover} />
              </AnimateOnTimer>
            </Box>
          </Condition>

          <Condition match={isMobile}>
            <Box position='absolute' top='2px'>
              <Image src='./image/Toolbar-mobile.png' width={143} height={22} />
            </Box>

            <Box width={155} height={323} justifyContent='center'>
              <AnimateOnTimer key={slideIndex} {...animateOnTimerProps}>
                <Image src={images} width={138} height={339} />
              </AnimateOnTimer>
            </Box>
          </Condition>

          <Condition match={isWide || isUltra}>
            <Box position='absolute' zIndex={9}>
              <Image src='./image/Title-bar.png' width={1248} height={34} />
            </Box>

            <Box {...hoverProps} zIndex={8}>
              <AnimateOnTimer key={slideIndex} {...animateOnTimerProps}>
                <Image src={images} width={975} height={731} hover={hover} />
              </AnimateOnTimer>
            </Box>
          </Condition>
        </Box>
      </Background>

      <Layout flexBasis={{ _: 24, standard: 32, wide: 42, ultra: 43 }} />

      <Row width={{ _: 335, standard: 960, wide: 1280, ultra: 1300 }}>
        <Condition match={isMobile || isDesktop}>
          <Box>
            <Button
              variant='ghostBackgroundWhiteText'
              size='largeSizeLittleRadii'
              icon={<ArrowLeftWhiteIcon width={16} height={16} />}
              widthIcon={48}
              heightIcon={64}
              radiiIcon='little'
              onClick={decreaseSlideIndex}
            />
          </Box>
        </Condition>

        <Condition match={isWide || isUltra}>
          <Box>
            <Button
              variant='ghostBackgroundWhiteText'
              size='largeSizeLittleRadii'
              icon={<ArrowLeftWhiteIcon width={21} height={21} />}
              widthIcon={65}
              heightIcon={87}
              radiiIcon='little'
              onClick={decreaseSlideIndex}
            />
          </Box>
        </Condition>

        <Row>
          <Layout flexBasis={{ _: 12, standard: 16, wide: 22 }} />

          <Box
            height={[58, 60]}
            flexBasis={{ _: 215, standard: 832, wide: 1110, ultra: 1127 }}
            flexShrink='0'
            alignItems='center'
            justifyContent='center'
            borderRadius='little'
            position='relative'
            border='thinnestGhostWhite'
            overflow='hidden'
          >
            <Text
              color='text.white'
              fontSize={['atom', 'little']}
              lineHeight={['usual', 'big']}
              textAlign='center'
            >
              {text}
            </Text>

            <Box width='100%' position='absolute' top={[52, 54]}>
              <motion.div
                style={{
                  height: '2px',
                  backgroundColor: 'white',
                  transform: 'translate(0%, 100%)',
                }}
                animate={{ width: '100%' }}
                transition={{ duration: 9.05, repeat: Infinity }}
                key={animation}
              />
            </Box>
          </Box>

          <Layout flexBasis={{ _: 12, standard: 16, wide: 22 }} />
        </Row>

        <Condition match={isMobile || isDesktop}>
          <Box>
            <Button
              variant='ghostBackgroundWhiteText'
              size='largeSizeLittleRadii'
              icon={<ArrowRightWhiteIcon width={16} height={16} />}
              widthIcon={48}
              heightIcon={64}
              radiiIcon='little'
              onClick={increaseSlideIndex}
            />
          </Box>
        </Condition>

        <Condition match={isWide || isUltra}>
          <Box>
            <Button
              variant='ghostBackgroundWhiteText'
              size='largeSizeLittleRadii'
              icon={<ArrowRightWhiteIcon width={21} height={21} />}
              widthIcon={65}
              heightIcon={87}
              radiiIcon='little'
              onClick={decreaseSlideIndex}
            />
          </Box>
        </Condition>
      </Row>
    </Column>
  )
}
