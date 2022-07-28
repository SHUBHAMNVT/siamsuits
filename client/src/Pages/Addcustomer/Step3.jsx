import React from 'react'
import Grid from '@material-ui/core/Grid';
import uploadImage from './../../assets/images/User.png'
import Webcam from './../../assets/images/Webcam.png'
import { Controller, useFormContext} from "react-hook-form";
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Step3() {
  const { control } = useFormContext();
  const handleSubmit = () => {
    alert('hello')
  }
  return ( 
    <>
        <div class="form-card mb-4">
          <h2 class="fs-title"> Picture Information </h2>
          <h4>Customer Name : James Wick</h4>
          <Grid container spacing={2} >
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <h3>Upload Picture</h3>
              <label htmlFor='fileInput'>
                <img src={uploadImage} alt="profile-bg"/>
              </label>
              <Controller
              control={control}
              name="upload"
              render={({ field }) => (
                <input
                type="file"
                id="fileInput"
                style={{display: 'none'}}
                {...field}
              />
              )}
            />
            <Controller
              control={control}
              name="ImageNotes"
              render={({ field }) => (
                <TextareaAutosize
                  aria-label="Customer Image Notes:"
                  minRows={3}
                  placeholder="Customer Image Notes "
                  style={{ width: 200 }}
                  {...field}
                />
              )}
            />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <h3>Load Web Cam</h3>
              <img src={Webcam} alt="profile-bg" onClick={handleSubmit}/>
            </Grid>
          </Grid>
        </div> 
        
        {/* <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
        <input type="button" name="next" class="next action-button" value="Save" />
        <input type="button" name="confirm_payment" class="next action-button" value="Place Order" /> */}
    </>
  )
}
