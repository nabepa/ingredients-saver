// import styles from './search-bar.module.css';
import React, { useState } from 'react';
import Item from '../item/item';
import INGREDIENTS from './INGREDIENTS.json';

type Props = {};

const SearchBar: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.trim());
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Add a new ingredient'
        onChange={onChange}
      />
      <ul>
        {INGREDIENTS.filter((ingredient: Ingredient) => {
          if (searchTerm === '') {
            return false;
          } else if (
            ingredient.query.includes(searchTerm.toLocaleLowerCase())
          ) {
            return ingredient;
          }
        }).map((ingredient) => {
          return <Item key={ingredient.id} ingredient={ingredient} />;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
