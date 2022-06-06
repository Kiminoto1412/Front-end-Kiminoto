import { Route, Routes } from "react-router-dom";
import BrandPage from "../components/pages/BrandPage";
import Footer from "../components/pages/footer/Footer";
import Header from "../components/pages/header/Header";
import HomePage from "../components/pages/HomePage";
import ProductPage from "../components/pages/ProductPage";
import SignUp from "../components/pages/SignUp";

function Router() {
  return (
    <Routes>
      
      <Route path="/" element={<Header />}>
        <Route path="" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Brand" element={<BrandPage />} />
        <Route path="/Product/:productId" element={<ProductPage />} />
        
        
      </Route>

    </Routes>
  );
}

export default Router;
