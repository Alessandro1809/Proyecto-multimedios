import search from '../assets/buscar.png'
const BodySearch = () => {
  return (
   <>
   <div className="p-4 mt-4">
       <div className="lg:hidden justify-end w-full md:hidden sm:flex flex">
               <input type="text" className=" bg-gray-300 rounded-full p-2 hover:bg-gray-200 shadow-lg shadow-yellow-300 w-full h-8 placeholder:text-sm placeholder:text-center" placeholder="Search recipes"/>
               
               <button className="w-12 text-sm transition-all duration-200 md:w-12 hover:scale-105 md:text-xs ml-2 ">
                 <img className="w-10" src={search} alt="" />
               </button>
       </div> 
     </div>
   </>
  )
}

export default BodySearch;
