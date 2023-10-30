import { Stack } from 'react-bootstrap';
import NavButton from './PokemonNavButton';
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
      {prevPageUrl ? < NavButton onClick={handlePrevButtonClick}>Prev</NavButton> : null}  
      {nextPageUrl ?  <NavButton onClick={handleNextButtonClick}>Next</NavButton> : null}
    </Stack>  
    )
}

export default PokemonNavButtons;