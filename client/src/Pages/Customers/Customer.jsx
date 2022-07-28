import React from 'react'
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
import Viewcustomer from './Viewcustomer';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function Customer() {
  return (
    <>
      {/* <Container fluid>
        <Row>
          <Col lg="12">
             <div className="panel-change-boxes">  */}
                <Viewcustomer />
             {/* </div>
          </Col> 
        </Row>
      </Container> */}
    </>
  )
}
