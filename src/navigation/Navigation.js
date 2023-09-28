import React from "react";
import Sidebar from "../commonComponents/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "../modules/auth/login/Login";
import Clients from "../modules/clients/Clients";
import { PublicRouting } from "./PublicRouting";
import { PrivateRouting } from "./PrivateRouting";
import PageNotFound from "../commonComponents/PageNotFound";
import { useSelector } from "react-redux";
import Services from "../modules/services/Services";
import Products from "../modules/products/Products";
import ProductDetail from "../modules/productDetail/ProductDetail";
import EditForm from "../modules/products/EditForm/EditForm";
import Order from "../modules/orders/Order";
import Payment from "../modules/payment/Payment";
import Customer from "../modules/customer/Customer";
import Blog from "../modules/blog/Blog";
export default function Navigation() {
  const authState = useSelector((state) => state.AuthReducer.isUserLoggedIn);
  const role = useSelector((state) => state.AuthReducer.user);
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouting role={role.role} isAllowed={authState}>
              <Login authState={authState} />
            </PublicRouting>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRouting isAllowed={authState}>
              <Sidebar role={role.role} authState={authState} />
            </PrivateRouting>
          }
        >
          <Route
            path="/services"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Services/>}
              </PrivateRouting>
            }
          />
            <Route
            path="/blogs"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Blog />}
              </PrivateRouting>
            }
          />
          <Route
            path="/order"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Order />}
              </PrivateRouting>
            }
          />
          <Route
            path="/payment"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Payment />}
              </PrivateRouting>
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Customer />}
              </PrivateRouting>
            }
          />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/editForm" element={<EditForm />} />
          <Route path="/:pageName" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}
