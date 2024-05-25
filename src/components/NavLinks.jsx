import { Link } from "react-router-dom";
import { Favorite, Home } from "@material-ui/icons";
const NavLinks = () => {
 return (
   <>
 
     <Link to='' className="text_glowing">My Favorites {<Favorite />}</Link>
     <Link to='' className="text_glowing">All Recipes { <Home /> }</Link>
     
   </>
 )
}

export default NavLinks;