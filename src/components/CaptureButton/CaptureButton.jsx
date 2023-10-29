import { Button } from 'react-bootstrap';
import { usePokemonContext } from '../../context/PokemonContext';


const CaptureButton = () => {
  const {
    isCaptureButtonDisabled,
    handlePokemonCapture
  } = usePokemonContext();

  return (
      <Button
        className='w-100 mt-3'
        variant='success'
        disabled={isCaptureButtonDisabled}
        onClick={handlePokemonCapture} 
      >
        Capture
      </Button>
  )
}

export default CaptureButton
