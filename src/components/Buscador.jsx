import { Search,Favorite, Cancel } from '@material-ui/icons';
import { useRecipe } from '../api/hooks/recipes';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from '../api/hooks/useForm';
import {Modal} from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';
const Buscador = () => {
  const {handleFavorite,onOpenModal, onCloseModal, open, handleDelete } = useForm();
  const { filtraLasRecetas, setRecipes, individualRecipe,existeStorage } = useRecipe();
  const { id  } = useParams();
  const location = useLocation();
  
  const handleSearch = async (e) => {
    const recipe = document.querySelector('input').value;
    
   
    const pattern = /[A-Za-z]/;
    const isValid = recipe.match(pattern);

     if (recipe === '' || recipe === null || recipe === undefined || recipe === ' ' || !isValid) {
        toast.error('Please enter valid information');
        return;
      }else{
        const result = await filtraLasRecetas(recipe);
        setRecipes(result);
      }
    
  };

  return (
    <>
     <Modal open={open} onClose={onCloseModal} center>
      <div className='p-6'>
        <h2 className='text-xl font-medium'>
          ¿You want to <span className="text-red-400 font-bold">permanently remove</span> the item from favorites?
        </h2>
      </div>
      <footer className='flex justify-center'>
      <button
        id='cancel'
        onClick={onCloseModal}
        className='delete mx-2 my-4 w-auto h-auto p-2 text-lg transition-all duration-300 md:w-40 hover:bg-cyan-400/80 border-b border-cyan-400 md:text-lg rounded-lg flex justify-center items-center'
      >
        Close &nbsp;<Cancel/> 
      </button>
      <button
        id='delete'
        onClick={handleDelete}
        className='delete mx-2 my-4 w-auto h-auto p-2 text-lg bg-rose-400 transition-all duration-300 md:w-40 hover:bg-rose-400/80 border-b border-rose-400 md:text-lg rounded-lg'
      >
        Remove to {<Favorite/>}
      </button>
      </footer>
    </Modal>


      <div className="lg:flex justify-end w-auto md:flex sm:hidden hidden items-center">
       
        {location.pathname !=='/' ? 
        existeStorage(id) ? 
        <button className='border bg-red-300 rounded-lg w-auto h-auto p-2 text-sm transition-all duration-800 md:w-32 hover:scale-105 md:text-xs hover:bg-red-400' onClick={() => onOpenModal(individualRecipe.idMeal)}>Remove to <Favorite/></button>
        :           
          <button className='border border-red-500 rounded-lg w-auto h-auto p-2 text-sm transition-all duration-200 md:w-32 hover:scale-105 md:text-xs' onClick={() => handleFavorite({ id:individualRecipe.idMeal,nombre:individualRecipe.strMeal,img:individualRecipe.strMealThumb })}>Add to <Favorite/></button>
        : 
        <>
         <input 
          type="text" 
          pattern='[A-Za-z]'
          className="bg-gray-50 rounded-full p-2 hover:bg-white shadow-inner shadow-orange-400 w-56 h-10 placeholder:text-sm placeholder:text-center outline-none" 
          placeholder="Search recipes..." 
        />
        <button 
          className="border border-orange-400 w-auto h-auto p-2 text-sm transition-all duration-200 md:w-10 hover:scale-105 md:text-xs ml-3 bg-slate-100/50 hover:bg-orange-300/80 rounded-full" 
          onClick={(e) => handleSearch(e)}
        >
          <Search/>
        </button>
        </>
          
        }
        
      </div>
    </>
  );
};

export default Buscador;
