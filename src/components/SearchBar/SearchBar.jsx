import React, { useState } from 'react'
import {
  Button,
  HStack,
  Input,
} from '@chakra-ui/react';


const SearchBar = ({
  onClickSearchButton
}) => {
  const [query, setQuery] = useState('');

  const handleSearchButtonClick = () => {
    onClickSearchButton(query);
    setQuery('');
  };

  return (
    <HStack>
      <Input
        borderWidth={4}
        borderColor='red.800'
        bg='white'
        placeholder='name or id'
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}
      />
      <Button
        onClick={ handleSearchButtonClick } 
        borderWidth={4} borderColor='red.800'>
        Search
      </Button>
  </HStack>
  )
}

export default SearchBar;
