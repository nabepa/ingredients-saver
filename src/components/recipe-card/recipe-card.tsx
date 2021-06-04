import styles from './recipe-card.module.css';
import React, { memo, useEffect, useState } from 'react';
import Item from '../item/item';

type Props = {
  key: RecipeId;
  recipe: Recipe;
  recipeInfo: RecipeInfo;
  addedItemIds: Set<IngredientId>;
  selectedItemIds: Set<IngredientId>;
};

const RecipeCard: React.FC<Props> = memo(
  ({ recipe, recipeInfo, addedItemIds, selectedItemIds }) => {
    const [selectedPreshopItems, setSelectedPreshopItems] = useState<
      Ingredient[]
    >([]);
    const [unselectedPreshopItems, setUnselectedPreshopItems] = useState<
      Ingredient[]
    >([]);
    const [postshopItems, setPostshopItems] = useState<Ingredient[]>([]);

    useEffect(() => {
      const newSelectedPreshopItems: Ingredient[] = [];
      const newUnselectedPreshopItems: Ingredient[] = [];
      const newPostshopItems: Ingredient[] = [];

      // recipe.usedIngredients: selected ingredients for the recipe when it searched
      // recipe.missedIngredients: unselected ingredients for the recipe when it searched
      recipe.usedIngredients.forEach((ingredient) => {
        if (selectedItemIds.has(ingredient.id.toString())) {
          newSelectedPreshopItems.push(ingredient);
        } else if (addedItemIds.has(ingredient.id.toString())) {
          newUnselectedPreshopItems.push(ingredient);
        } else {
          newPostshopItems.push(ingredient);
        }
      });
      recipe.missedIngredients.forEach((ingredient) => {
        if (selectedItemIds.has(ingredient.id.toString())) {
          newSelectedPreshopItems.push(ingredient);
        } else if (addedItemIds.has(ingredient.id.toString())) {
          newUnselectedPreshopItems.push(ingredient);
        } else {
          newPostshopItems.push(ingredient);
        }
      });

      setSelectedPreshopItems(newSelectedPreshopItems);
      setUnselectedPreshopItems(newUnselectedPreshopItems);
      setPostshopItems(newPostshopItems);
    }, [recipe, recipeInfo, addedItemIds, selectedItemIds]);

    return (
      <div className={styles.card}>
        <h2 className={styles.title}>{recipe.title}</h2>
        <img className={styles.image} src={recipe.image} alt={recipe.title} />
        <ul className={styles.ul}>
          {selectedPreshopItems.map((item) => (
            <Item key={item.id} item={item} itemState='Selected' />
          ))}
          {unselectedPreshopItems.map((item) => (
            <Item key={item.id} item={item} itemState='Added' />
          ))}
          {postshopItems.map((item) => (
            <Item key={item.id} item={item} itemState='Missed' />
          ))}
        </ul>
        <div className={styles.linkContainer}>
          {recipeInfo ? (
            <a
              className={styles.link}
              href={recipeInfo.sourceUrl}
              rel='noreferrer'
              target='_blank'
            >
              Check Recipe
            </a>
          ) : (
            <p className={styles.loading}></p>
          )}
        </div>
      </div>
    );
  }
);

export default RecipeCard;
