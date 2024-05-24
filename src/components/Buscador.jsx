
import { Search } from '@material-ui/icons';
const Buscador = () => {
  return (
    <>
        <div className="lg:flex justify-end w-auto md:flex sm:hidden hidden items-center">
              <input type="text" className=" bg-gray-50 rounded-full p-2 hover:bg-white shadow-inner shadow-orange-400 w-52 h-8 placeholder:text-sm placeholder:text-center outline-none" placeholder="Search recipes"/>
              
              <button className="border border-orange-400 w-auto h-auto p-2 text-sm transition-all duration-200 md:w-10 hover:scale-105 md:text-xs ml-2 bg-slate-100/50 hover:bg-orange-300/80 rounded-full">
                <Search/>
              </button>
        </div>
    </>
  )
}
export default Buscador;