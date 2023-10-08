import React          from 'react'

import { Button }     from '@ui/button'
import { Box }        from '@ui/layout'
import { Text }       from '@ui/text'

import { useLibrary } from '../data'

export const SearchButton = () => {
  const library = useLibrary()

  const buttonText = library?.data?.allForms?.nodes?.find((node) => node.id === 'cG9zdDozMTE=')
    ?.forms?.text

  return (
    <Box width={{ _: 172, standard: 132, ultra: 165 }}>
      <Button variant='navyBackgroundWhiteText' size='usualSizeCompactRadii'>
        <Text color='text.white' fontSize={{ _: 'little', ultra: 'small' }} lineHeight='usual'>
          {buttonText}
        </Text>
      </Button>
    </Box>
  )
}
