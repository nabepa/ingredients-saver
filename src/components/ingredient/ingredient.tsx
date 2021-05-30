import React from 'react';

type IngredientProps = {
  query: string;
};

const Ingredient = ({ query }: IngredientProps) => {
  const onClick = (): void => {
    console.log('click');
  };

  return (
    <li>
      <button onClick={onClick}>{query}</button>
    </li>
  );
};

export default Ingredient;
