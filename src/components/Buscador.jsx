import Buscar from './icons/Buscar'
const Buscador = () => {
  return (
    <>
        <div className="lg:flex justify-end w-auto md:flex sm:hidden hidden">
              <input type="text" className=" bg-gray-300 rounded-full p-2 hover:bg-gray-200 shadow-lg shadow-yellow-300 w-52 h-8 placeholder:text-sm placeholder:text-center" placeholder="Search recipes"/>
              
              <button className="w-auto text-sm transition-all duration-200 md:w-10 hover:scale-105 md:text-xs ml-2 ">
                <Buscar/>
              </button>
        </div>
    </>
  )
}
export default Buscador;