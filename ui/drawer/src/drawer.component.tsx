import { Box }         from '@atls-ui-parts/layout'

import React           from 'react'
import { FC }          from 'react'
import { motion }      from 'framer-motion'

import { DrawerProps } from './drawer.interaces'
import { Renderer }    from './renderer'

export const DrawerContainer: FC<DrawerProps> = ({
  active,
  heightDrawer,
  children,
}: DrawerProps) => (
  <Renderer active={active}>
    <motion.div
      style={{ position: 'fixed', top: '-100%', width: '100%', zIndex: 12 }}
      animate={{ top: 0 }}
      exit={{ top: '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <Box height={heightDrawer}>{children}</Box>
    </motion.div>
  </Renderer>
)
