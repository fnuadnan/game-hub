import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'


const GameCardContainer = ({children}: PropsWithChildren) => {
  return (
    <Box  borderRadius={10} overflow={"hidden"}>
        {children}
    </Box>
  )
}

export default GameCardContainer