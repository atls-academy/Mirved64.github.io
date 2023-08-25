import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'
import { motion }              from 'framer-motion'
import { useEffect }           from 'react'
import { useState }            from 'react'

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

export const Slider: FC<SliderProps> = ({ images }) => {
  const { isMobile, isDesktop } = useWindowWidth()
  const { hover, hoverProps } = useHover()

  const [slideIndex, setSlideIndex] = useState(0)
  const [animation, setAnimation] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slideIndex === images.length - 1) {
        setSlideIndex(0)
      } else setSlideIndex(slideIndex + 1)
    }, 9050)
    return () => clearTimeout(timer)
  }, [slideIndex, images.length])

  const increaseslideIndex = () => {
    if (slideIndex === images.length - 1) {
      setSlideIndex(0)
    } else setSlideIndex(slideIndex + 1)

    setAnimation(animation + 1)
  }

  const decreaseslideIndex = () => {
    if (slideIndex === 0) {
      setSlideIndex(images.length - 1)
    } else setSlideIndex(slideIndex - 1)

    setAnimation(animation + 1)
  }

  return (
    <Column flexGrow='1' alignItems='center'>
      <Condition match={isDesktop}>
        <Background backgroundColor='darkPurpleGradient' borderRadius='regular' border='boldGhost'>
          <Box
            width={960}
            justifyContent='center'
            borderRadius='regular'
            position='relative'
            maxHeight={540}
            overflow='hidden'
          >
            <Box position='absolute' zIndex={9}>
              <Image src='./image/Title-bar.png' width={960} height={25} />
            </Box>

            <Box {...hoverProps} zIndex={8}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image src={images[slideIndex]} width={720} height={540} hover={hover} />
              </motion.div>
            </Box>
          </Box>
        </Background>
      </Condition>

      <Condition match={isMobile}>
        <Background backgroundColor='darkPurpleGradient' borderRadius='ordinary' border='thinGhost'>
          <Box
            position='relative'
            borderRadius='ordinary'
            width={155}
            justifyContent='center'
            overflow='hidden'
          >
            <Box position='absolute' top='2px'>
              <Image src='./image/Toolbar-mobile.png' width={143} height={22} />
            </Box>

            <Box width={155} height={323} justifyContent='center'>
              <Image src={images[slideIndex]} width={138} height={339} />
            </Box>
          </Box>
        </Background>
      </Condition>

      <Layout flexBasis={[24, 32]} />

      <Row maxWidth={[335, 960]}>
        <Box>
          <Button
            variant='ghostBackgroundWhiteText'
            size='LargeSizelittleRadii'
            icon={<ArrowLeftWhiteIcon width={16} height={16} />}
            widthIcon={48}
            heightIcon={64}
            radiiIcon='little'
            onClick={decreaseslideIndex}
          />
        </Box>

        <Row>
          <Layout flexBasis={[12, 16]} />

          <Box
            height={[58, 60]}
            flexBasis={[215, 832]}
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
              lineHeight={['minor', 'medium']}
              textAlign='center'
            >
              <FormattedMessage id='slider.sign' />
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

          <Layout flexBasis={[12, 16]} />
        </Row>

        <Box>
          <Button
            variant='ghostBackgroundWhiteText'
            size='LargeSizelittleRadii'
            icon={<ArrowRightWhiteIcon width={16} height={16} />}
            widthIcon={48}
            heightIcon={64}
            radiiIcon='little'
            onClick={increaseslideIndex}
          />
        </Box>
      </Row>
    </Column>
  )
}
