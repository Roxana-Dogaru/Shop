import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import HomePage from "./pages/HomePage";
import FavoritesProductsPage from "./pages/FavoritesProductsPage";
import CategoryPage from "./pages/CategoryPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />          
          <Route path="/title" element={<HomePage />} />          
          <Route path="/favorites" element={<FavoritesProductsPage />} />

          <Route path="/category" element={<CategoryPage />} />

        </Route>

      </Routes>
    
    </BrowserRouter>
    
);
}


export default App