import React, { useState } from 'react';
import './app.css';
import ListAtHand from './components/list-at-hand/list-at-hand';
import SearchBar from './components/search-bar/search-bar';

function App() {
  const [preItems, setPreItems] = useState<Ingredients>();

  const addItem: addItem = (ingredient: Ingredient) => {
    setPreItems((prevState) => {
      const newState = { ...prevState, [ingredient.id]: ingredient };
      return newState;
    });
  };

  return (
    <div className='app'>
      <h1>Up</h1>
      {preItems &&
        Object.keys(preItems).map((id) => <h2>{preItems[id].query}</h2>)}
      <h1>Down</h1>
      <SearchBar addItem={addItem} />
      <ListAtHand />
    </div>
  );
}

export default App;
