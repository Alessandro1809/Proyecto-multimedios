import { Search } from '@material-ui/icons';
const BodySearch = () => {
  return (
   <>
   <div className="p-4 mt-4 pb-10">
       <div className="lg:hidden justify-end w-full md:hidden sm:flex flex items-center">
               <input type="text" className=" bg-gray-50 rounded-full p-2 hover:bg-white shadow-inner shadow-orange-400 w-full h-10 placeholder:text-sm placeholder:text-center outline-none" placeholder="Search recipes"/>
               <button className="w-auto h-auto p-2 text-sm transition-all duration-200 md:w-12 hover:scale-105 md:text-xs ml-2 hover:bg-orange-100/90 rounded-full">
                 <Search/>
               </button>
       </div> 
     </div>
   </>
  )
}

export default BodySearch;
