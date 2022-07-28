
import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { TextField } from '@mui/material';
import { Controller, useFormContext} from "react-hook-form";

export default function Finishing() {

  const { control } = useFormContext();

  return (
    <>
      <Container fluid>
          <Row>
            <Col xs="6">
               <div className='form-sizess-boxes'>
                 <Row>
                    <Col xs="8">
                      <h4> Measurment Name </h4> 
                    </Col>
                    <Col xs="4">
                      <h4> Value </h4>
                    </Col>
                 </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Length </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishlengthValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Chest </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishchestValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Waist </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishwaistValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Hips </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishhipsValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Shoulder </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishshoulderValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Bicep </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishbicepValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
               </div>
               
            </Col>
            <Col xs="6">
            <div className='form-sizess-boxes'>
            <Row>
                <Col xs="8">
                  <h4> Measurment Name </h4> 
                </Col>
                <Col xs="4">
                  <h4> Value </h4>
                </Col>
              </Row>
              <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Left Sleeve </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishleftSleeveValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Right Sleeve </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishrightSleeveValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Front </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishfrontValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Jacket Back </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishbackValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> Jacket Cuff </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishcuffValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="8">
                       <div className='Measurment-name'>
                        <p> First Button </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="jacketFinishfirstbuttonValue"
                        render={({ field }) => (
                          <TextField
                            type="text"
                            className='form-control-custom'
                            fullWidth
                            autoFocus
                            {...field}
                          />
                        )}
                      />
                    </Col>
                  </Row>
               </div>
            </Col>
          </Row>

      </Container>
    </>
  );
}


