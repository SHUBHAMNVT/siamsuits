import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Controller, useFormContext} from "react-hook-form";

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
                        name="jacketManuallengthValue"
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
                        name="jacketManuallengthAdjustment"
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
                        name="jacketManuallengthTotal"
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
                        name="jacketManualchestValue"
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
                        name="jacketManualchestAdjustment"
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
                      {/* <TextField
                          fullWidth
                          type="text"
                          className='form-control-custom'
                          autoFocus
                          onChange={(e) => {
                            chestData.adjustment = e.target.value
                            setChest({...chest, ...chestData})
                          }}
                        /> */}
                    </Col>
                    <Col xs="3">
                      <Controller
                        control={control}
                        name="jacketManualchestTotal"
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
                        name="jacketManualwaistValue"
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
                        name="jacketManualwaistAdjustment"
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
                        name="jacketManualwaistTotal"
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
                        name="jacketManualhipsValue"
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
                        name="jacketManualhipsAdjustment"
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
                        name="jacketManualhipsTotal"
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
                        name="jacketManualshoulderValue"
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
                        name="jacketManualshoulderAdjustment"
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
                        name="jacketManualshoulderTotal"
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
                        name="jacketManualbicepValue"
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
                        name="jacketManualbicepAdjustment"
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
                        name="jacketManualbicepTotal"
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
                        name="jacketManualleftSleeveValue"
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
                        name="jacketManualleftSleeveAdjustment"
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
                        name="jacketManualleftSleeveTotal"
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
                        name="jacketManualrightSleeveValue"
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
                        name="jacketManualrightSleeveAdjustment"
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
                        name="jacketManualrightSleeveTotal"
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
                        name="jacketManualfrontValue"
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
                        name="jacketManualfrontAdjustment"
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
                        name="jacketManualfrontTotal"
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
                        <p> Jacket Back </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="jacketManualbackValue"
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
                        name="jacketManualbackAdjustment"
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
                        name="jacketManualbackTotal"
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
                        <p> Jacket Cuff </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="jacketManualcuffValue"
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
                        name="jacketManualcuffAdjustment"
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
                        name="jacketManualcuffTotal"
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
                        <p> First Button </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="jacketManualfirstbuttonValue"
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
                        name="jacketManualfirstbuttonAdjustment"
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
                        name="jacketManualfirstbuttonTotal"
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








