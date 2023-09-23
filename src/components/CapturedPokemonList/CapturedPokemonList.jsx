import { 
  Box,
  Image,
  Text,
  WrapItem
} from '@chakra-ui/react';

const CapturedPokemonList = ({
  capturedPokemons,
  removeCapturedPokemon
}) => {
  return (
    <Box rounded='lg'>
      <Text color='white' fontSize='xl' fontWeight={600}>Pocket</Text>
      <Text color='white' fontSize='sm' fontWeight={300}>Max 5</Text>
    
      { capturedPokemons.map((capturedPokemon, i) => {
        return (
          <WrapItem
            key={i}  
            position='relative'>
            <Image
              m='auto'
              className='captured-pokemon'
              src={capturedPokemon?.image}/>
            <div
              onClick={() => { removeCapturedPokemon(i) }}  
              className='delete-btn'>
                &times;
            </div>
              
          </WrapItem>
        )}
      )}
    </Box>
  )
}

export default CapturedPokemonList
