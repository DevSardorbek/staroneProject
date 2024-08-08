import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import AddProduct from "./pages/add-product";
import EditProduct from "./pages/edit-product";
import ProtectedLayout from "./components/layout/protected-layout";
import DefaultLayout from "./components/layout/default-layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default Routing;
