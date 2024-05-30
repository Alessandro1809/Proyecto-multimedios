import { useState, useEffect } from "react";

export const useRecipe = () => {
    const [favs, setFavs] = useState(obtenerFavoritos() || []);

    const agregarFavoritos = (receta) => {
        if (existeStorage(receta.id)) {
            return;
        }
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = [...favoritos, receta];
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
        setFavs(nuevosFavoritos); // Actualizar estado favs
        window.dispatchEvent(new CustomEvent('favoritosActualizados')); // Disparar evento personalizado
    };

    const eliminarFavoritos = (id) => {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(receta => receta.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
        setFavs(nuevosFavoritos); // Actualizar estado favs
        window.dispatchEvent(new CustomEvent('favoritosActualizados')); // Disparar evento personalizado
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
    }
}
