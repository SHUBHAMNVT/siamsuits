
import React from "react";
import { useContext } from "react";
import { Context } from "./context/Context";
import "./assets/css/demo.css";
import "./assets/css/style-nav.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import AdminLayout from "./layouts/Admin";
import Shipments from "./Pages/Shipment/Shipments";
import Add from "./Pages/Addcustomer/Add";
import Orders from "./Pages/Order/Orders"
import Invoices from "./Pages/Invoice/Invoices"
import Customer from "./Pages/Customers/Customer"
import Viewcustomer from "./Pages/Customers/Viewcustomer"
import Searchcustomer from "./Pages/Customers/Searchcustomer"
import Viewprofile from "./Pages/Customers/Viewprofile"
import Repeatorder from "./Pages/Order/Repeatorder"
import Grouporder from "./Pages/Order/Grouporder"
import AdminNavbar from "./components/Navbars/AdminNavbar"
import Footer from "./components/Footer/Footer"

function App() {

  const {user} = useContext(Context);
  // console.log(user)

  return (
    <>
    { user ?
    
    <Router>
      <AdminNavbar />
      <Routes>
        <Route exact path="/admin" element={<AdminLayout />}></Route>
        <Route exact path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/admin/order" element={<Orders />}></Route>
        <Route exact path="/admin/shipment" element={<Shipments />}></Route>
        <Route exact path="/admin/add" element={<Add />}></Route>
        <Route exact path="/admin/invoices" element={<Invoices />}></Route>
        <Route exact path="/admin/customer" element={<Customer />}></Route>
        <Route exact path="/admin/viewcustomer" element={<Viewcustomer />}></Route>
        <Route exact path="/admin/searchcustomer" element={<Searchcustomer />}></Route>
        <Route exact path="/admin/viewprofile" element={<Viewprofile />}></Route>
        <Route exact path="/admin/repeatorder" element={<Repeatorder />}></Route>
        <Route exact path="/admin/grouporder" element={<Grouporder />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
    :
    <Router>
      <Routes>
        <Route exact path="/" element={ <Login />}></Route>
      </Routes>
    </Router>
    }
    </>
  );
}

export default App;
