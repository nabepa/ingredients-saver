import React from 'react';
import Item from '../item/item';

type Props = {
  preItems: Ingredients;
  selectedItemIds: Set<IngredientId>;
  selectItem: SelectItem;
};

const UserItems: React.FC<Props> = ({
  preItems,
  selectedItemIds,
  selectItem,
}) => {
  const handdleClick = (item: Ingredient) => {
    selectItem(item);
  };

  return (
    <ul>
      {Object.keys(preItems).map((id) => (
        <Item
          key={id}
          item={preItems[id]}
          itemState={selectedItemIds.has(id) ? 'Selected' : 'Added'}
          handdleClick={handdleClick}
        />
      ))}
    </ul>
  );
};

export default UserItems;
