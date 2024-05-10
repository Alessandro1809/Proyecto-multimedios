import data from '../data/tipos.json'

const RecipeList = () => {
  return (
    <>
        <section className='grid justify-center'>
            <h2 className="text-3xl font-semibold text-center max-w-screen-xl py-12">Recipes</h2>
            <div>
            <div className='grid gap-6 md:gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 md:px-4 col-auto'>
            {data.data.map((item) =>(
            
           
            <article key={item.id} className="bg-gray-50 min-w-[150px] md:min-w-[180px] h-auto rounded-lg flex justify-center flex-col transition-all duration-400 hover:scale-105">
                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pt-40 ">
                <img className="absolute inset-0 h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={item.img} alt="" />
                </a>
                    <p className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">{item.nombre}</p>
            </article>
            
        
            ))}
            </div>
            </div>
        </section>
    </>
  )
}
export default RecipeList;
