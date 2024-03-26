import { Badge } from 'react-bootstrap'
import PropTypes from 'prop-types';


const PokemonType = ({ type }) => {
  if (!type) {
    return null;
  }

  return (
    <h5><Badge className='pokemon-type'>{type}</Badge></h5>
  )
};

PokemonType.propTypes = {
  type: PropTypes.string.isRequired
};


export default PokemonType;
