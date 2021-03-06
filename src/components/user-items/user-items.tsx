import styles from './user-items.module.css';
import React, { memo, useCallback } from 'react';
import Item from '../item/item';

type Props = {
  addedItems: Ingredients;
  selectedItemIds: Set<IngredientId>;
  selectItem: SelectItem;
  removeItem: RemoveItem;
};

const UserItems: React.FC<Props> = memo(
  ({ addedItems, selectedItemIds, removeItem, selectItem }) => {
    const handdleClick = useCallback(
      (item: Ingredient) => {
        selectItem(item);
      },
      [selectItem]
    );

    return (
      <>
        <h2 className={styles.title}>My List</h2>
        <ul className={styles.list}>
          {Object.keys(addedItems).map((id) => (
            <Item
              key={id}
              item={addedItems[id]}
              itemState={selectedItemIds.has(id) ? 'Used' : 'Unused'}
              removeItem={removeItem}
              handdleClick={handdleClick}
            />
          ))}
        </ul>
      </>
    );
  }
);

export default UserItems;
