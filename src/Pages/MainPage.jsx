import Slider from "../components/Slider";
import BodySearch from "../components/BodySearch";
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
          <BodySearch/>
          <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-semibold tracking-widest text-red-400 pt-5">¡Welcome!</h2>
              <Bento/>
              <RecipeList/>
         </div>
        
    </>
  )
}

export default MainPage;
