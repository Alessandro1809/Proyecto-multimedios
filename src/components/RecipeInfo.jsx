import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipe } from "../api/hooks/recipes";

const RecipeInfo = () => {
  
  const { getRecipeById, individualRecipe} = useRecipe();
  const { id } = useParams();
  
  useEffect( () => {
     const recipe = async () => {
      await getRecipeById(id);
     }
     recipe();

    }, []); 

  if (!individualRecipe) {
    return <div>Loading...</div>;
  }
  return (
    <>
    {individualRecipe && <h2 className="pt-40">{individualRecipe.strMeal} </h2>}
    <h2 className="pt-40"> </h2>
      <section className="w-3/12 bg-red-300">
      <header>boton para volver a pagina anterior donde estan las recetas</header>
        <article>
            categoria de la receta
        </article>
  
        <article>
            imagen de la receta
        </article>
          <section>
            <article>
                lista de ingrdientes
            </article>
  
            <article>
              instrucciones
            </article>
          </section>
        <footer>
  
            botones de accion de eliminar de favs o agregar 
  
        </footer>
      </section>
   
    </>
    )
  }
  export default RecipeInfo;
