import React, { useState } from 'react';
import './app.css';
import ListAtHand from './components/list-at-hand/list-at-hand';
import SearchBar from './components/search-bar/search-bar';

type Ingredient = { query: string; id: number };
// type PreShopping = { id: string; ingredient: Ingredient };
type PreShopping = { [id: number]: Ingredient };

function App() {
  // const [ingredients, setIngredients] = useState<PreShopping>({id: '1', {}});
  const [ingredients, setIngredients] = useState<PreShopping>({});

  return (
    <div className='app'>
      <SearchBar />
      <ListAtHand />
    </div>
  );
}

export default App;
