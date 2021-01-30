import React, { useEffect, useState } from 'react';
import './App.css';
import RecepieComp from "./RecipeComponent";

const App = () => {

  const APP_ID = '62147582';
  const APP_KEY = '5cb9ede3820d010c94585a03913a0a1c';

  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [query]);



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" onClick={() => setCounter(counter + 1)} className="search-button">
          Search
        </button>
      </form>
      {/* <h1 onClick={() => setCounter(counter + 1)} > Click me! {counter}</h1> */}
      <div className="recipes">
        {recipes.map(recipe => (
          <RecepieComp
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div >
  );
}

export default App;
