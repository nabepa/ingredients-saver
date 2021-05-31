import styles from './recipe-card.module.css';
import React from 'react';
import Item from '../item/item';

type Props = { recipe: Recipe };

const RecipeCard: React.FC<Props> = ({ recipe }) => (
  <div className={styles.card}>
    <h2 className={styles.title}>{recipe.title}</h2>
    <img className={styles.image} src={recipe.image} alt={recipe.title} />
    <h3>Used</h3>
    {recipe.usedIngredients.map((item: Ingredient) => (
      <Item key={item.id} item={item} />
    ))}
    <h3>Unused</h3>
    {recipe.unusedIngredients.map((item: Ingredient) => (
      <Item key={item.id} item={item} />
    ))}
    <h3>Missed</h3>
    {recipe.missedIngredients.map((item: Ingredient) => (
      <Item key={item.id} item={item} />
    ))}
  </div>
);

export default RecipeCard;
