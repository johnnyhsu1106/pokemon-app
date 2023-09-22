import { Text } from '@chakra-ui/react';


const PokemonName = ({ name }) => {
  if (!name) {
    return null;
  }
  
  return (
    <Text color='white' fontSize='xl' fontWeight={600}>
      {name}
    </Text>
  )
}

export default PokemonName
