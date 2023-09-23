import { 
  Box,
  Image,
  Text 
} from '@chakra-ui/react';

const CapturedPokemonList = ({
  capturedPokemons,
  removeCapturedPokemon
}) => {
  return (
    <Box rounded='lg'>
      <Text color='white' fontSize='xl' fontWeight={600}>Captured</Text>
      { capturedPokemons.map((capturedPokemon, i) => {
        return (
          <Image
            m='auto'
            className='captured-pokemon'
            onClick={() => { removeCapturedPokemon(i) }} 
            key={i} 
            src={capturedPokemon?.image}/>  
        )}
      )}
    </Box>
  )
}

export default CapturedPokemonList
