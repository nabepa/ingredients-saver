import styles from './item.module.css';
import React, { memo, SyntheticEvent } from 'react';

type Props = {
  key: string | number;
  item: Ingredient;
  itemState?: ItemState;
  removeItem?: RemoveItem;
  handdleClick?: HanddleClickItem;
};

const Item: React.FC<Props> = memo(
  ({ item, itemState, removeItem, handdleClick }) => {
  const onClick = () => {
    handdleClick && handdleClick(item);
  };
  
  const handdleRemove = (event:SyntheticEvent) => {
    event.stopPropagation();
    removeItem && removeItem(item);
  }

  return (
    <li
      className={`${styles.li} ${itemState && getStyles(itemState)}`}
      onClick={onClick}
    >
      {
        itemState && 
          <i className={`${styles.icon} material-icons`} onClick={handdleRemove}>
            {getIcons(itemState)}
          </i>
      }
      <span className={styles.name}>{item.name}</span>
    </li>
  );
});

function getStyles(itemState:ItemState) {
  switch(itemState) {
    case 'Filtered':
      return styles.filtered;
    case 'Used':
      return styles.used;
    case 'Unused':
      return styles.unused;
    case 'Added':
        return styles.added;
    case 'Selected':
      return styles.selected;
    case 'Missed':
      return styles.missed;
    default:
      throw new Error(`unknown itemState: ${itemState}`);
  }
}

function getIcons(itemState:ItemState) {
  switch(itemState) {
    case 'Filtered':
      return '';
    case 'Used':
    case 'Unused':
      return 'delete_outline';
    case 'Added':
      return 'kitchen';
    case 'Selected':
      return 'done';
    case 'Missed':
      return 'shopping_cart';
    default:
      throw new Error(`unknown itemState: ${itemState}`);
  }
}

export default Item;
