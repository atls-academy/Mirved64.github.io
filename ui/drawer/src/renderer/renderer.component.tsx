import { Layout }          from '@atls-ui-parts/layout'

import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { FC }              from 'react'
import { Children }        from 'react'
import { useState }        from 'react'
import { useEffect }       from 'react'
import { createPortal }    from 'react-dom'

import { RendererProps }   from './renderer.interfaces'

const Renderer: FC<RendererProps> = ({ children, active }) => {
  const [doc, setDoc] = useState<any>(null)

  useEffect(() => {
    setDoc(document)
  }, [])

  return doc?.body
    ? createPortal(
        <Layout>
          {Children.map(children, (child) => (
            <AnimatePresence>{active && child}</AnimatePresence>
          ))}
        </Layout>,
        (doc as any).body
      )
    : null
}

export { Renderer }
