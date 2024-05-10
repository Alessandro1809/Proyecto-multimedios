import Slider from "../components/Slider";
import search from '../assets/buscar.png'
import Bento from "../components/Bento";
import RecipeList from "../components/RecipeList";
const MainPage = () => {
  return (
    <>
    <div className="flex justify-center w-full lg:hidden md:hidden">
          <h2 className=" text-2xl tracking-wider text-yellow-300 w-32 h-5 pt-36 font-bold">ALLRECIPES</h2>
    </div>
      <div className="bg-gray-50 w-auto h-screen">
        <Slider/>
          <div className="p-4 ">
            <div className="lg:hidden justify-end w-full md:hidden sm:flex flex">
                    <input type="text" className=" bg-gray-300 rounded-full p-2 hover:bg-gray-200 shadow-lg shadow-yellow-300 w-full h-8 placeholder:text-sm placeholder:text-center" placeholder="Search recipes"/>
                    
                    <button className="w-12 text-sm transition-all duration-200 md:w-12 hover:scale-105 md:text-xs ml-2 ">
                      <img className="w-10" src={search} alt="" />
                    </button>
            </div>
          </div>
          <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-semibold tracking-widest text-red-400 pt-5">¡Welcome!</h2>
              <Bento/>
              <RecipeList/>
              
         </div>
        
    </>
  )
}

export default MainPage;
