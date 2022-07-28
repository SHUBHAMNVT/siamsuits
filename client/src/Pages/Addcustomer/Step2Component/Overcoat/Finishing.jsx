
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
                        name="OvercoatFinishlengthValue"
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
                        name="OvercoatFinishchestValue"
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
                        name="OvercoatFinishwaistValue"
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
                        name="OvercoatFinishhipsValue"
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
                        name="OvercoatFinishshoulderValue"
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
                        name="OvercoatFinishbicepValue"
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
                        name="OvercoatFinishleftSleeveValue"
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
                        name="OvercoatFinishrightSleeveValue"
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
                        name="OvercoatFinishfrontValue"
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
                        name="OvercoatFinishjacketbackValue"
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
                        name="OvercoatFinishjacketcuffValue"
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
