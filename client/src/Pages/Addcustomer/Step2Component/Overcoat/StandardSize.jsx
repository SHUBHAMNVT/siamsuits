import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Controller, useFormContext} from "react-hook-form";

export default function StandardSize() {

  const [standardSize, setStandardSize] = useState("")

  const { control } = useFormContext();
  const sizes = [
    {
      value: "23",
      label: "23",
    },
    {
      value: "36",
      label: "36",
    },
  ]

  return (
    <>
      <Container fluid>
          <Row>
              <Col xs="4" className='m-auto mb-4'>
                 <div className='size-select-box'>
                   <TextField
                      fullWidth
                      select
                      label="Select Standard Size"
                      onChange={(e) => setStandardSize(e.target.value)}
                      >
                        {sizes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                      </TextField>
                 </div>
              </Col>
          </Row>
          <Row>
            <Col xs="6">
               <div className='form-sizess-boxes'>
                 <Row>
                    <Col xs="3">
                      <h4> Measurment Name </h4> 
                    </Col>
                    <Col xs="3">
                      <h4> Value </h4>
                    </Col>
                    <Col xs="3">
                      <h4> Adjustment </h4>
                    </Col>
                    <Col xs="3">
                      <h4> Total Value </h4>
                    </Col>
                 </Row>
                  <Row>
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Length </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardlengthValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardlengthAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardlengthTotal"
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
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Chest </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardchestValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardchestAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardchestTotal"
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
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Waist </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardwaistValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardwaistAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardwaistTotal"
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
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Hips </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardhipsValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardhipsAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardhipsTotal"
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
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Shoulder </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardshoulderValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardshoulderAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardshoulderTotal"
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
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Bicep </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardbicepValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardbicepAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardbicepTotal"
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
                <Col xs="3">
                  <h4> Measurment Name </h4> 
                </Col>
                <Col xs="3">
                  <h4> Value </h4>
                </Col>
                <Col xs="3">
                  <h4> Adjustment </h4>
                </Col>
                <Col xs="3">
                  <h4> Total Value </h4>
                </Col>
              </Row>
              <Row>
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Left Sleeve </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardleftSleeveValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardleftSleeveAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardleftSleeveTotal"
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
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Right Sleeve </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardrightSleeveValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardrightSleeveAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardrightSleeveTotal"
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
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Front </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardfrontValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardfrontAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardfrontTotal"
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
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Back </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardbackValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardbackAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardbackTotal"
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
                    <Col xs="3">
                       <div className='Measurment-name'>
                        <p> Sleeve Cuff </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardSleevecuffValue"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardSleevecuffAdjustment"
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
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="OvercoatStandardSleevecuffTotal"
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
