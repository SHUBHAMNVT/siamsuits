
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
                        name="PantFinishlengthValue"
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
                        name="PantFinishwaistValue"
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
                        name="PantFinishhipsValue"
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
                        <p> Crotch </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="PantFinishcrotchValue"
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
                        <p> Thigh </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="PantFinishthighValue"
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
                        <p> Calf </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="PantFinishcalfValue"
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
                        <p> Knee </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="PantFinishkneeValue"
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
                        <p> Cuff </p>
                      </div>
                    </Col>
                    <Col xs="4">
                    <Controller
                        control={control}
                        name="PantFinishcuffValue"
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
