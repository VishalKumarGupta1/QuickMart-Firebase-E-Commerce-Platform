import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Nopage from "./pages/nopage/Nopage";

import MyState from "./context/data/mystate";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import Productinfo from "./pages/productinfo/Productinfo";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import Addproduct from "./pages/admin/page/Addproduct";
import Updateproduct from "./pages/admin/page/Updateproduct";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRoutes>
                {" "}
                <Order />
              </ProtectedRoutes>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutesforadmin>
                {" "}
                <Dashboard />
              </ProtectedRoutesforadmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<Productinfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRoutesforadmin>
                <Addproduct />
              </ProtectedRoutesforadmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRoutesforadmin>
                <Updateproduct />
              </ProtectedRoutesforadmin>
            }
          />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
};

export default App;

export const ProtectedRoutes = ({ children }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" replace />;
};

export const ProtectedRoutesforadmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  return admin.user.email === "vishal@gmail.com" ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};
