import { useState, useEffect, useRef } from 'react';
import { useRecipe } from '../api/recipes';

const Slider = () => {
  const [bandera, setBandera] = useState(true);//bandera para detectar cambios
  const { favs, actualizarFavoritos} = useRecipe();
  
  const prevFavsRef = useRef(favs);

  
  // useEffect para actualizar la referencia previa y verificar cambios en favs
  useEffect(() => {
    if (prevFavsRef.current !== favs) {
      prevFavsRef.current = favs;// Actualiza la referencia previa  
    }
    actualizarFavoritos();
  },[]);
  
  return (
    <>
    
      {favs.length ? (
        <div className="wrapper max-h-1500px flex overflow-x-auto pt-16 pb-4 lg:pt-40 md:pt-40 mb-12 mx-2">
        <>
        {favs?.map((item) =>(
          <>  
          <div key={item.id} className='justify-center items-center grid'>
              <div className="  w-[110px] h-[110px] flex items-center justify-center bg-blue-400/50 rounded-full mx-2 transition-all duration-300 hover:scale-110">
                  <div className="item2 w-[100px] h-[100px] rounded-full mx-1">
                      <img src={item.img} alt="" className='w-[100px] h-[100px] rounded-full'/>
                  </div>
              </div>
              <p className='text-center mt-2 text-pretty tracking-wide text-xs'>{item.nombre}</p>
          
          </div>
          
          </>
      ))}
        </>
        </div>
      ) : (
        <>
          <div className='text-center flex flex-col items-center pt-16 pb-4 lg:pt-40 md:pt-40 mb-12 mx-2 tracking-wider'>
            <h3 className='md:text-4xl text-2xl'>No tienes <span className='text-pretty text-red-400 font-semibold'>favoritos</span> aun!</h3>
            <h3 className='md:text-xl text-lg'>Agrega aqui tus favoritos para tener acceso rapidamente a las recetas que mas te gusten</h3> 
          </div>
        </> 

      )}
        
        
    </>
  )
}
export default Slider;