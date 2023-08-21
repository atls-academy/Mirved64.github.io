import React             from 'react'
import { FC }            from 'react'

import { Accordion }     from '@ui/accordion'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'

import { QuestionProps } from './item.interfaces'

export const Item: FC<QuestionProps> = ({ question, answer }) => (
  <Column>
    <Layout flexBasis={[16, 40]} />

    <Accordion question={question} answer={answer} />

    <Layout flexBasis={[16, 40]} />
  </Column>
)
