import React, { useEffect, useState } from "react";
//import logo from './logo.svg';
import Recipe from "./Recipe";

import "./App.css";

const App = () => {
  const APP_ID = "22b84b34";
  const APP_KEY = "5aa0c674a9382756077b75b3157cfc2d	";
  const [recipes, setRecipes] = useState([]);
  //how to search item
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRecipes();
    //console.log('lets say we are fetching data');
    //console.log("effect has been run");
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    //console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            dietLabels={recipe.recipe.dietLabels}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
