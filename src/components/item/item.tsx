// import styles from 'item.module.css'
import React from 'react';

type Props = { ingredient: Ingredient; addItem: addItem };

const Item: React.FC<Props> = ({ ingredient, addItem }) => {
  const onClick = () => {
    addItem(ingredient);
  };

  return (
    <li>
      <button onClick={onClick}>{ingredient.name}</button>
    </li>
  );
};

export default Item;
