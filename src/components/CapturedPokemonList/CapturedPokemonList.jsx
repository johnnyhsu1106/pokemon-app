import { 
  Box,
  Image 
} from '@chakra-ui/react';

const CapturedPokemonList = ({
  capturedPokemons,
  removeCapturedPokemon
}) => {
  return (
    <Box bg='gray.100' rounded='lg'>
      { capturedPokemons.map((capturedPokemon, i) => {
        return (
          <Image
            onClick={() => { removeCapturedPokemon(i) }} 
            key={i} 
            src={capturedPokemon?.image}/>  
        )}
      )}
    </Box>
  )
}

export default CapturedPokemonList
