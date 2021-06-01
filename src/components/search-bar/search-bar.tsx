import styles from './search-bar.module.css';
import React, { useEffect, useState } from 'react';
import Item from '../item/item';
import INGREDIENTS from '../../common/INGREDIENTS.json';

type Props = { addItem: AddItem };

const SearchBar: React.FC<Props> = ({ addItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState<Ingredient[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.trim());
  };

  const handdleClick: HanddleClickItem = (item) => {
    addItem(item);
    setSearchTerm('');
  };

  useEffect(() => {
    const newFiltered: Ingredient[] = INGREDIENTS.filter(
      (ingredient: Ingredient) => {
        if (searchTerm === '') {
          return false;
        } else if (ingredient.name.includes(searchTerm.toLocaleLowerCase())) {
          return ingredient;
        }
      }
    );

    setFiltered(newFiltered);
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <div className={styles.headerBar}>
        <i className={`material-icons`}>kitchen</i>
        <input
          className={styles.input}
          value={searchTerm}
          type='text'
          placeholder='Add a new item'
          onChange={onChange}
        />
        <i className={`material-icons`}>search</i>
      </div>
      <ul className={styles.filtered}>
        {filtered.map((item) => {
          return <Item key={item.id} item={item} handdleClick={handdleClick} />;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
