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
      {
        itemState && 
          <i className="material-icons">
            {getIcons(itemState)}
          </i>
      }
      <span className={styles.name}>{item.name}</span>
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

function getIcons(itemState:ItemState) {
  switch(itemState) {
    // case 'Filtered':
    //   return styles.filtered;
    case 'Added':
      return 'check';
    case 'Selected':
      return 'done_all';
    // case 'Used':
    //   return styles.used;
    // case 'Unused':
    //   return styles.unused;
    case 'Missed':
      return 'shopping_cart';
    default:
      throw new Error(`unknown itemState: ${itemState}`);
  }
}

export default Item;
