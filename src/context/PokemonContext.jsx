import { createContext, useContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const API_ENDPOINT_BASE = 'https://pokeapi.co/api/v2/pokemon';
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
  const [pokemonNameList, setPokemonNameList] = useState([]);
  const [currPageUrl, setCurrPageUrl] = useState(API_ENDPOINT_BASE);
  const [prevPageUrl, setPrevPageUrl] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState('');
  
  const [pokemonName, setPokemonName] = useState('bulbasaur');
  // const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [pokemon, setPokemon] = useState({
    id: null,
    name: null,
    order: null,
    image: null,
    types: null,
    stats: null
  });

  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const isCaptureButtonDisabled = capturedPokemons.length >= MAX_CAPTURED_POKEMONS_NUM || isError;
  

  useEffect(() => {
    console.log('pokemon' , pokemon);
  },[pokemon]);

  useEffect(() => {
    fetchPokemon(pokemonName);
  }, [pokemonName]);


  useEffect(() => {
    const controller = new AbortController();
    const fetchPokemons = async () => {
      try {
        const res = await fetch(currPageUrl);
        if (!res.ok) {
          throw new Error('Invalid HTTP Status Code');
        }
        const data = await res.json();
        setPokemonNameList(data?.results.map((result) => result.name));
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


  const fetchPokemon = async (name) => {
    setIsError(false);
    // setIsLoading(true);
    try {
      const req = await fetch(`${API_ENDPOINT_BASE}/${name}`); 
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
      
    } catch (err) {
      setIsError(true);
      setPokemon(null);
      console.error('error happen');
    }
  };

  const handlePokemonSelect = (name) => {
    setPokemonName(name);
  };

  const handlePokemonCapture = () => {
    if (capturedPokemons.length > MAX_CAPTURED_POKEMONS_NUM) {
      return;
    }

    setCapturedPokemons((prevCapturedPokemons) => {
      return [...prevCapturedPokemons, {...pokemon, capturedId: uuidv4() }];
    });
  };

  const handlePokemonSearch = (name) => {
    if (!name || name.trim() === '') {
      return;
    }

    setPokemonName(name);
  };

  const handlePokemonInspect = (id) => {
    const capturedPokemon = capturedPokemons.find((capturedPokemon) => {
      return capturedPokemon.id === id;
    });

    const {capturedId, ...pokemon} = capturedPokemon
    setPokemon(pokemon);
  };
  
  const handlePokemonRemove = (capturedId) => {
    console.log('remove pokemon id ', capturedId);
    setCapturedPokemons((prevCapturedPokemons) => {
      return prevCapturedPokemons.filter((prevCapturedPokemon) => {
        return prevCapturedPokemon.capturedId !== capturedId;
      })
    });
  };


  const handlePrevButtonClick = () => {
    setCurrPageUrl(prevPageUrl);
  };

  const handleNextButtonClick = () => {
    setCurrPageUrl(nextPageUrl);
  };

  const value = {
    // isLoading,
    isError,
    pokemon,
    pokemonNameList,
    prevPageUrl,
    nextPageUrl,
    capturedPokemons,
    isCaptureButtonDisabled,
    MAX_CAPTURED_POKEMONS_NUM,
    handlePrevButtonClick,
    handleNextButtonClick,
    handlePokemonSearch,
    handlePokemonSelect,
    handlePokemonCapture,
    handlePokemonRemove,
    handlePokemonInspect
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  )
}

export { usePokemonContext, PokemonProvider}
