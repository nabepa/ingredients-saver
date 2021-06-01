import styles from './recipe-card.module.css';
import React, { useEffect, useState } from 'react';
import Item from '../item/item';

type Props = { key: RecipeId; recipe: Recipe; addedItemIds: Set<IngredientId> };

const RecipeCard: React.FC<Props> = ({ recipe, addedItemIds }) => {
  const [unselectedPreshopIds, setUnselectedPreshopIds] = useState(
    new Set<IngredientId>()
  );

  useEffect(() => {
    setUnselectedPreshopIds(() => {
      const newState = new Set<IngredientId>(unselectedPreshopIds);
      console.log('----');
      console.log(addedItemIds);
      recipe.missedIngredients.forEach((item: Ingredient) => {
        console.log(item.id);

        if (addedItemIds.has(item.id.toString())) {
          newState.add(item.id);
        }
      });
      return newState;
    });

    console.log(unselectedPreshopIds);
  }, [recipe, addedItemIds]);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{recipe.title}</h2>
      <img className={styles.image} src={recipe.image} alt={recipe.title} />
      {recipe.usedIngredients.map((item: Ingredient) => (
        <Item key={item.id} item={item} itemState='Selected' />
      ))}
      {recipe.missedIngredients.map((item: Ingredient) => {
        if (unselectedPreshopIds.has(item.id)) {
          return <Item key={item.id} item={item} itemState='Added' />;
        } else {
          return <Item key={item.id} item={item} itemState='Missed' />;
        }
      })}

      {/* {recipe.usedIngredients.map((item: Ingredient) => (
        <Item key={item.id} item={item} itemState={'Used'} />
      ))} */}
      {/* {recipe.unusedIngredients.map((item: Ingredient) => (
        <Item key={item.id} item={item} itemState={'Unused'} />
      ))} */}
      {/* {recipe.missedIngredients.map((item: Ingredient) => (
        <Item key={item.id} item={item} itemState={'Missed'} />
      ))} */}
    </div>
  );
};

export default RecipeCard;
