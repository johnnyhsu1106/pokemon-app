import { Text } from '@chakra-ui/react';


const PokemonOrder = ({ order }) => {
  if (!order) {
    return null;
  }
  
  return (
    <Text color='white' fontSize='md' fontWeight={600}>
      #{order}
    </Text>
  );
}

export default PokemonOrder;
