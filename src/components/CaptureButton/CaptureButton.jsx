import { Box, Button } from '@chakra-ui/react';
import { usePokemonContext } from '../../context/PokemonContext';


const CaptureButton = () => {
  const {
    isCaptureButtonDisabled,
    handleCapturePokemon
  } = usePokemonContext();


  return (
    <Box>
      <Button
        isDisabled={isCaptureButtonDisabled}
        onClick={handleCapturePokemon} 
        borderWidth={4} 
        borderColor='#333'
        rounded={10}
      >
        Capture
      </Button>
    </Box>
  )
}

export default CaptureButton
