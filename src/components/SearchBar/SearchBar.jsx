import React, { useRef, useState } from 'react'
import {
  Button,
  HStack,
  Input,
  FormControl
} from '@chakra-ui/react';


const SearchBar = ({
  onSubmitSearchForm
}) => {
  const inputRef = useRef(null);

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    onSubmitSearchForm(inputRef.current.value);
    inputRef.current.value = '';
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
            ref={inputRef}
          />
        </FormControl>
        <Button
          rounded={10}
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
