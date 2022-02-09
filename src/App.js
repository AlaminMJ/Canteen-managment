import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";

import AddProduct from "./pages/AddProduct/AddProduct";
import ProductList from "./pages/ProductList/ProductList";
import Purchase from "./pages/Purchase/Purchase";
import Sell from "./pages/Sell/Sell";
import SellList from "./pages/Sell/SellList";
import PurchaseList from "./pages/Purchase/PurchaseList";
import Dashboard from "./pages/Dashboard/Dashboard";
import LogIn from "./pages/LogIn/LogIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Bill from "./pages/Bill/Bill";
import BillList from "./pages/Bill/BillList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="*" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<Home />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="purchaselist" element={<PurchaseList />} />
            <Route path="sell" element={<Sell />} />
            <Route path="selllist" element={<SellList />} />
            <Route path="bill" element={<Bill />} />
            <Route path="billlist" element={<BillList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
