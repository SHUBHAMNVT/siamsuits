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
                        name="jacketStandardlengthValue"
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
                        name="jacketStandardlengthAdjustment"
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
                        name="jacketStandardlengthTotal"
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
                        name="jacketStandardchestValue"
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
                        name="jacketStandardchestAdjustment"
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
                        name="jacketStandardchestTotal"
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
                        name="jacketStandardwaistValue"
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
                        name="jacketStandardwaistAdjustment"
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
                        name="jacketStandardwaistTotal"
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
                        name="jacketStandardhipsValue"
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
                        name="jacketStandardhipsAdjustment"
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
                        name="jacketStandardhipsTotal"
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
                        name="jacketStandardshoulderValue"
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
                        name="jacketStandardshoulderAdjustment"
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
                        name="jacketStandardshoulderTotal"
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
                        name="jacketStandardbicepValue"
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
                        name="jacketStandardbicepAdjustment"
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
                        name="jacketStandardbicepTotal"
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
                        name="jacketStandardleftSleeveValue"
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
                        name="jacketStandardleftSleeveAdjustment"
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
                        name="jacketStandardleftSleeveTotal"
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
                        name="jacketStandardrightSleeveValue"
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
                        name="jacketStandardrightSleeveAdjustment"
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
                        name="jacketStandardrightSleeveTotal"
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
                        name="jacketStandardfrontValue"
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
                        name="jacketStandardfrontAdjustment"
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
                        name="jacketStandardfrontTotal"
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
                        name="jacketStandardbackValue"
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
                        name="jacketStandardbackAdjustment"
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
                        name="jacketStandardbackTotal"
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
                        name="jacketStandardcuffValue"
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
                        name="jacketStandardcuffAdjustment"
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
                        name="jacketStandardcuffTotal"
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
                        name="jacketStandardfirstbuttonValue"
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
                        name="jacketStandardfirstbuttonAdjustment"
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
                        name="jacketStandardfirstbuttonTotal"
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




// import React, {useState, useEffect} from 'react'
// import { Container, Row, Col } from "react-bootstrap";
// import { TextField } from '@mui/material';
// import MenuItem from '@mui/material/MenuItem';
// import { Controller, useFormContext} from "react-hook-form";

// export default function StandardSize() {

//   const [standardSize, setStandardSize] = useState("")

//   const { control } = useFormContext();


//   const sizes = [
//     {
//       value: "23",
//       label: "23",
//     },
//     {
//       value: "36",
//       label: "36",
//     },
//   ]

//   return (
//     <>
//       <Container fluid>
//            <Row>
//               <Col xs="4" className='m-auto mb-4'>
//                  <div className='size-select-box'>
//                    <TextField
//                       fullWidth
//                       select
//                       label="Select Standard Size"
//                       onChange={(e) => setStandardSize(e.target.value)}
//                       >
//                         {sizes.map((option) => (
//                         <MenuItem key={option.value} value={option.value}>
//                           {option.label}
//                         </MenuItem>
//                       ))}
//                       </TextField>
//                  </div>
//               </Col>
//            </Row>
//           <Row>
//             <Col xs="6">
//                <div className='form-sizess-boxes'>
//                  <Row>
//                     <Col xs="3">
//                       <h4> Measurment Name </h4> 
//                     </Col>
//                     <Col xs="3">
//                       <h4> Value </h4>
//                     </Col>
//                     <Col xs="3">
//                       <h4> Adjustment </h4>
//                     </Col>
//                     <Col xs="3">
//                       <h4> Total Value </h4>
//                     </Col>
//                  </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Length </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                       <Controller
//                         control={control}
//                         name="jacketlength"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                       <Controller
//                         control={control}
//                         name=""
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                       <Controller
//                         control={control}
//                         name="jacketStandardlengthTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Chest </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                       <Controller
//                         control={control}
//                         name="jacketchest"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardchestAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                       <Controller
//                         control={control}
//                         name="jacketStandardchestTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Waist </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketwaist"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                       <Controller
//                         control={control}
//                         name="jacketStandardwaistAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardwaistTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Hips </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jackethips"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardhipsAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                      <Controller
//                         control={control}
//                         name="jacketStandardhipsTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Shoulder </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketshoulder"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardshoulderAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardshoulderTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Bicep </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketbicep"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardbicepAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardbicepTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                </div>
               
//             </Col>
//             <Col xs="6">
//             <div className='form-sizess-boxes'>
//             <Row>
//                 <Col xs="3">
//                   <h4> Measurment Name </h4> 
//                 </Col>
//                 <Col xs="3">
//                   <h4> Value </h4>
//                 </Col>
//                 <Col xs="3">
//                   <h4> Adjustment </h4>
//                 </Col>
//                 <Col xs="3">
//                   <h4> Total Value </h4>
//                 </Col>
//               </Row>
//               <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Left Sleeve </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketleftSleeve"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardleftSleeveAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardleftSleeveTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Right Sleeve </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketrightSleeve"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardrightSleeveAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardrightSleeveTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Front </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketfront"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardfrontAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardfrontTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Jacket Back </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketjacketback"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardjacketbackAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardjacketbackTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> Jacket Cuff </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketjacketcuff"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardjacketcuffAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardjacketcuffTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                   <Row>
//                     <Col xs="3">
//                        <div className='Measurment-name'>
//                         <p> First Button </p>
//                       </div>
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketfirstbutton"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     {/* <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardfirstbuttonAdjustment"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col>
//                     <Col xs="3">
//                     <Controller
//                         control={control}
//                         name="jacketStandardfirstbuttonTotal"
//                         render={({ field }) => (
//                           <TextField
//                             type="text"
//                             className='form-control-custom'
//                             fullWidth
//                             autoFocus
//                             {...field}
//                           />
//                         )}
//                       />
//                     </Col> */}
//                   </Row>
//                </div>
//             </Col>
//           </Row>

//       </Container>
//     </>
//   );
// }
