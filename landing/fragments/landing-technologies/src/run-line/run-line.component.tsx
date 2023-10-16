import styled           from '@emotion/styled'
import { keyframes }    from '@emotion/react'

import React            from 'react'
import { FC }           from 'react'
import { useMemo }      from 'react'

import { Divider }      from '@ui/divider'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Text }         from '@ui/text'
import { Repeater }     from '@ui/utils'

import { RunLineProps } from './run-line.interfaces'

export const RunLine: FC<RunLineProps> = ({ technologies, font = 'primary' }) => {
  const infinityLine = useMemo(
    () => keyframes`0% { transform: translateX(0) } 100% { transform: translate(-50%) }`,
    []
  )

  const AnimationBox = useMemo(
    () => styled(Box)({ animation: `${infinityLine} 600s linear infinite` }),
    [infinityLine]
  )

  const technologyElement = useMemo(
    () =>
      technologies?.map((item) => (
        <Box key={item.id}>
          <Box>
            <Text
              color='text.white'
              fontSize={['huge', 'massive']}
              fontWeight='lighter'
              fontFamily={font}
              lineHeight='normal'
              whiteSpace='nowrap'
              textTransform='uppercase'
            >
              {item.title}
            </Text>
          </Box>

          <Box width={[50, 96]}>
            <Layout flexBasis={[12, 24]} flexShrink='0' />

            <Box width={[27, 48]} alignItems='center' flexShrink='0'>
              <Divider backgroundColor='background.white' weight={[2, 4]} />
            </Box>

            <Layout flexBasis={[12, 24]} flexShrink='0' />
          </Box>
        </Box>
      )),
    [technologies, font]
  )

  return (
    <Box>
      <AnimationBox>
        <Repeater quantity={50}>{() => technologyElement}</Repeater>
      </AnimationBox>
    </Box>
  )
}
