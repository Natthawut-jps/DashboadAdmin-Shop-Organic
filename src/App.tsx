import { Route, Routes } from 'react-router-dom'
import DashboardECommerce from './pages/DashboardECommerce'
import Product from './pages/Product'
import Categories from './pages/Categories'
import Order from './pages/Order'
import Customer from './pages/Customer'
import { Sidebar } from './pages/utities/Sidebar'
import EditProduct from './pages/EditProduct'
import AddProduct from './pages/AddProduct'
import AddCategory from './pages/AddCategory'
import EditCategory from './pages/EditCategory'
import OrderDetails from './pages/OrderDetails'
import CustomerDetails from './pages/CustomerDetails'
import { NoPage } from './pages/utities/NoPage'

function App() {
  return (
    <>
      <div className=' flex '>
        <Sidebar />
        <Routes>
          <Route index element={<DashboardECommerce />} />
          <Route path='/Dashboad/Product' >
            <Route index element={<Product />} />
            <Route path='Add' element={<AddProduct />} />
            <Route path='Edit' element={<EditProduct />} />
          </Route>
          <Route path='/Dashboad/Categories' >
            <Route index element={<Categories />} />
            <Route path='Add' element={<AddCategory />} />
            <Route path='Edit' element={<EditCategory />} />
          </Route>
          <Route path='/Dashboad/Order' >
            <Route index element={<Order />} />
            <Route path='Detail' element={<OrderDetails />} />
          </Route>
          <Route path='/Dashboad/Customer' >
            <Route index element={<Customer />} />
            <Route path='Detail-Customer' element={<CustomerDetails />} />
          </Route>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </div >

    </>
  )
}

export default App
