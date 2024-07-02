import { Link } from "react-router-dom";
import { Favorite, Home } from "@material-ui/icons";
const NavLinks = () => {
  return (
    <>

      <Link to='https://www.themealdb.com/' target="_blank" className="text_glowing">The meal db API {<Favorite />}</Link>
      <Link to='/' className="text_glowing">All Recipes {<Home />}</Link>

    </>
  )
}

export default NavLinks;