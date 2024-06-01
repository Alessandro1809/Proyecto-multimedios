import data from '../data/tipos.json'
import { useState } from 'react';
import { Favorite,Cancel } from '@material-ui/icons';
import { useRecipe } from '../api/hooks/recipes';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const RecipeList = () => {
  const { agregarFavoritos, existeStorage, eliminarFavoritos } = useRecipe();
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null); // Estado para almacenar el id de cada receta que se quiera eliminar

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

    <main className='pb-5'>
      <article className='grid justify-center pb-4 appear'>
        <h2 className="text-5xl font-semibold text-center max-w-screen-xl pt-14 tracking-wider h-auto pb-4 text-pretty">
          <span className="text-orange-400">300+</span> Recipes
        </h2>
        <p className='text-xl font-medium tracking-wide mx-4 text-pretty'>
          Explore all the delicious recipes for <span className="text-orange-400">all tastes</span> in our catalog!
        </p>
      </article>

      <section className='grid justify-center'>
        <div>
          <div className='p-4 grid gap-5 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 md:mx-0.5 col-auto'>
            {data.data.map((item) => (
              <article key={item.id} className="appear bg-gray-200 min-w-[150px] md:min-w-[180px] h-auto rounded-lg flex justify-center flex-col transition-all duration-600 hover:scale-100 hover:bg-gray-100 group drop-shadow-md">
                <a href="" className="group relative flex flex-col overflow-hidden rounded-t-lg px-4 pt-52">
                  <img className="absolute inset-0 h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={item.img} alt="" />
                </a>
                <article className='flex justify-between'>
                  <p className="px-2 py-2 font-semibold text-black sm:text-lg md:text-xl tracking-wide">{item.nombre}</p>
                  <div className='p-2'></div>
                </article>
                <p className="mx-2 mb-2 tracking-wide line-clamp-3 text-gray-800 font-medium text-pretty">{item.description}</p>
                <footer className='flex justify-between w-auto'>
                  <button className='mx-2 my-4 w-auto h-auto p-2 text-lg transition-all duration-300 md:w-40 hover:bg-orange-400 md:text-lg border border-orange-500 rounded-lg'>View Recipe</button>

                  {existeStorage(item.id) ? 
                    <button onClick={() => onOpenModal(item.id)} className='mx-2 my-4 w-auto h-auto p-2 text-lg bg-rose-400 transition-all duration-300 md:w-40 hover:bg-rose-400/80 border-b border-rose-400 md:text-lg rounded-lg'>
                      Remove to {<Favorite />}
                    </button>
                    : 
                    <button onClick={() => handleFavorite({ id: item.id, nombre: item.nombre, img: item.img, description: item.description })} className='mx-2 my-4 w-auto h-auto p-2 text-lg transition-all duration-300 md:w-40 hover:bg-rose-400 border-b border-rose-400 md:text-lg rounded-lg'>
                      Add to {<Favorite />}
                    </button>
                  }
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  </>
  )
}
export default RecipeList;
