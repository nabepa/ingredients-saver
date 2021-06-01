import styles from './app.module.css';
import React, { useCallback, useEffect, useState } from 'react';
import UserItems from './components/user-items/user-items';
import SearchBar from './components/search-bar/search-bar';
import Spoonacular from './service/spoonacular';
import Recipes from './components/recipes/recipes';

type Props = {
  spoonacular: Spoonacular;
};

function App({ spoonacular }: Props): React.ReactElement {
  const [addedItems, setAddedItems] = useState<Ingredients>({});
  const [addedItemIds, setAddedItemIds] = useState(new Set<IngredientId>());
  const [selectedItemIds, setSelectedItemIds] = useState(
    new Set<IngredientId>()
  );
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipesInfo, setRecipesInfo] = useState<RecipesInfo>({});

  const addItem: AddItem = useCallback((item: Ingredient) => {
    setAddedItems((prevState) => {
      const newState = { ...prevState, [item.id]: item };
      return newState;
    });
  }, []);

  const removeItem: RemoveItem = useCallback((item: Ingredient) => {
    setAddedItems((prevState) => {
      const newState = { ...prevState };
      delete newState[item.id];
      return newState;
    });
  }, []);

  const selectItem: SelectItem = useCallback((item: Ingredient) => {
    setSelectedItemIds((prevState) => {
      const newState = new Set<IngredientId>(prevState);
      if (newState.has(item.id)) {
        newState.delete(item.id);
      } else {
        newState.add(item.id);
      }

      return newState;
    });
  }, []);

  const searchRecipes = () => {
    if (addedItems == null) {
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

  useEffect(() => {
    const recipeIds: RecipeId[] = recipes.map((recipe: Recipe) => recipe.id);
    spoonacular
      .getRecipesInformation(recipeIds) //
      .then((response) => {
        const newRecipesInfo: RecipesInfo = {};
        response.forEach((recipeInfo) => {
          newRecipesInfo[recipeInfo.id] = recipeInfo;
        });
        setRecipesInfo(newRecipesInfo);
      });
  }, [recipes]);

  useEffect(() => {
    setAddedItemIds(new Set(Object.keys(addedItems)));
  }, [addedItems]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <i className={`${styles.logo} material-icons`}>kitchen</i>
        <h1 className={styles.title}>Ingredients Saver</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.searchBar}>
            <SearchBar addItem={addItem} addedItemIds={addedItemIds} />
          </section>
          <section className={styles.userItems}>
            <UserItems
              addedItems={addedItems}
              selectedItemIds={selectedItemIds}
              removeItem={removeItem}
              selectItem={selectItem}
            />
          </section>
          <button
            className={`${styles.button} ${styles.searchButton}`}
            onClick={searchRecipes}
          >
            Search Recipe
          </button>
        </div>
        <div className={styles.container}>
          <section className={styles.recipes}>
            <Recipes
              recipes={recipes}
              recipesInfo={recipesInfo}
              addedItemIds={addedItemIds}
            />
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <p className={styles.copyright}>Created by Nabepa. &copy; 2021</p>
      </footer>
    </div>
  );
}

export default App;
