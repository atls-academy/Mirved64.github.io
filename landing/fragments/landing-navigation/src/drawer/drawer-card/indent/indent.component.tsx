import React           from 'react'
import { FC }          from 'react'

import { Condition }   from '@ui/condition'
import { Layout }      from '@ui/layout'

import { IndentProps } from './indent.interfaces'

export const Indent: FC<IndentProps> = ({ index, array }) => (
  <Condition match={index !== 0 && index !== array.length - 1}>
    <Layout flexBasis={10} flexShrink='0' />
  </Condition>
)
