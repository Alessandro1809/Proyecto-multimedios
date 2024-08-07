import { useEffect, useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { RecipeContext } from '../../context/RecipeContext.jsx'; 
import { v4 as uuidv4 } from 'uuid';
export const useRecipe = () => {
    const { recipes, setRecipes, favs, setFavs, individualRecipe, setIndividualRecipe, setRandom,randomMeal} = useContext(RecipeContext);

    const getRecipeById= async (id)=>{
        try {

            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            const {idMeal,strYoutube,strInstructions,strMeal,strMealThumb,...rest} = response.data.meals[0];
            
            let ingredients = [];

            for (let i = 1; i <= 20; i++) {
            const ingredient = rest[`strIngredient${i}`];
            const measure = rest[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
                ingredients.push({id:uuidv4(), ingredient,measure });
            }
            }
            return setIndividualRecipe({idMeal,strYoutube,strInstructions,strMeal,strMealThumb,ingredients});    

        } catch (error) {
            const notify=() => toast.error('Something is wrong, the id is not found, try again', {
                position: "top-center",
                autoClose: 2500,
                theme: "light"
            });

            notify();
            console.log(error);
        }

    }

    const muestraTodasLasRecetas = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`);
            const { meals } = response.data;   
            return meals;
        } catch (error) {
            console.error('Error fetching the recipes:', error);
            return [];
        }
    }

    const getAllCategories = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            const { categories } = response.data;
            
            return categories;
        } catch (error) {
            console.error('Error fetching the recipes:', error);
            return [];
        }
    }

    const filtraLasRecetas = async (recipe) => {
        try {
            const upperCaseRecipe = recipe.toUpperCase();
            
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`);
            const { meals } = response.data;
            if (meals && !meals.some(meal => meal.strMeal.toUpperCase() === upperCaseRecipe)) {
                return meals;
            } else {
                const notify = () => toast.error('Recipe not found, try something different!', {
                    position: "top-center",
                    autoClose: 2500,
                    theme: "light"
                })

                notify();
                return [];
            }
        } catch (error) {
            console.error('Error fetching the recipes:', error);
            return [];
        }
    }
   
    const agregarFavoritos = (receta) => {
        const warnNotify = () => toast.warn("¡This element is already in favorites!" , {
            position: "top-center",
            autoClose: 2500,
            theme: "light"
        });
        const notify = () => toast.success("¡Corrrectly added to favorites!", {
            position: "top-center",
            autoClose: 2500,
            theme: "light"
        });

        if (existeStorage(receta.id)) {
            return warnNotify();
        }
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = [...favoritos, receta];
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
        setFavs(nuevosFavoritos); // Actualizar estado favs
        window.dispatchEvent(new CustomEvent('favoritosActualizados')); // Disparar evento personalizado
        notify();
    };

    const eliminarFavoritos = (id) => {
        const notify = () => toast.error("¡This element was removed from favorites!", {
            position: "top-center",
            autoClose: 2500,
            theme: "light"
        });
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(receta => receta.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
        setFavs(nuevosFavoritos); // Actualizar estado favs
        window.dispatchEvent(new CustomEvent('favoritosActualizados')); // Disparar evento personalizado
        notify();
    };

    function existeStorage(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(receta => receta.id === id);
    }

    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos;
    }

    const actualizarFavoritos = () => {
        const nuevosFavoritos = obtenerFavoritos() || [];
        setFavs(nuevosFavoritos); // Setear el estado con los nuevos favoritos
    };

    const obtenerRecetaRandom = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
            const { meals } = response.data;
            setRandom(meals);
            return meals;
        } catch (error) {
            console.error('Error fetching the recipes:', error);
            return [];
        }
    };

    useEffect(() => {
        const handleStorageChange = () => {
            actualizarFavoritos();
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('favoritosActualizados', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('favoritosActualizados', handleStorageChange);
        };
    }, []);

    return {
        actualizarFavoritos,
        agregarFavoritos,
        eliminarFavoritos,
        existeStorage,
        obtenerFavoritos,
        favs,
        setFavs,
        muestraTodasLasRecetas,
        filtraLasRecetas,
        setRecipes,
        recipes,
        getAllCategories,
        getRecipeById,
        individualRecipe,
        obtenerRecetaRandom,
        randomMeal
        
    };
};
