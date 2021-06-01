import styles from './app.module.css';
import React, { useState } from 'react';
import UserItems from './components/user-items/user-items';
import SearchBar from './components/search-bar/search-bar';
import Spoonacular from './service/spoonacular';
import RecipeCard from './components/recipe-card/recipe-card';

type Props = {
  spoonacular: Spoonacular;
};

function App({ spoonacular }: Props): React.ReactElement {
  const [addedItems, setAddedItems] = useState<Ingredients>({});
  const [selectedItemIds, setSelectedItemIds] = useState(
    new Set<IngredientId>()
  );
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipeInfos, setRecipeInfos] = useState<RecipeInfo[]>([]);

  const addItem: AddItem = (item: Ingredient) => {
    setAddedItems((prevState) => {
      const newState = { ...prevState, [item.id]: item };
      return newState;
    });
  };

  const selectItem: SelectItem = (item: Ingredient) => {
    setSelectedItemIds((prevState) => {
      const newState = new Set<IngredientId>(prevState);
      if (newState.has(item.id)) {
        newState.delete(item.id);
      } else {
        newState.add(item.id);
      }

      return newState;
    });
  };

  const searchRecipes = () => {
    if (addedItems == null) {
      // alert
      return;
    }
    const selectedItems: Ingredients = {};
    selectedItemIds.forEach((key) => {
      selectedItems[key] = addedItems[key];
    });

    spoonacular
      .getRecipesByIngredients(selectedItems) //
      .then((response) => {
        setRecipes(response);
      });
  };

  const searchRecipeInfo = () => {
    const recipeIds: RecipeId[] = recipes.map((recipe: Recipe) => recipe.id);
    spoonacular
      .getRecipesInformation(recipeIds) //
      .then((response) => {
        console.log(response);
        setRecipeInfos(response);
      });
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <SearchBar addItem={addItem} />
      </header>
      <section className={styles.userItems}>
        <UserItems
          addedItems={addedItems}
          selectedItemIds={selectedItemIds}
          selectItem={selectItem}
        />
        <button onClick={searchRecipes}>Search Recipe</button>
      </section>
      <section className={styles.recipes}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            addedItemIds={new Set<IngredientId>(Object.keys(addedItems))}
          />
        ))}
      </section>
      <button onClick={searchRecipeInfo}>API Test</button>
    </div>
  );
}

export default App;
