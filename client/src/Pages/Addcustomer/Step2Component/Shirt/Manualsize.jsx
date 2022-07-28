import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Controller, useFormContext } from "react-hook-form";

export default function ManualSize() {

  const [manualSize, setManualSize] = useState("")

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
                      id="size"
                      select
                      label="Select Manual Size"
                      onChange={(e) => setManualSize(e.target.value)}
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
                        name="ShirtManuallengthValue"
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
                        name="ShirtManuallengthAdjustment"
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
                        name="ShirtManuallengthTotal"
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
                        name="ShirtManualchestValue"
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
                        name="ShirtManualchestAdjustment"
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
                        name="ShirtManualchestTotal"
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
                        name="ShirtManualwaistValue"
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
                        name="ShirtManualwaistAdjustment"
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
                        name="ShirtManualwaistTotal"
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
                        name="ShirtManualhipsValue"
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
                        name="ShirtManualhipsAdjustment"
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
                        name="ShirtManualhipsTotal"
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
                        name="ShirtManualshoulderValue"
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
                        name="ShirtManualshoulderAdjustment"
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
                        name="ShirtManualshoulderTotal"
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
                        <p> Neck </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="ShirtManualneckValue"
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
                        name="ShirtManualneckAdjustment"
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
                        name="ShirtManualneckTotal"
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
                        <p> Bicep </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="ShirtManualbicepValue"
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
                        name="ShirtManualbicepAdjustment"
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
                        name="ShirtManualbicepTotal"
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
                        <p> Left Sleeve </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="ShirtManualleftSleeveValue"
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
                        name="ShirtManualleftSleeveAdjustment"
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
                        name="ShirtManualleftSleeveTotal"
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
                        name="ShirtManualrightSleeveValue"
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
                        name="ShirtManualrightSleeveAdjustment"
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
                        name="ShirtManualrightSleeveTotal"
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
                        <p> Left Cuff </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="ShirtManualleftcuffValue"
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
                        name="ShirtManualleftcuffAdjustment"
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
                        name="ShirtManualleftcuffTotal"
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
                        <p> Right Cuff </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="ShirtManualrightcuffValue"
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
                        name="ShirtManualrightcuffAdjustment"
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
                        name="ShirtManualrightcuffTotal"
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
                        <p> Arm Hole </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="ShirtManualarmHoleValue"
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
                        name="ShirtManualarmHoleAdjustment"
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
                        name="ShirtManualarmHoleTotal"
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
