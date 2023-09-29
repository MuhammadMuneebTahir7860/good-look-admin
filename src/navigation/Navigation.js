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
import Order from "../modules/appointmentBooking/AppointmentBookings";
import Payment from "../modules/payment/Payment";
import Customer from "../modules/customer/Customer";
import Blog from "../modules/blog/Blog";
import Workers from "../modules/workers/Workers";
import Users from "../modules/users/Users";
import Portfolio from "../modules/portfolio/Portfolio";
import ProfitCalculator from "../modules/profitCalculator/ProfitCalculator";
import SupplierRequest from "../modules/supplierRequest/SupplierRequest";
import AppointmentBookings from "../modules/appointmentBooking/AppointmentBookings";
import Schedule from "../modules/schedule/Schedule";
import Billing from "../modules/billing/Billing";
import Measurement from "../modules/measurement/Measurement";
import Dashboard from "../modules/dashboard/Dashboard";
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
            path="/"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Dashboard />}
              </PrivateRouting>
            }
          />
          <Route
            path="/services"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Services />}
              </PrivateRouting>
            }
          />
          <Route
            path="/workers"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Workers />}
              </PrivateRouting>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Users />}
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
            path="/portfolio"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Portfolio />}
              </PrivateRouting>
            }
          />
          <Route
            path="/profitCalculator"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <ProfitCalculator />}
              </PrivateRouting>
            }
          />
          <Route
            path="/requests"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <SupplierRequest />}
              </PrivateRouting>
            }
          />
          <Route
            path="/appointmentBooking"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <AppointmentBookings />}
              </PrivateRouting>
            }
          />
          <Route
            path="/schedule"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Schedule />}
              </PrivateRouting>
            }
          />
          <Route
            path="/billing"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Billing />}
              </PrivateRouting>
            }
          />
          <Route
            path="/measurement"
            element={
              <PrivateRouting isAllowed={authState}>
                {role.role == "admin" && <Measurement />}
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
