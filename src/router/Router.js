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
import EditProductPage from "../components/pages/adminPage/EditProductPage";
import AdminLogin from "../components/pages/adminPage/AdminLogin";
import BlankAdminPage from "../components/pages/adminPage/BlankAdminPage";
import OrderTracking from "../components/pages/adminPage/OrderTracking";
import ChangeOrderTracking from "../components/pages/adminPage/ChangeOrderTracking";
import BlankCustomerPage from "../components/pages/BlankCustomerPage";
import PaymentStep1 from "../components/pages/payment/PaymentStep1";
import PaymentStep2 from "../components/pages/payment/PaymentStep2";
import PaymentStep3 from "../components/pages/payment/PaymentStep3";
import PaymentHeader from "../components/pages/payment/PaymentHeader";
import PaymentEditAddressStep1 from "../components/pages/payment/PaymentEditAddressStep1";

function Router() {
  // const { user } = useContext(AuthContext);
  const { role } = useContext(AuthContext);
  console.log(role);
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
                
                <Route path="/PaymentMethod" element={<PaymentHeader />}>
                  <Route path="Step1" element={<PaymentStep1 />} />
                  <Route path="EditStep1" element={<PaymentEditAddressStep1 />} />
                  <Route path="Step2" element={<PaymentStep2 />} />
                  <Route path="Step3" element={<PaymentStep3 />} />
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
                <Route
                  path="/EditProduct/:productId"
                  element={<EditProductPage />}
                />
                <Route path="/orderTracking" element={<OrderTracking />} />
                <Route
                  path="/orderTracking/:orderId"
                  element={<ChangeOrderTracking />}
                />
              </>
            )}
            <Route path="*" element={<Navigate to="/" />} />
            {/* ถ้า route ไม่match กับข้างบนให้เข้าอันนี้ คือไปที่root path */}
          </Route>
        </>
      ) : (
        <>
          {/* login for customer */}
          <Route path="/login" element={<ModalLoginPage />} />
          <Route
            path="/login/customer/success"
            element={<BlankCustomerPage />}
          />
          {/* login for admin */}
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/admin/success" element={<BlankAdminPage />} />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/login" />} />
          {/* ถ้า route ไม่match กับข้างบนให้เข้าอันนี้ คือไปที่root path */}
        </>
      )}
    </Routes>

  );
}

export default Router;
