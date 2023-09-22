import {
  Stack,
  Text,
} from '@chakra-ui/react';


const PokemonStats = ({
  name, 
  baseStats
}) => {

  return (
    <Stack>
      <Text>{name}</Text>
      <Text>{baseStats}</Text>
    </Stack>
  )
}

export default PokemonStats
