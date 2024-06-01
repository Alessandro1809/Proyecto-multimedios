import { useEffect, useState   } from 'react';
import { useRecipe } from '../api/hooks/recipes';
import { CloseRounded } from '@material-ui/icons';
import { Favorite, Cancel } from '@material-ui/icons';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const Slider = () => {
  const { favs, actualizarFavoritos,eliminarFavoritos } = useRecipe();
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
          ¿Desea eliminar <span className="text-red-400 font-bold">permanentemente</span> el elemento de favoritos?
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

      {favs.length ? (
        <div className="wrapper max-h-1500px flex overflow-x-auto pt-16 pb-4 lg:pt-40 md:pt-40 mb-12 mx-2">
          {favs.map((item) => (
             
            <div key={item.id} className='justify-center items-center grid group'>
              <div>
              <button className='md:flex hidden lg:flex transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-red-200 rounded-full p-2 bg-slate-100' onClick={() => onOpenModal(item.id)}><CloseRounded/></button>
              </div>
              <div className="w-[110px] h-[110px] flex items-center justify-center bg-blue-400/50 rounded-full mx-2 transition-all duration-300 hover:scale-110">
                <div className="item2 w-[100px] h-[100px] rounded-full mx-1">
                  <img src={item.img} alt="" className='w-[100px] h-[100px] rounded-full'/>
                </div>
              </div>
              <p className='text-center mt-2 text-pretty tracking-wide text-xs'>{item.nombre}</p>
             
            </div>
          ))}
        </div>
      ) : (
        <div className='text-center flex flex-col items-center pt-16 pb-4 lg:pt-40 md:pt-40 mb-12 mx-2 tracking-wider'>
          <h3 className='md:text-4xl text-2xl'>No tienes <span className='text-pretty text-red-400 font-semibold'>favoritos</span> aun!</h3>
          <h3 className='md:text-xl text-lg'>Agrega aqui tus favoritos para tener acceso rapidamente a las recetas que mas te gusten</h3> 
        </div>
      )}
    </>
  );
}
export default Slider;