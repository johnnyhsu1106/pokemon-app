const PokemonOrder = ({ order }) => {
  if (!order) {
    return null;
  }
  
  return (
    <p>Order: {order}</p>
  );
}

export default PokemonOrder;
