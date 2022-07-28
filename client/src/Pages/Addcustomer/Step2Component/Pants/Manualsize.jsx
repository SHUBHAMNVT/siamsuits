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
                        name="PantManuallengthValue"
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
                        name="PantManuallengthAdjustment"
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
                        name="PantManuallengthTotal"
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
                        name="PantManualwaistValue"
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
                        name="PantManualwaistAdjustment"
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
                        name="PantManualwaistTotal"
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
                        name="PantManualhipsValue"
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
                        name="PantManualhipsAdjustment"
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
                        name="PantManualhipsTotal"
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
                        <p> Crotch </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="PantManualcrotchValue"
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
                        name="PantManualcrotchAdjustment"
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
                        name="PantManualcrotchTotal"
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
                        <p> Thigh </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="PantManualthighValue"
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
                        name="PantManualthighAdjustment"
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
                        name="PantManualthighTotal"
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
                        <p> Calf </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="PantManualcalfValue"
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
                        name="PantManualcalfAdjustment"
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
                        name="PantManualcalfTotal"
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
                        <p> Knee </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="PantManualkneeValue"
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
                        name="PantManualkneeAdjustment"
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
                        name="PantManualkneeTotal"
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
                        <p> Cuff </p>
                      </div>
                    </Col>
                    <Col xs="3">
                    <Controller
                        control={control}
                        name="PantManualcuffValue"
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
                        name="PantManualcuffAdjustment"
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
                        name="PantManualcuffTotal"
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
