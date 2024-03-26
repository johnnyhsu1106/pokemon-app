import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PokemonNavButton = ({
  children,
  onClick
}) => {
  return (
    <Button
      className='px-4' 
      variant='light' onClick={onClick}>{children}</Button> 
  )
};

PokemonNavButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired
};

export default PokemonNavButton;
