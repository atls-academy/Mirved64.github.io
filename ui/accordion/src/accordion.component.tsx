import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion }          from 'framer-motion'
import { useState }        from 'react'

import { Condition }       from '@ui/condition'
import { Divider }         from '@ui/divider'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Text }            from '@ui/text'
import { useWindowWidth }  from '@ui/utils'

import { CrossIcon }       from './icons'
import { MinusIcon }       from './icons'

export const Accordion = ({ answer, question }) => {
  const { isMobile, isDesktop } = useWindowWidth()
  const [selected, setSelected] = useState<boolean>(false)

  return (
    <motion.div onClick={() => setSelected(!selected)}>
      <Condition match={isDesktop}>
        <Box alignItems='center'>
          <motion.div>{selected === true ? <MinusIcon /> : <CrossIcon />}</motion.div>
          <Layout flexBasis={24} flexShrink='0' />
          <Row>
            <Layout flexBasis={24} flexShrink='0' />

            <Box flexBasis={740}>
              <Text color='text.primary' fontSize='ordinary' lineHeight='regular'>
                {question}
              </Text>
            </Box>
          </Row>
        </Box>
      </Condition>

      <Condition match={isMobile}>
        <Box alignItems='center'>
          <Row>
            <Box flexGrow={1} flexBasis={303}>
              <Text color='text.primary' fontSize='small' lineHeight='normal'>
                {question}
              </Text>
            </Box>

            <Layout flexBasis={24} flexShrink='0' />
          </Row>
          <motion.div>{selected === true ? <MinusIcon /> : <CrossIcon />}</motion.div>
        </Box>
      </Condition>

      <AnimatePresence>
        {selected === true && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 100 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, easeInOut: 1 }}
          >
            <Layout height={[16, 24]} />
            <Box maxWidth={[335, 784]}>
              <Text fontSize={['tiny', 'compact']} lineHeight={['little', 'normal']}>
                {answer}
              </Text>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      <Layout flexBasis={[16, 40]} />

      <Divider backgroundColor='divider.grayGhost' weight={1} />
    </motion.div>
  )
}
