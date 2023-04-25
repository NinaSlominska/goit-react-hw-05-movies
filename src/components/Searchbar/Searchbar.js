import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  Input,
  SearchButton,
  SearchForm,
} from './Searchbar.styled';
import { useSearchParams } from 'react-router-dom';
export const Searchbar = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const [searchValue, setSearchValue] = useState(search);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(searchValue);
    searchValue && onSubmit(searchValue);
  };
  const onChange = event => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <SearchbarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">search</SearchButton>
        <Input
          onChange={onChange}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
