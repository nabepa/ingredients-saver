import React, { useState } from 'react';
import INGREDIENTS from './INGREDIENTS.json';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Add a new ingredient'
        onChange={onChange}
      />
      {INGREDIENTS.filter((ingredient) => {
        if (searchTerm === '') {
          return false;
        } else if (ingredient.query.includes(searchTerm.toLocaleLowerCase())) {
          return ingredient;
        }
      }).map((ingredient) => {
        return (
          <div>
            <p>{ingredient.query}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBar;
