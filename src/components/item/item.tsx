import styles from './item.module.css';
import React from 'react';

type Props = {
  key: string | number;
  item: Ingredient;
  itemState?: ItemState;
  handdleClick?: HanddleClickItem;
};

const Item: React.FC<Props> = ({ item, itemState, handdleClick }) => {
  const onClick = () => {
    handdleClick && handdleClick(item);
  };

  return (
    <li
      className={`${styles.li} ${itemState && getStyles(itemState)}`}
      onClick={onClick}
    >
      {item.id}
      {item.name}
    </li>
  );
};

function getStyles(itemState:ItemState) {
  switch(itemState) {
    case 'Filtered':
      return styles.filtered;
    case 'Added':
        return styles.added;
    case 'Selected':
      return styles.selected;
    case 'Used':
      return styles.used;
    case 'Unused':
      return styles.unused;
    case 'Missed':
      return styles.missed;
    default:
      throw new Error(`unknown itemState: ${itemState}`);
  }
}

export default Item;
