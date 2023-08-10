import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import ProductPage from "./pages/ProductPage";
import FavoritesProductsPage from "./pages/FavoritesProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/title" element={<HomePage />} />
          <Route path="/id" element={<ProductPage />} />
          <Route path="/favorites" element={<FavoritesProductsPage />} />
        </Route>

      </Routes>
    
    </BrowserRouter>
    
);
}

export default App;
