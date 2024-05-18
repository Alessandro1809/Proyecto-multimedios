import Slider from "../components/Slider";
import BodySearch from "../components/BodySearch";
import Bento from "../components/Bento";
import RecipeList from "../components/RecipeList";

const MainPage = () => {
  return (
    <>
    
    <div className="flex justify-center w-full lg:hidden md:hidden bg-gray-50 pb-8">
          <h2 className="text-3xl tracking-wider text-orange-400 w-auto h-5 pt-32 font-bold">ALLRECIPES</h2>
    </div>
      <div className="bg-gray-50 w-auto h-screen">
        <Slider/>
          <BodySearch/>
          <h2 className="text-center text-3xl sm:text-3xl md:text-4xl font-semibold tracking-widest text-red-400 pt-5 mb-5">¡Welcome!</h2>
              <Bento/>
        </div>
        <RecipeList/>
  
    </>
  )
}

export default MainPage;
