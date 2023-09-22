import {
  Box,
  Image,
} from '@chakra-ui/react';

const PokemonImage = ({ image }) => {
  // if (!image) {
  //   return null;
  // }

  return (
  <Box>
    <Box bg='gray.100' rounded='lg'>
      {image && <Image src={image}/>}
    </Box>
  </Box>
  )
}

export default PokemonImage
