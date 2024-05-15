import {Outlet} from 'react-router-dom'
//components
import Header from '../components/Header';
import Footer from '../components/Footer';
 
 const AllRecipesLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default AllRecipesLayout;