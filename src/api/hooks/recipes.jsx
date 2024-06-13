import { useEffect, useContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { RecipeContext } from '../../context/RecipeContext.jsx';  // Asegúrate de importar el contexto adecuado


export const useRecipe = () => {
    const { recipes, setRecipes, favs, setFavs } = useContext(RecipeContext);
    const category =[];
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
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipe}`);
            const { meals } = response.data;
            return meals;
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
    };

    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos;
    };

    const actualizarFavoritos = () => {
        const nuevosFavoritos = obtenerFavoritos() || [];
        setFavs(nuevosFavoritos); // Setear el estado con los nuevos favoritos
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
        getAllCategories
    };
};
