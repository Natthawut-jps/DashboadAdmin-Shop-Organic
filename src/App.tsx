import { Route, Routes } from "react-router-dom";
import DashboardECommerce from "./pages/DashboardECommerce";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import Order from "./pages/Order";
import Customer from "./pages/Customer";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import EditCategory from "./pages/EditCategory";
import OrderDetails from "./pages/OrderDetails";
import CustomerDetails from "./pages/CustomerDetails";
import Login from "./pages/Login";
import Protect_route from "./pages/utities/protect._route";
import { Cookies } from "react-cookie";
import NoPage from "./pages/utities/NoPage";

function App() {
  const cookie = new Cookies();

  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        {/* <Route
          element={<Protect_route allow={cookie.get("_ut") ? true : false} />}
        > */}
          <Route index element={<DashboardECommerce />} />
          <Route path="/Dashboad/Product">
            <Route index element={<Product />} />
            <Route path="Add" element={<AddProduct />} />
            <Route path="Edit" element={<EditProduct />} />
          </Route>
          <Route path="/Dashboad/Categories">
            <Route index element={<Categories />} />
            <Route path="Add" element={<AddCategory />} />
            <Route path="Edit" element={<EditCategory />} />
          </Route>
          <Route path="/Dashboad/Order">
            <Route index element={<Order />} />
            <Route path="Detail" element={<OrderDetails />} />
          </Route>
          <Route path="/Dashboad/Customer">
            <Route index element={<Customer />} />
            <Route path="Detail-Customer" element={<CustomerDetails />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
