import styles from './search-bar.module.css';
import React, { memo, useCallback, useEffect, useState } from 'react';
import Item from '../item/item';
import INGREDIENTS from '../../common/INGREDIENTS.json';

type Props = { addItem: AddItem; addedItemIds: Set<IngredientId> };

const SearchBar: React.FC<Props> = memo(({ addItem, addedItemIds }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState<Ingredient[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.trimLeft());
  };

  const handdleClick: HanddleClickItem = useCallback(
    (item) => {
      addItem(item);
      setSearchTerm('');
    },
    [addItem]
  );

  useEffect(() => {
    const newFiltered: Ingredient[] = INGREDIENTS.filter(
      (ingredient: Ingredient) => {
        if (searchTerm === '') {
          return false;
        } else if (ingredient.name.includes(searchTerm.toLocaleLowerCase())) {
          if (!addedItemIds.has(ingredient.id)) {
            return true;
          }
        }
        return false;
      }
    );

    setFiltered(newFiltered);
  }, [searchTerm, addedItemIds]);

  return (
    <div className={styles.container}>
      <div className={styles.headerBar}>
        <input
          className={styles.input}
          value={searchTerm}
          type='text'
          placeholder='Add a new item'
          onChange={onChange}
        />
        <ul className={styles.filtered}>
          {filtered.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                itemState='Filtered'
                handdleClick={handdleClick}
              />
            );
          })}
        </ul>
      </div>
      <i className={`${styles.icon} material-icons`}>search</i>
    </div>
  );
});

export default SearchBar;
