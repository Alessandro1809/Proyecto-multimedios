import { useState, useEffect } from 'react';
import { useRecipe } from '../hooks/recipes';
import { toast } from 'react-toastify';
export const useForm = () => {

  const { agregarFavoritos, existeStorage, eliminarFavoritos, muestraTodasLasRecetas, recipes, setRecipes,filtraLasRecetas } = useRecipe();
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [meal, setMeal] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 20;

  const onOpenModal = (id) => {
    setCurrentId(id);
    setOpen(true);
  };

  const onCloseModal = () => {
    setCurrentId(null);
    setOpen(false);
  };

  const handleFavorite = (receta) => {
    existeStorage(receta.id);
    agregarFavoritos(receta);
  };

  const handleDelete = () => {
    eliminarFavoritos(currentId);
    onCloseModal();
  };

  useEffect(() => {
    const fetchRecetas = async () => {
      const meals = await muestraTodasLasRecetas();
      setMeal(meals);
    };

    fetchRecetas();
  }, []);


  useEffect(() => {
    if (recipes && recipes.length > 0) {
      setMeal(recipes);
    }

  }, [recipes]);

  const handdleScrollToTop = (duration) => {
    const startPosition = window.scrollY;
    const startTime = performance.now();

    function scrollStep(currentTime) {
      const timeOfInit = currentTime - startTime;
      const progress = Math.min(timeOfInit / duration, 1);
      window.scrollTo(0, startPosition * (1 - progress));

      if (timeOfInit < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }

  const handleSearch = async () => {
    const recipe = document.querySelector('input').value;


    const pattern = /[A-Za-z]/;
    const isValid = recipe.match(pattern);

    if (recipe === '' || recipe === null || recipe === undefined || recipe === ' ' || !isValid) {
      toast.error('Please enter valid information');
      return;
    } else {
      const result = await filtraLasRecetas(recipe);
      setRecipes(result);
    }

  };

  return {
    onOpenModal,
    onCloseModal,
    handleFavorite,
    handleDelete,
    open,
    currentId,
    meal,
    currentPage,
    recipesPerPage,
    setCurrentPage,
    setMeal,
    setCurrentId,
    existeStorage,
    handdleScrollToTop,
    handleSearch
  }
}

