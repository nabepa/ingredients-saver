// import styles from './search-bar.module.css';
import React, { useState } from 'react';
import Item from '../item/item';
import INGREDIENTS from '../../common/INGREDIENTS.json';

type Props = { addItem: addItem };

const SearchBar: React.FC<Props> = ({ addItem }) => {
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
          } else if (ingredient.name.includes(searchTerm.toLocaleLowerCase())) {
            return ingredient;
          }
        }).map((ingredient) => {
          return (
            <Item
              key={ingredient.id}
              ingredient={ingredient}
              addItem={addItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
