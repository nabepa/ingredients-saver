import styles from './recipe-card.module.css';
import React, { useEffect, useState } from 'react';
import Item from '../item/item';

type Props = {
  key: RecipeId;
  recipe: Recipe;
  recipeInfo: RecipeInfo;
  addedItemIds: Set<IngredientId>;
};

const RecipeCard: React.FC<Props> = ({ recipe, recipeInfo, addedItemIds }) => {
  const [unselectedPreshopIds, setUnselectedPreshopIds] = useState(
    new Set<IngredientId>()
  );

  useEffect(() => {
    setUnselectedPreshopIds(() => {
      const newState = new Set<IngredientId>(unselectedPreshopIds);
      recipe.missedIngredients.forEach((item: Ingredient) => {
        if (addedItemIds.has(item.id.toString())) {
          newState.add(item.id);
        }
      });
      return newState;
    });
  }, [recipe, addedItemIds]);

  console.log(recipeInfo);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{recipe.title}</h2>
      <img className={styles.image} src={recipe.image} alt={recipe.title} />
      <ul className={styles.ul}>
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
      </ul>
      {recipeInfo ? (
        <a href={recipeInfo.sourceUrl} target='_blank'>
          Check Recipe
        </a>
      ) : (
        <span>Loading...</span>
      )}
      {/* <button>{recipeInfo.sourceUrl}</button> */}
    </div>
  );
};

export default RecipeCard;
