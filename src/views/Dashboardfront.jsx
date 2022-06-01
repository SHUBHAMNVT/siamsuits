import React from "react";
import "./../assets/css/style-nav.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboardfront() {
  return (
    <>
    <div className='dash-panel-top-nav'>
        <Nav>
            <Link to="/admin/order"> Order </Link>
            <Link to="/admin/customer"> Customer </Link>
            <Link to="/admin/invoices"> Invoice </Link>
            <Link to="/admin/shipment"> Shipment </Link>
        </Nav>
    </div>
    </> 
  )
}
