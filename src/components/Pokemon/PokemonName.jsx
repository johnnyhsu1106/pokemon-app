const PokemonName = ({ name }) => {
  if (!name) {
    return null;
  }
  
  return (
    <h3>{name}</h3>
  )
}

export default PokemonName;
