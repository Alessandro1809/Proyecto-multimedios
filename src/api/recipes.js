//funciones de consumo del api de recetas
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
export const useRecipe = () => {
    const agregarFavoritos = (receta) => {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]));
    }
    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(receta=>receta.id===id);
   }
   function obtenerFavoritos(){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if(favoritos.length){
                return favoritos;
        }
     
    }

    return{
        agregarFavoritos,
        existeStorage,
        obtenerFavoritos
    }
}