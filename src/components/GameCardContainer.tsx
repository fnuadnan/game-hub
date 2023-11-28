import { Box } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'


const GameCardContainer = ({children}: PropsWithChildren) => {
  return (
    <Box width='300px' borderRadius={10} overflow={"hidden"}>
        {children}
    </Box>
  )
}

export default GameCardContainer