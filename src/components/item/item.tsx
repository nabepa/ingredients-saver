// import styles from 'item.module.css'
import React from 'react';

type Props = { item: Ingredient; handdleClick: HanddleClickItem };

const Item: React.FC<Props> = ({ item, handdleClick }) => {
  const onClick = () => {
    handdleClick(item);
  };

  return <li onClick={onClick}>{item.name}</li>;
};

export default Item;
