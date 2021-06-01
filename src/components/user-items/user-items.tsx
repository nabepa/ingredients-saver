import styles from './user-items.module.css';
import React from 'react';
import Item from '../item/item';

type Props = {
  addedItems: Ingredients;
  selectedItemIds: Set<IngredientId>;
  selectItem: SelectItem;
};

const UserItems: React.FC<Props> = ({
  addedItems,
  selectedItemIds,
  selectItem,
}) => {
  const handdleClick = (item: Ingredient) => {
    selectItem(item);
  };

  return (
    <>
      <h2 className={styles.title}>My List</h2>
      <ul className={styles.list}>
        {Object.keys(addedItems).map((id) => (
          <Item
            key={id}
            item={addedItems[id]}
            itemState={selectedItemIds.has(id) ? 'Selected' : ''}
            handdleClick={handdleClick}
          />
        ))}
      </ul>
    </>
  );
};

export default UserItems;
