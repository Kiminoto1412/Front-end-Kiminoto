import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import BrandPage from "../components/pages/BrandPage";
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
import ModalLoginPage from "../components/pages/ModalLoginPage";
import EditProductPage from "../components/pages/EditProductPage";
import AdminLogin from "../components/pages/AdminLogin";

function Router() {
  // const { user } = useContext(AuthContext);
  const { role } = useContext(AuthContext);
  return (
    <Routes>
      {role ? (
        <>
          <Route path="/" element={<Header />}>
            <Route path="" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/Brand" element={<BrandPage />} />
            <Route path="/Product/:productId" element={<ProductPage />} />
            {role === "customer" ? (
              <>
                <Route path="/Profile" element={<SideLayoutProfile />}>
                  <Route path=":customerId" element={<MyProfile />} />
                  <Route
                    path="EditProfile/:customerId"
                    element={<EditProfile />}
                  />
                  <Route path="Address/:customerId" element={<Address />} />
                  <Route
                    path="EditAddress/:customerId"
                    element={<EditAddress />}
                  />
                  <Route
                    path="ChangePassword/:customerId"
                    element={<ChangePassword />}
                  />
                  <Route
                    path="MyPurchase/:customerId"
                    element={<MyPurchase />}
                  />
                </Route>
              </>
            ) : (
              // role === "admin"
              <>
                <Route path="/Profile" element={<SideLayoutProfile />}>
                  <Route path=":adminId" element={<MyProfile />} />
                  <Route
                    path="EditProfile/:adminId"
                    element={<EditProfile />}
                  />
                  <Route
                    path="ChangePassword/:adminId"
                    element={<ChangePassword />}
                  />
                </Route>
                <Route path="/createProduct" />
              </>
            )}
            <Route path="*" element={<Navigate to="/" />} />
            {/* ถ้า route ไม่match กับข้างบนให้เข้าอันนี้ คือไปที่root path */}
          </Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<ModalLoginPage />} />
          <Route path="/login/admin" element={<AdminLogin />} />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/login" />} />
          {/* ถ้า route ไม่match กับข้างบนให้เข้าอันนี้ คือไปที่root path */}
        </>
      )}
    </Routes>

    // <>
    //   <Routes>
    //     <Route path="/" element={<Header />}>
    //       <Route path="" element={<HomePage />} />
    //       <Route path="/Brand" element={<BrandPage />} />
    //       <Route path="/Product/:productId" element={<ProductPage />} />
    //       <Route path="/EditProduct/:productId" element={<EditProductPage />} />

    //       <Route path="/Profile" element={<SideLayoutProfile />}>
    //         <Route path=":customerId" element={<MyProfile />} />
    //         <Route path="EditProfile/:customerId" element={<EditProfile />} />
    //         <Route path="Address/:customerId" element={<Address />} />
    //         <Route path="EditAddress/:customerId" element={<EditAddress />} />
    //         <Route
    //           path="ChangePassword/:customerId"
    //           element={<ChangePassword />}
    //         />
    //         <Route path="MyPurchase/:customerId" element={<MyPurchase />} />
    //       </Route>
    //       <Route path="*" element={<Navigate to="/" />} />
    //       {/* ถ้า route ไม่match กับข้างบนให้เข้าอันนี้ คือไปที่root path */}
    //     </Route>
    //   </Routes>
    // </>
  );
}

export default Router;
