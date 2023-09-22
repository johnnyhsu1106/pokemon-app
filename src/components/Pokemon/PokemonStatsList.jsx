import { HStack } from '@chakra-ui/react';
import PokemonStats from './PokemonStats';


const STATS_NAMES = [
  'Hp', 
  'Attack', 
  'Defense', 
  'Special-attack', 
  'Special-defense', 
  'Speed'
];

const PokemonStatsList = ({ stats }) => {
  if (!stats) {
    return null;
  }
  
  return (
    <HStack color='white'>
      {
        STATS_NAMES.map((STATS_NAME, i) => {
          if (i === 3 || i === 4) {
           return null;
          }
          return (
            <PokemonStats 
              key={i} 
              name={STATS_NAME} 
              baseStats={ stats[i].base_stat} />
          )
        })
      }
    </HStack>
  )
}

export default PokemonStatsList;
