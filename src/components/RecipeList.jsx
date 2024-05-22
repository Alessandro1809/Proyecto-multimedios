import { useState } from 'react';
import data from '../data/tipos.json'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const RecipeList = () => {

  const [value, setValue] = useState(2);

  return (
    <>
    <main className='bg-gray-50 pb-5'>
        <article className='flex justify-center'>
          <h2 className="text-3xl font-semibold text-center max-w-screen-xl pt-32 tracking-wider">Recipes</h2>
        </article>
        
        <section className='grid justify-center'>
            
            <div>
              <div className='p-4 grid gap-6 md:gap-6 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 md:px-4 col-auto'>
              {data.data.map((item) =>(
              
              <article key={item.id} className="bg-gray-200 min-w-[150px] md:min-w-[180px] h-auto rounded-lg flex justify-center flex-col transition-all duration-600 hover:scale-105 hover:bg-gray-100 group">
                  <a href="" className="group relative flex flex-col overflow-hidden rounded-t-lg px-4 pt-52 ">
                  <img className="absolute inset-0 h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={item.img} alt="" />
                  </a>
                  <body className='flex justify-between'>
                      <p className="px-2 py-2 font-medium text-black sm:text-lg md:text-xl tracking-wide">{item.nombre}</p>
                      <div className='p-2'>
                        {/* <Box component="fieldset" mb={3} borderColor="transparent">
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          /></Box> */}
                      </div>
                  </body>
                      
                      <p className="mx-2 mb-2 tracking-wide line-clamp-3 text-gray-800 font-medium">{item.description}</p>
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
