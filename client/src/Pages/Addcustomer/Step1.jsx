import React,{useState, useEffect, useContext} from 'react'
import { TextField } from '@mui/material';
import { Row, Col } from "react-bootstrap";
import MenuItem from '@mui/material/MenuItem';
import { Context } from '../../context/Context';
import { Controller, useFormContext} from "react-hook-form";
   
export default function Step1() {
  const { control } = useFormContext(); 


  // console.log(customer)

  // if(customer){
  //   if(firstname === "" || lastname === "" || gender=== "" || email === "" || city === "" || country === "" || phone === ""){
  //     // setOpen(true);
  //     // setError(true)
  //   }
  // }

  const genders = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
    {
      value: "Transgender",
      label: "Transgender",
    },
  
  ];

  const countries = [
    {
      value: "India",
      label: "India",
    },
    {
      value: "Australia",
      label: "Australia",
    },
    {
      value: "Russia",
      label: "Russia",
    },
  
  ];

  return (
    <fieldset>
     <div class="form-card-Nav">
        <h2 class="fs-title"> Customer Registration </h2> 
        <Row>
          <Col xs="6">
            <div className='form-group'>
            <Controller
              control={control}
              name="firstname"
              render={({ field }) => (
                <TextField
                  required
                  label="First Name"
                  type="text"
                  fullWidth
                  autoFocus
                  {...field}
                />
              )}
            />
            {/* <TextField
              label="First Name"
              type="text"
              onChange={(e) => setfirstName(e.target.value)}
              fullWidth
              autoFocus
            /> */}
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
            <Controller
              control={control}
              name="lastname"
              render={({ field }) => (
                <TextField
                  required
                  label="Last Name"
                  type="text"
                  fullWidth
                  autoFocus
                  {...field}
                />
              )}
            />
            {/* <TextField
              label="Last Name"
              type="text"
              onChange={(e) => setlastName(e.target.value)}
              fullWidth
              autoFocus
            /> */}
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <TextField
                    required
                    fullWidth
                    id="gender"
                    select
                    label="Select Gender"
                    {...field}
                    >
                      {genders.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                </TextField>
              )}
            />
            {/* <TextField
                fullWidth
                id="gender"
                select
                label="Select Gender"
                onChange={(e) => setGender(e.target.value)}
                >
                  {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField> */}
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
          <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  required
                  label="Email"
                  type="email"
                  fullWidth
                  autoFocus
                  {...field}
                />
              )}
            />
            {/* <TextField
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              autoFocus
            /> */}
            
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
          <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <TextField
                  required
                  label="City"
                  type="text"
                  fullWidth
                  autoFocus
                  {...field}
                />
              )}
            />
            {/* <TextField
              label="City"
              type="text"
              onChange={(e) => setCity(e.target.value)}
              fullWidth
              autoFocus
            /> */}
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
            <Controller
              control={control}
              name="country"
              render={({ field }) => (
                <TextField
                    required
                    fullWidth
                    id="country"
                    select
                    label="Select Country"
                    {...field}
                    >
                      {countries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                </TextField>
              )}
            />
            {/* <TextField
                fullWidth
                id="country"
                select
                label="Select Country"
                onChange={(e) => setCountry(e.target.value)}
                >
                  {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField> */}
            </div>
          </Col>
          <Col xs="6">
          <div className='form-group'>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <TextField
                  required
                  label="Cell Phone"
                  type="tel"
                  fullWidth
                  autoFocus
                  {...field}
                />
              )}
            />
            {/* <TextField
              label="Cell Phone"
              type="tel"
              onChange={(e) => setCellphone(e.target.value)}
              fullWidth
              autoFocus
            /> */}
            </div>
          </Col>
        </Row>
    </div>
</fieldset>
  )
}
