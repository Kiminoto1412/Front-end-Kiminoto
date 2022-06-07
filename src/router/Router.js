import { Route, Routes } from "react-router-dom";
import BrandPage from "../components/pages/BrandPage";
import ChangePasswordPage from "../components/pages/profile/ChangePassword";
import Header from "../components/pages/header/Header";
import HomePage from "../components/pages/HomePage";
import ProductPage from "../components/pages/ProductPage";
import SideLayoutProfile from "../components/pages/SideLayoutProfile";
import SignUp from "../components/pages/SignUp";
import MyProfile from "../components/pages/profile/MyProfile";
import EditProfile from "../components/pages/profile/EditProfile";
import Address from "../components/pages/profile/Address";
import EditAddress from "../components/pages/profile/EditAddress";
import ChangePassword from "../components/pages/profile/ChangePassword";
import MyPurchase from "../components/pages/profile/MyPurchase";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Brand" element={<BrandPage />} />
        <Route path="/Product/:productId" element={<ProductPage />} />
        <Route path="/Profile" element={<SideLayoutProfile />}>
          <Route path=":customerId" element={<MyProfile />} />
          <Route path="EditProfile/:customerId" element={<EditProfile />} />
          <Route path="Address/:customerId" element={<Address />} />
          <Route path="EditAddress/:customerId" element={<EditAddress/>} />
          <Route
            path="ChangePassword/:customerId"
            element={<ChangePassword />}
          />
          <Route
            path="MyPurchase/:customerId"
            element={<MyPurchase />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
