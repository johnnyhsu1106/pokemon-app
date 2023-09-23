import React, { useState } from 'react'
import {
  Button,
  HStack,
  Input,
  FormControl
} from '@chakra-ui/react';


const SearchBar = ({
  onSubmitSearchForm
}) => {
  const [query, setQuery] = useState('');

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    onSubmitSearchForm(query);
    setQuery('');
  };

  return (
    <HStack mb={10}>
      <form
        className='search-form' 
        onSubmit={handleSearchButtonClick}>
        <FormControl>
          <Input
            type='text'
            borderWidth={4}
            borderColor='white'
            bg='white'
            placeholder='name or id'
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
          />
        </FormControl>
        <Button
          type='submit'
          ml={3}
          borderWidth={4} 
          borderColor='white'
        >
          Search
        </Button>

      </form>
  </HStack>
  )
}

export default SearchBar;
