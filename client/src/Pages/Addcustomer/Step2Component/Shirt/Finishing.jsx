
import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { TextField } from '@mui/material';
import { Controller, useFormContext } from "react-hook-form";

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
                        name="ShirtFinishlengthValue"
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
                        name="ShirtFinishchestValue"
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
                        name="ShirtFinishwaistValue"
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
                        name="ShirtFinishhipsValue"
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
                        name="ShirtFinishshoulderValue"
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
                          <p> Neck </p>
                        </div>
                      </Col>
                      <Col xs="4">
                      <Controller
                        control={control}
                        name="ShirtFinishneckValue"
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
                          <p> Bicep </p>
                        </div>
                      </Col>
                      <Col xs="4">
                      <Controller
                        control={control}
                        name="ShirtFinishbicepValue"
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
                          <p> Left Sleeve </p>
                        </div>
                      </Col>
                      <Col xs="4">
                      <Controller
                        control={control}
                        name="ShirtFinishleftSleeveValue"
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
                        name="ShirtFinishrightSleeveValue"
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
                          <p> Left Cuff </p>
                        </div>
                      </Col>
                      <Col xs="4">
                      <Controller
                        control={control}
                        name="ShirtFinishleftcuffValue"
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
                          <p> Right Cuff </p>
                        </div>
                      </Col>
                      <Col xs="4">
                      <Controller
                        control={control}
                        name="ShirtFinishrightcuffValue"
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
                          <p> Arm Hole </p>
                        </div>
                      </Col>
                      <Col xs="4">
                      <Controller
                        control={control}
                        name="ShirtFinisharmHoleValue"
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
