import { Box }             from '@atls-ui-parts/layout'
import { Column }          from '@atls-ui-parts/layout'
import { Layout }          from '@atls-ui-parts/layout'

import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { FC }              from 'react'
import { motion }          from 'framer-motion'
import { useState }        from 'react'

import { Condition }       from '@ui/condition'
import { Divider }         from '@ui/divider'
import { Text }            from '@ui/text'
import { useWindowWidth }  from '@ui/utils'
import { useHover }        from '@ui/utils'

import { AccordionProps }  from './accordion.interfaces'
import { CrossIcon }       from './icons'
import { MinusIcon }       from './icons'

export const Accordion: FC<AccordionProps> = ({
  answer,
  question,
  isDivider = true,
}: AccordionProps) => {
  const { isMobile } = useWindowWidth()
  const { hover, hoverProps } = useHover()
  const [selected, setSelected] = useState<boolean>(false)

  const handleSelect = () => setSelected(!selected)

  return (
    <Column>
      <motion.div onClick={handleSelect}>
        <Condition match={!isMobile}>
          <Box {...hoverProps} alignItems='center' cursor='pointer'>
            <motion.div style={{ display: 'flex', alignItems: 'center' }}>
              {selected === true ? (
                <MinusIcon width={20} height={20} hover={hover} />
              ) : (
                <CrossIcon width={20} height={20} hover={hover} />
              )}
            </motion.div>

            <Layout flexBasis={24} flexShrink='0' />

            <Box flexBasis={740}>
              <Text
                color={hover ? 'text.accent' : 'text.primary'}
                fontSize='ordinary'
                lineHeight='huge'
              >
                {question}
              </Text>
            </Box>
          </Box>
        </Condition>

        <Condition match={isMobile}>
          <Box {...hoverProps} alignItems='center' cursor='pointer'>
            <Box flexGrow='1' flexBasis={303}>
              <Text
                color={hover ? 'text.accent' : 'text.primary'}
                fontSize='small'
                lineHeight='huge'
              >
                {question}
              </Text>
            </Box>

            <Layout flexBasis={24} flexShrink='0' />

            <motion.div style={{ display: 'flex', alignItems: 'center' }}>
              {selected === true ? (
                <MinusIcon width={14} height={14} hover={hover} />
              ) : (
                <CrossIcon width={14} height={14} hover={hover} />
              )}
            </motion.div>
          </Box>
        </Condition>

        <AnimatePresence>
          {selected === true && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 90 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, easeInOut: 1 }}
            >
              <Layout height={[16, 24]} />

              <Box maxWidth={[335, 740]}>
                <Text
                  color={['text.primaryTransparentText', 'text.primaryText']}
                  fontSize={['tiny', 'compact']}
                  lineHeight={['huge', 'big']}
                >
                  {answer}
                </Text>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        <Condition match={isDivider}>
          <Layout height={[16, 40]} />

          <Divider backgroundColor='background.grayGhost' weight={1} />
        </Condition>
      </motion.div>
    </Column>
  )
}
