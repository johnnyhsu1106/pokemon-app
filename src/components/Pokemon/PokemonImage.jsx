import { Image } from 'react-bootstrap';

const PokemonImage = ({ image }) => {
  if (!image) {
    return null;
  }

  return (
    image ? <Image src={image}/> : null
  )
}

export default PokemonImage;
