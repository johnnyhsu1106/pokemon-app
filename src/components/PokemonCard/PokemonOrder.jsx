import PropTypes from 'prop-types';


const PokemonOrder = ({ order }) => {
  if (!order) {
    return null;
  }
  
  return (
    <p>Order: {order}</p>
  );
}

PokemonOrder.propTypes = {
  order: PropTypes.number.isRequired
};

export default PokemonOrder;
