import { createContext, useState, useContext } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [favs, setFavs] = useState([]);
  const [individualRecipe, setIndividualRecipe] = useState([]);
  const [randomMeal, setRandom] = useState([]);
  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, favs, setFavs, individualRecipe, setIndividualRecipe, setRandom,randomMeal}}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => {
  return useContext(RecipeContext);
};
