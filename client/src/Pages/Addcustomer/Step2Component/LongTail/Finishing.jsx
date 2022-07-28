
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
                          <p> Front Length </p>
                        </div>
                      </Col>
                      <Col xs="4">
                      <Controller
                        control={control}
                        name="LongTailFinishfrontlengthValue"
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
                          <p> Back Length </p>
                        </div>
                      </Col>
                      <Col xs="4">
                      <Controller
                        control={control}
                        name="LongTailFinishbacklengthValue"
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
                        name="LongTailFinishchestValue"
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
                        name="LongTailFinishwaistValue"
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
                        name="LongTailFinishhipsValue"
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
                        name="LongTailFinishshoulderValue"
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
                        name="LongTailFinishbicepValue"
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
                        name="LongTailFinishleftSleeveValue"
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
                        name="LongTailFinishrightSleeveValue"
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
                        name="LongTailFinishjacketcuffValue"
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
                          <p> First Button Position</p>
                        </div>
                      </Col>
                      <Col xs="4">
                      <Controller
                        control={control}
                        name="LongTailFinishfirstbuttonPositionValue"
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
