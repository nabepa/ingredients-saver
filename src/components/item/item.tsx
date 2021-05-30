// import styles from 'item.module.css'
import React from 'react';

type Props = { ingredient: Ingredient };

const Item: React.FC<Props> = ({ ingredient }) => {
  return (
    <li>
      <button>{ingredient.query}</button>
    </li>
  );
};

export default Item;
