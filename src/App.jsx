import {BrowserRouter,Route, Routes} from 'react-router-dom';
import AllRecipesLayout from './layout/AllRecipesLayout';
import MainPage from './Pages/MainPage';
import Recipe from './Pages/Recipe';
import Favorites from './Pages/Favorites';
function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllRecipesLayout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='recipe' element={<Recipe/>}/>
          <Route path='favorite' element={<Favorites/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
