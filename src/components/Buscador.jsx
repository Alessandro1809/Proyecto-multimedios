import { Search } from '@material-ui/icons';
import { useRecipe } from '../api/hooks/recipes';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Buscador = () => {

  const { filtraLasRecetas, setRecipes, getAllCategories } = useRecipe();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategories();
      setCategories(result);
    };

    fetchCategories();
  }, []);

  const handleSearch = async (e) => {
    const recipe = document.querySelector('input').value;
    const result = await filtraLasRecetas(recipe);
   
    if (recipe === '' || recipe === null || recipe === undefined || recipe === ' ' ) {
       toast.error('Please enter a valid recipe');
     }
    
    setRecipes(result); 
  };

  return (
    <>
      <div className="lg:flex justify-end w-auto md:flex sm:hidden hidden items-center">
        <input 
          type="text" 
          className="bg-gray-50 rounded-full p-2 hover:bg-white shadow-inner shadow-orange-400 w-56 h-10 placeholder:text-sm placeholder:text-center outline-none" 
          placeholder="Filter by category" 
        />
        
        <button 
          className="border border-orange-400 w-auto h-auto p-2 text-sm transition-all duration-200 md:w-10 hover:scale-105 md:text-xs ml-3 bg-slate-100/50 hover:bg-orange-300/80 rounded-full" 
          onClick={(e) => handleSearch(e)}
        >
          <Search/>
        </button>
      </div>
    </>
  );
};

export default Buscador;
