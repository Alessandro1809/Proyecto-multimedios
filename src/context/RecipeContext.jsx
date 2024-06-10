import { createContext, useState, useContext } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [favs, setFavs] = useState([]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, favs, setFavs }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => {
  return useContext(RecipeContext);
};
