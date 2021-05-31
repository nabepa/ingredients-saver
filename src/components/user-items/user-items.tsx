import React from 'react';
import Item from '../item/item';

type Props = { preItems: Ingredients };
const UserItems: React.FC<Props> = ({ preItems }) => (
  <ul>
    {Object.keys(preItems).map((id) => (
      <Item key={id} item={preItems[id]} />
    ))}
  </ul>
);

export default UserItems;
