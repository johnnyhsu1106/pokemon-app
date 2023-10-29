import { Stack } from 'react-bootstrap';
import NavButton from './NavButton';
import { usePokemonContext } from '../../context/PokemonContext'

const NavButtons = () => {
  const {
    prevPageUrl,
    nextPageUrl,
    handlePrevButtonClick,
    handleNextButtonClick
  } = usePokemonContext();
  return (
    <Stack className='d-flex justify-content-between' direction='horizontal' ga>
      {prevPageUrl ? < NavButton onClick={handlePrevButtonClick}>Prev</NavButton> : null}  
      {nextPageUrl ?  <NavButton onClick={handleNextButtonClick}>Next</NavButton> : null}
    </Stack>  
    )
}

export default NavButtons;