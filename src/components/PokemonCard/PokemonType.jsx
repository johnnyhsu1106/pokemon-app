import { Badge } from 'react-bootstrap'

const PokemonType = ({ type }) => {
  return (
    <h5><Badge className='pokemon-type'>{type}</Badge></h5>
  )
}

export default PokemonType;
