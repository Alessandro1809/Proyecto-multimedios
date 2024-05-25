import Slider from "../components/Slider";
import BodySearch from "../components/BodySearch";
import Bento from "../components/Bento";
import RecipeList from "../components/RecipeList";

const MainPage = () => {
  return (
    <>
    <div className=" top-0 z-[-10] h-full w-full bg-white bg-[radial-gradient(ellipse_40%_90%_at_60%_10%,rgba(74,206,255,0.4),rgba(255,123,13,0))]">
    
      <div className="flex justify-center w-full lg:hidden md:hidden  pb-8">
            <h2 className="text-3xl tracking-wider text-orange-400 w-auto h-5 pt-32 font-bold">ALLRECIPES</h2>
        </div>
          <div className=" w-auto h-auto">
            <Slider/>
            <BodySearch/> 
          </div>

            <section>
              <h2 className="text-center text-4xl sm:text-4xl md:text-5xl font-semibold tracking-widest text-red-400">¡<span className="text-black">Welcome</span>!</h2>
              <Bento/>
              <RecipeList/>
            </section>
    
    </div>
    </>
  )
}

export default MainPage;
