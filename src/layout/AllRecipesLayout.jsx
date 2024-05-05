import {Outlet} from 'react-router-dom'
//components
import Header from '../components/Header';
 
 const AllRecipesLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
export default AllRecipesLayout;