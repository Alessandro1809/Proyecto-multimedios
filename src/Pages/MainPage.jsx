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
      <div className="bg-gray-50 w-auto h-auto">
        <Slider/>
        <BodySearch/>
          
        </div>
        <section className="bg-gray-50">
          <h2 className="text-center text-4xl sm:text-4xl md:text-5xl font-semibold tracking-widest text-red-400">¡<span className="text-black">Welcome</span>!</h2>
          <Bento/>
          <RecipeList/>
        </section>
  
    </>
  )
}

export default MainPage;
