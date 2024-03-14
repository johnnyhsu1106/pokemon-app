import { Button } from 'react-bootstrap';

const PokemonNavButton = ({
  children,
  onClick
}) => {
  return (
    <Button
      className='px-4' 
      variant='light' onClick={onClick}>{children}</Button> 
  )
}

export default PokemonNavButton;
