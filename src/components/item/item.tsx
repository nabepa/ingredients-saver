import styles from './item.module.css';
import React from 'react';

type Props = {
  key: string | number;
  item: Ingredient;
  // bAdd?: boolean;
  bSelected?: boolean;
  handdleClick?: HanddleClickItem;
};

const Item: React.FC<Props> = ({ item, bSelected, handdleClick }) => {
  const onClick = () => {
    handdleClick && handdleClick(item);
  };

  return (
    <li
      className={`${styles.li} ${bSelected && getStyles(bSelected)}`}
      onClick={onClick}
    >
      {item.name}
    </li>
  );
};

function getStyles(bSelected: boolean) {
  if (bSelected) {
    return styles.selected;
  }
}

export default Item;
