import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const useRecipe = () => {
    
    const [favs, setFavs] = useState(obtenerFavoritos() || []);

    const agregarFavoritos = (receta) => {
        
        const warnNotify = () => toast.warn("¡Este elemento ya existe en favoritos!" , {
            position: "top-center",
            autoClose: 2500,
            theme: "light"
            });
        const notify = () => toast.success("¡Se ha agregado correctamente a favoritos!", {
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
        const notify = () => toast.error("¡Se ha eliminado correctamente de favoritos!", {
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
        setFavs
    }
}
