import { Box }         from '@atls-ui-parts/layout'

import React           from 'react'
import { FC }          from 'react'
import { motion }      from 'framer-motion'

import { DrawerProps } from './drawer.interaces'
import { Renderer }    from './renderer'

export const Drawer: FC<DrawerProps> = ({ active, heightDrawer, children }) => (
  <Renderer active={active}>
    <motion.div
      style={{ position: 'fixed', top: '-100%', width: '100%', zIndex: 9 }}
      animate={{ top: 0 }}
      exit={{ top: '-100%' }}
      transition={{ duration: 0.5 }}
    >
      <Box height={heightDrawer} backgroundColor='background.white' alignItems='center'>
        {children}
      </Box>
    </motion.div>
  </Renderer>
)
