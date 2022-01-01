import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AddProduct from "./pages/AddProductt/AddProduct";
import ProductList from "./pages/ProductList/ProductList";
import Purchase from "./pages/Purchase/Purchase";
import Sell from "./pages/Sell/Sell";
import SellList from "./pages/SellList/SellList";
import PurchaseList from "./pages/PurchaseList/PurchaseList";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <div className="d-flex">
          <Sidebar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/purchaselist" element={<PurchaseList />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/selllist" element={<SellList />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
