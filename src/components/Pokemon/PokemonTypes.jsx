import {
  Box,
  Badge,
  WrapItem,
  Wrap,
  Text
} from '@chakra-ui/react';


const PokemonTypes = ({ types }) => {
  if (!types) {
    return null;
  }

  return (
    <>
      <Text color='white'>Type</Text>
      <Box>
        <Wrap>
          <WrapItem>
            {types.map((item, i) => {  
              return (
              <Badge key={i} borderWidth={3} rounded='md' borderColor='red.800'>
                {item?.type?.name}
              </Badge>
            )
            })}
          </WrapItem>
        </Wrap>
      </Box>
    </>
  )
}

export default PokemonTypes
