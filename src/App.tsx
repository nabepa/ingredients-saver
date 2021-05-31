import './app.css';
import React, { useState } from 'react';
import UserItems from './components/user-items/user-items';
import SearchBar from './components/search-bar/search-bar';
import Spoonacular from './service/spoonacular';

type Props = {
  spoonacular: Spoonacular;
};

function App({ spoonacular }: Props): React.ReactElement {
  const [preItems, setPreItems] = useState<Ingredients>({});
  const [selectedItemIds, setSelectedItemIds] = useState(
    new Set<IngredientId>()
  );
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const addItem: AddItem = (item: Ingredient) => {
    setPreItems((prevState) => {
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

  const searchMenu = () => {
    if (preItems == null) {
      return;
    }
    spoonacular
      .getRecipesByIngredients(preItems) //
      .then((response) => {
        setRecipes(response);
      });
  };

  return (
    <div className='app'>
      <SearchBar addItem={addItem} />
      <UserItems
        preItems={preItems}
        selectedItemIds={selectedItemIds}
        selectItem={selectItem}
      />
      <button onClick={searchMenu}>api test</button>
      {recipes.map((recipe) => (
        <img src={recipe.image} alt={recipe.title} />
      ))}
    </div>
  );
}

export default App;
