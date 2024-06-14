import { Search } from '@material-ui/icons';
import { useRecipe } from '../api/hooks/recipes';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BodySearch = () => {

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
    const recipe = document.getElementById('search').value;
    const result = await filtraLasRecetas(recipe);
    const categories = await getAllCategories();  
    const isValidCategory = categories.some(category => category.strCategory === recipe);
    if (recipe === '' || recipe === null || recipe === undefined || recipe === ' ' || !isValidCategory) {
       toast.error('Please enter a valid recipe category');
     }
    
    setRecipes(result); 
  };

  return (
   <>
   <div className="p-4 mt-4 pb-10">
       <div className="lg:hidden justify-end w-full md:hidden sm:flex flex items-center">
               <input id="search" type="text" className=" bg-gray-50 rounded-full p-2 hover:bg-white shadow-inner shadow-orange-400 w-full h-10 placeholder:text-sm placeholder:text-center outline-none" placeholder="Filter by category" list='some-data'/>
               <datalist id="some-data">
                  {categories.map(category => (
                    <option value={category.strCategory} key={category.idCategory} />
                  ))}
                </datalist>
                <button 
                  className="border border-orange-400 w-auto h-auto p-2 text-sm transition-all duration-200 md:w-10 hover:scale-105 md:text-xs ml-3 bg-slate-100/50 hover:bg-orange-300/80 rounded-full" 
                  onClick={(e) => handleSearch(e)}
                >
                 <Search/>
               </button>
       </div> 
     </div>
   </>
  )
}

export default BodySearch;
