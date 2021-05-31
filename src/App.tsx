import './app.css';
import React, { useState } from 'react';
import ListAtHand from './components/list-at-hand/list-at-hand';
import SearchBar from './components/search-bar/search-bar';
import Spoonacular from './service/spoonacular';

type Props = {
  spoonacular: Spoonacular;
};

function App({ spoonacular }: Props): React.ReactElement {
  const [preItems, setPreItems] = useState<Ingredients>({});
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const addItem: AddItem = (ingredient: Ingredient) => {
    setPreItems((prevState) => {
      const newState = { ...prevState, [ingredient.id]: ingredient };
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
      <h1>Up</h1>
      {preItems &&
        Object.keys(preItems).map((id) => <h2>{preItems[id].name}</h2>)}
      <h1>Down</h1>
      <SearchBar addItem={addItem} />
      <ListAtHand />
      <button onClick={searchMenu}>api test</button>
      {recipes.map((recipe) => (
        <img src={recipe.image} alt={recipe.title} />
      ))}
    </div>
  );
}

export default App;
