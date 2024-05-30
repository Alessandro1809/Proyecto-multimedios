//funciones de consumo del api de recetas
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
import { useState } from "react";
export const useRecipe = () => {
    const [favs, setFavs] = useState(obtenerFavoritos() || []);
    const agregarFavoritos = (receta) => {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]));
        setFavs([...favoritos, receta]);
    };
    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(receta=>receta.id===id);
   };
   function obtenerFavoritos(){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if(favoritos.length){
                return favoritos;
        }
    
    };
    const actualizarFavoritos = () => {
        const nuevosFavoritos = obtenerFavoritos() || [];
        setFavs(nuevosFavoritos); // Setea el estado con los nuevos favoritos
      };

    return{
       actualizarFavoritos,
        agregarFavoritos,
        existeStorage,
        obtenerFavoritos,
        favs,
        setFavs
    }
}