import { useEffect, useState } from 'react';
import { useRecipe } from '../api/hooks/recipes';
import { Favorite, Cancel, CloseRounded } from '@material-ui/icons';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';
const Slider = () => {
  const { favs, actualizarFavoritos, eliminarFavoritos } = useRecipe();
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const onOpenModal = (id) => {
    setCurrentId(id);
    setOpen(true);
  };

  const onCloseModal = () => {
    setCurrentId(null);
    setOpen(false);
  };
  const handleDelete = () => {
    eliminarFavoritos(currentId);
    onCloseModal();
  };

  // useEffect para actualizar favoritos cada vez que cambian
  useEffect(() => {
    actualizarFavoritos();
  }, []);

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
            Close &nbsp;<Cancel />
          </button>
          <button
            id='delete'
            onClick={handleDelete}
            className='delete mx-2 my-4 w-auto h-auto p-2 text-lg bg-rose-400 transition-all duration-300 md:w-40 hover:bg-rose-400/80 border-b border-rose-400 md:text-lg rounded-lg'
          >
            Remove to {<Favorite />}
          </button>
        </footer>
      </Modal>

      {favs.length ? (
        <div className="wrapper max-h-1500px flex overflow-x-auto pt-16 pb-4 lg:pt-40 md:pt-40 mb-12 mx-4">
          {favs.map((item) => (

            <div key={item.id} className='justify-center items-center flex flex-col group mx-1'>
              <div className='mb-2'>
                <button className='md:flex hidden lg:flex transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-red-200 rounded-full p-2 bg-slate-100 ' onClick={() => onOpenModal(item.id)}><CloseRounded /></button>
              </div>

              <Link to={`/recipe/${item.id}`}>
                <div className="w-[110px] h-[110px] grid items-center justify-center bg-gradient-to-r from-rose-500  to-yellow-300 rounded-full mx-auto transition-all duration-300 hover:scale-110">
                  <div className="item2 w-[100px] h-[100px] rounded-full mx-1">
                    <img src={item.img} alt="" className='w-[100px] h-[100px] rounded-full ' />
                  </div>
                </div>
                <p className="text-center mt-2 tracking-wide text-xs text-nowrap mx-2">
                  {item.nombre}
                </p>
              </Link>
            </div>

          ))}
        </div>
      ) : (
        <div className='text-center flex flex-col items-center pt-16 pb-4 lg:pt-40 md:pt-40 mb-12 mx-2 tracking-wider'>
          <h3 className='md:text-4xl text-2xl'>You don't have <span className='text-pretty text-red-400 font-semibold'>favorites</span> yet!</h3>
          <h3 className='md:text-xl text-lg'>Add your favorites here to quickly have access to the recipes you like the most</h3>
        </div>
      )}
    </>
  );
}
export default Slider;

