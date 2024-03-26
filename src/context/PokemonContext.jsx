import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const API_ENDPOINT_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const MAX_CAPTURED_POKEMONS_NUM = 5;
const DEFAULT_POKEMON_NAME = 'bulbasaur';

const PokemonContext = createContext(null);

const usePokemonContext = () => {
  const pokemonContext = useContext(PokemonContext);

  if (pokemonContext === null) {
    throw new Error('usePokemonContext must be used within PokemonProvider');
  }
  return pokemonContext;
}

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({}); // pokemon is the selected pokemon
  const [selectedPokemonName, setSelectedPokemonName] = useState(DEFAULT_POKEMON_NAME);
  const [pokemonNavNames, setPokemonNavNames] = useState([]);
  const [currPageUrl, setCurrPageUrl] = useState(API_ENDPOINT_BASE_URL);
  const [prevPageUrl, setPrevPageUrl] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const isCaptureButtonDisabled = capturedPokemons.length >= MAX_CAPTURED_POKEMONS_NUM || isError;

  useEffect(() => {
    const controller = new AbortController();
    const fetchPokemon = async (name) => {
      setIsLoading(true);
      setIsError(false);
      try {
        const req = await fetch(`${API_ENDPOINT_BASE_URL}/${name}`); 
        if (!req.ok) {
          throw new Error('Cound not find this pokemon');
        }
        const data = await req.json();
        setPokemon({
          id: data?.id,
          name: data?.name,
          thumbnail: data?.sprites?.front_default,
          image: data?.sprites?.other?.['official-artwork']?.front_default,
          order: data?.order,
          types: data?.types,
          stats: data?.stats
        });

        setIsError(false);
        
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }
        setIsError(true);
        setPokemon({});
        console.error('error happen');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon(selectedPokemonName);

    return () => {
      controller.abort();
    };
  }, [selectedPokemonName]);


  useEffect(() => {
    const controller = new AbortController();
    const fetchPokemons = async () => {
      try {
        const res = await fetch(currPageUrl);
        if (!res.ok) {
          throw new Error('Invalid HTTP Status Code');
        }
        const data = await res.json();
        setPokemonNavNames(data?.results.map((result) => result.name));
        setPrevPageUrl(data?.previous);
        setNextPageUrl(data?.next);
  
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }
        console.error(err); 
      }
    };


    fetchPokemons();

    return () => {
      controller.abort();
    };
  }, [currPageUrl]);


  const handlePokemonSearch = (name) => {
    if (!name || name.trim() === '') {
      return;
    }

    setSelectedPokemonName(name);
  };

  const handlePokemonSelect = (name) => {
    setSelectedPokemonName(name);
  };

  const handlePrevButtonClick = () => {
    setCurrPageUrl(prevPageUrl);
  };

  const handleNextButtonClick = () => {
    setCurrPageUrl(nextPageUrl);
  };

  const handlePokemonCapture = (pokemon) => {
    if (capturedPokemons.length > MAX_CAPTURED_POKEMONS_NUM) {
      return;
    }
``
    setCapturedPokemons((prevCapturedPokemons) => {
      return [...prevCapturedPokemons, {...pokemon, capturedId: uuidv4() }];
    });
  };


  const handlePokemonInspect = (name) => {
    setSelectedPokemonName(name)
  };
  
  const handlePokemonRemove = (capturedId) => {
    setCapturedPokemons((prevCapturedPokemons) => {
      return prevCapturedPokemons.filter((prevCapturedPokemon) => {
        return prevCapturedPokemon.capturedId !== capturedId;
      })
    });
  };

  const handlePokemonsClear = () => {
    setCapturedPokemons([]);  
  };

  const value = {
    isLoading,
    isError,
    pokemon,
    selectedPokemonName,
    pokemonNavNames,
    prevPageUrl,
    nextPageUrl,
    capturedPokemons,
    isCaptureButtonDisabled,
    MAX_CAPTURED_POKEMONS_NUM,
    handlePokemonSearch,
    handlePokemonSelect,
    handlePrevButtonClick,
    handleNextButtonClick,
    handlePokemonCapture,
    handlePokemonInspect,
    handlePokemonRemove,
    handlePokemonsClear
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  )
};

PokemonProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export { usePokemonContext, PokemonProvider}
