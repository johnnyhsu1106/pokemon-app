import { Stack } from 'react-bootstrap';
import PokemonNavButton from './PokemonNavButton';
import { usePokemonContext } from '../../context/PokemonContext'

const PokemonNavButtons = () => {
  const {
    prevPageUrl,
    nextPageUrl,
    handlePrevButtonClick,
    handleNextButtonClick
  } = usePokemonContext();
  return (
    <Stack className='d-flex justify-content-between' direction='horizontal'>
      {prevPageUrl ? <PokemonNavButton onClick={handlePrevButtonClick}>Prev</PokemonNavButton> : null}  
      {nextPageUrl ? <PokemonNavButton onClick={handleNextButtonClick}>Next</PokemonNavButton> : null}
    </Stack>  
    )
}

export default PokemonNavButtons;