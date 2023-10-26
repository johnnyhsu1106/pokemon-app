import { createContext, useContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const MAX_CAPTURED_POKEMONS_NUM = 5;
const PokemonContext = createContext(null);

const usePokemonContext = () => {
  const pokemonContext = useContext(PokemonContext);

  if (pokemonContext === null) {
    throw new Error('usePokemonContext must be used within PokemonProvider');
  }
  return pokemonContext;
}

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({});
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const isCaptureButtonDisabled = capturedPokemons.length >= MAX_CAPTURED_POKEMONS_NUM;
  
  useEffect(() => {
    fetchPokemon('1');
  }, []);

  const fetchPokemon = async (query) => {
    try {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`); 
      const data = await req.json();

      setPokemon({
        image: data?.sprites?.front_default,
        name: data?.name,
        order: data?.order,
        types: data?.types,
        stats: data?.stats
      });
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleCapturePokemon = () => {
    if (capturedPokemons.length > MAX_CAPTURED_POKEMONS_NUM) {
      return;
    }

    setCapturedPokemons((prevCapturedPokemons) => {
      return [...prevCapturedPokemons, {...pokemon, id: uuidv4()}];
    });
  };

  const handleSearchPokemon = (query) => {
    if (!query || query.trim() === '') {
      return;
    }

    fetchPokemon(query);
  };
  
  const handlePokemonRemove = (id) => {
    setCapturedPokemons((prevCapturedPokemons) => {
      return prevCapturedPokemons.filter((prevCapturedPokemon) => {
        return prevCapturedPokemon.id !== id;
      })
    });
  };

  const value = {
    pokemon,
    capturedPokemons,
    isCaptureButtonDisabled,
    handleSearchPokemon,
    handleCapturePokemon,
    handlePokemonRemove
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  )
}

export { usePokemonContext, PokemonProvider}
