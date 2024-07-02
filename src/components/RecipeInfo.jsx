import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipe } from "../api/hooks/recipes";
import { Link } from "react-router-dom";
import { ArrowUpwardRounded, ArrowBack} from "@material-ui/icons";
import { useForm } from "../api/hooks/useForm";
import { useState } from "react";
import Loader from "./Loader";
const RecipeInfo = () => {
  const [loading,setLoading]= useState(true);
  const {handdleScrollToTop} = useForm();
  const { getRecipeById, individualRecipe} = useRecipe();
  const { id } = useParams();
  
  useEffect( () => {
     const recipe = async () => {
      await getRecipeById(id);
      setLoading(false);
     }
     recipe();
     
    }, []); 

  if (!individualRecipe) {
    return <div>Loading...</div>;
  }
  return (
    <>
    {individualRecipe && 
      loading ? <div className="grid justify-center h-screen items-center"><Loader/></div> :
      <section className="grid justify-center " loading='lazy'>
        <h2 className="pt-36 text-center text-4xl tracking-wide font-bold pb-4 md:txt-5xl mx-4">{individualRecipe.strMeal} </h2>
        
        <div className="grid justify-center">
          <div className="grid grid-cols-2 gap-2 p-2 text-lg font-medium justify-center">
            
              <img  src={individualRecipe.strMealThumb} alt={individualRecipe.strMeal} className="mx-auto w-[50%] h-auto rounded-lg drop-shadow-xl shadow-lg shadow-red-300 col-span-2 "/>

              <h2 className="col-span-2 text-center text-4xl py-6">Ingredients</h2>
              {individualRecipe.ingredients && individualRecipe.ingredients.map((ingredient) => (
                
                <article key={ingredient.id} className=" gap-2 p-2 text-lg font-medium bg-orange-100/45 rounded-lg col-span-2 md:col-span-1">
                
                  <p className=" text-center">{ingredient.ingredient}: <span className="font-bold">{ingredient.measure}</span></p>
                  
                </article>
                
              ))}
         </div>
         </div>

          <article className="mx-2 md:mx-20">
            <h2 className="text-center text-4xl py-6 font-medium">Instructions</h2>
            <p className="text-center">{individualRecipe.strInstructions}</p>

            
          </article>
          <Link target="_blank" to={individualRecipe.strYoutube}><p className="pt-12 text-center text-blue-600 text-2xl">Watch now on YouTube!</p></Link>
        </section>
        
        }
    
    <button onClick={() => handdleScrollToTop(1100)} id="scrollToTopBtn" className="btn-flotante appear-scroll-to-top"><ArrowUpwardRounded/></button>
    
    <Link to = "/"><button id="scrollToTopBtn" className="btn-flotante-back"><ArrowBack/></button></Link>
    </>
    )
  }
  export default RecipeInfo;
