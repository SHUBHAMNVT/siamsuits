import React, {useState} from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Jacket from './Step2Component/Jacket/Jacket';
import Pants from './Step2Component/Pants/Pants';
import Vest from './Step2Component/Vest/Vest'
import Shirt from './Step2Component/Shirt/Shirt'
import Overcoat from './Step2Component/Overcoat/Overcoat';
import LongTail from './Step2Component/LongTail/LongTail';
import { Row, Col } from "react-bootstrap";
import { Container, TextField } from '@mui/material';
import { Controller, useFormContext} from "react-hook-form";


// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`full-width-tabpanel-${index}`}
//         aria-labelledby={`full-width-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box sx={{ p: 3 }}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }
  
//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//   };
  
//   function a11yProps(index) {
//     return {
//       id: `full-width-tab-${index}`,
//       'aria-controls': `full-width-tabpanel-${index}`,
//     };
//   }
  
// export default function Step2() {

// const theme = useTheme();
// const [value, setValue] = React.useState(0);

// const handleChange = (event, newValue) => {
//     setValue(newValue);
// };

// const handleChangeIndex = (index) => {
//     setValue(index);
// };

//   return (
//   <fieldset>
//     <div class="form-card">
//     <Box sx={{ bgcolor: 'background.paper' }}>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example" >

//           <Tab label="Jacket" {...a11yProps(0)} />
//           <Tab label="Pants" {...a11yProps(1)} />
//           <Tab label="Vest" {...a11yProps(2)} />
//           <Tab label="Shirt" {...a11yProps(3)} />
//           <Tab label="Overcoat" {...a11yProps(4)} />
//           <Tab label="LongTail" {...a11yProps(5)} />

//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex} >

//         <TabPanel value={0} index={0} dir={theme.direction}>
//           <Jacket />
//           <Row>
//             <Col xs="12">
//                <div className='height-weight-nm'>
//                  <h4> Height & Weight </h4>
//               </div>
//             </Col>
//             <Col xs="6">
//               <h5> Height </h5>
//                <Row>
//                  <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="FT"
//                       className='form-control-custom'
//                       autoFocus
//                   />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="IN"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="CM"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
              
//                </Row>
//             </Col>
//             <Col xs="6">
//             <h5> Weight </h5>
//             <Row>
//               <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="LB"
//                     className='form-control-custom'
//                     autoFocus
//                 />
//                 </Col>
//                 <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="KG"
//                     className='form-control-custom'
//                     autoFocus
//                     />
//                 </Col>
//                </Row>
//             </Col>
//           </Row>
//         </TabPanel>

//         <TabPanel value={1} index={1} dir={theme.direction}>
//         <Pants />
//           <Row>
//             <Col xs="12">
//                <div className='height-weight-nm'>
//                  <h4> Height & Weight </h4>
//               </div>
//             </Col>
//             <Col xs="6">
//               <h5> Height </h5>
//                <Row>
//                  <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="FT"
//                       className='form-control-custom'
//                       autoFocus
//                   />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="IN"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="CM"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
              
//                </Row>
//             </Col>
//             <Col xs="6">
//             <h5> Weight </h5>
//             <Row>
//               <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="LB"
//                     className='form-control-custom'
//                     autoFocus
//                 />
//                 </Col>
//                 <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="KG"
//                     className='form-control-custom'
//                     autoFocus
//                     />
//                 </Col>
//                </Row>
//             </Col>
//           </Row>
//         </TabPanel>

//         <TabPanel value={2} index={2} dir={theme.direction}>
//          <Vest />
//           <Row>
//             <Col xs="12">
//                <div className='height-weight-nm'>
//                  <h4> Height & Weight </h4>
//               </div>
//             </Col>
//             <Col xs="6">
//               <h5> Height </h5>
//                <Row>
//                  <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="FT"
//                       className='form-control-custom'
//                       autoFocus
//                   />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="IN"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="CM"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
              
//                </Row>
//             </Col>
//             <Col xs="6">
//             <h5> Weight </h5>
//             <Row>
//               <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="LB"
//                     className='form-control-custom'
//                     autoFocus
//                 />
//                 </Col>
//                 <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="KG"
//                     className='form-control-custom'
//                     autoFocus
//                     />
//                 </Col>
//                </Row>
//             </Col>
//           </Row>
//         </TabPanel>

//         <TabPanel value={3} index={3} dir={theme.direction}>
//           <Shirt />
//           <Row>
//             <Col xs="12">
//                <div className='height-weight-nm'>
//                  <h4> Height & Weight </h4>
//               </div>
//             </Col>
//             <Col xs="6">
//               <h5> Height </h5>
//                <Row>
//                  <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="FT"
//                       className='form-control-custom'
//                       autoFocus
//                   />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="IN"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="CM"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
              
//                </Row>
//             </Col>
//             <Col xs="6">
//             <h5> Weight </h5>
//             <Row>
//               <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="LB"
//                     className='form-control-custom'
//                     autoFocus
//                 />
//                 </Col>
//                 <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="KG"
//                     className='form-control-custom'
//                     autoFocus
//                     />
//                 </Col>
//                </Row>
//             </Col>
//           </Row>
//         </TabPanel>
        
//         <TabPanel value={4} index={4} dir={theme.direction}>
//         <Overcoat />
//           <Row>
//             <Col xs="12">
//                <div className='height-weight-nm'>
//                  <h4> Height & Weight </h4>
//               </div>
//             </Col>
//             <Col xs="6">
//               <h5> Height </h5>
//                <Row>
//                  <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="FT"
//                       className='form-control-custom'
//                       autoFocus
//                   />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="IN"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="CM"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
              
//                </Row>
//             </Col>
//             <Col xs="6">
//             <h5> Weight </h5>
//             <Row>
//               <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="LB"
//                     className='form-control-custom'
//                     autoFocus
//                 />
//                 </Col>
//                 <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="KG"
//                     className='form-control-custom'
//                     autoFocus
//                     />
//                 </Col>
//                </Row>
//             </Col>
//           </Row>
//         </TabPanel>

//         <TabPanel value={5} index={5} dir={theme.direction}>
//          <LongTail />
//           <Row>
//             <Col xs="12">
//                <div className='height-weight-nm'>
//                  <h4> Height & Weight </h4>
//               </div>
//             </Col>
//             <Col xs="6">
//               <h5> Height </h5>
//                <Row>
//                  <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="FT"
//                       className='form-control-custom'
//                       autoFocus
//                   />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="IN"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
//                   <Col xs="4">
//                   <TextField
//                       name=""
//                       fullWidth
//                       type="text"
//                       id=""
//                       placeholder="CM"
//                       className='form-control-custom'
//                       autoFocus
//                       />
//                   </Col>
              
//                </Row>
//             </Col>
//             <Col xs="6">
//             <h5> Weight </h5>
//             <Row>
//               <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="LB"
//                     className='form-control-custom'
//                     autoFocus
//                 />
//                 </Col>
//                 <Col xs="6">
//                 <TextField
//                     name=""
//                     fullWidth
//                     type="text"
//                     id=""
//                     placeholder="KG"
//                     className='form-control-custom'
//                     autoFocus
//                     />
//                 </Col>
//                </Row>
//             </Col>
//           </Row>
//         </TabPanel>
//       </SwipeableViews>
//     </Box>

//     </div> 
// </fieldset>
//   );
// }


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { control } = useFormContext();
  // const [height, setHeight] = useState({
  //   height1:"",
  //   height2:"",
  //   height3:""
  // })
  // const [weight, setWeight] = useState({
  //   weight1:"",
  //   weight2:""
  // })

  // const heightdata = height.height1+"-"+height.height2+"-"+height.height3
  // const weightdata = weight.weight1+"-"+weight.weight2
  // console.log(heightdata)
  // console.log(weightdata)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Jacket" {...a11yProps(0)} />
          <Tab label="Pants" {...a11yProps(1)} />
          <Tab label="Vest" {...a11yProps(2)} />
          <Tab label="Shirt" {...a11yProps(3)} />
          <Tab label="Overcoat" {...a11yProps(4)} />
          <Tab label="LongTail" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Jacket/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Pants />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Vest/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Shirt/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Overcoat/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <LongTail/>
      </TabPanel>
            
    </Box>
    <Row className='pb-3'>
    <Col xs="12">
       <div className='height-weight-nm'>
         <h4> Height & Weight </h4>
      </div>
    </Col>
    <Col xs="6">
      <h5> Height </h5>
       <Row>
        <Col xs="4">
          {/* <TextField
             fullWidth
             type="text"
             placeholder="FT"
             onChange={({target}) => setHeight(height => ({...height,height1:target.value}))}
             className='form-control-custom'
             autoFocus
           /> */}
           <Controller
              control={control}
              name="height"
              render={({ field }) => (
                <TextField
                  type="text"
                  fullWidth
                  autoFocus
                  {...field}
                />
              )}
            />
         </Col>
         <Col xs="4">
           <TextField
             fullWidth
             type="text"
             placeholder="IN"
            //  onChange={({target}) => setHeight(height => ({...height,height2:target.value}))}
             className='form-control-custom'
             autoFocus
           />
         </Col>
         <Col xs="4">
           <TextField
             fullWidth
             type="text"
             placeholder="CM"
            //  onChange={({target}) => setHeight(height => ({...height,height3:target.value}))}
             className='form-control-custom'
             autoFocus
           />
         </Col>
     
      </Row>
   </Col>
   <Col xs="6">
   <h5> Weight </h5>
   <Row>
     <Col xs="6">
      <Controller
        control={control}
        name="weight"
        render={({ field }) => (
          <TextField
            type="text"
            fullWidth
            autoFocus
            {...field}
          />
        )}
       />
       </Col>
       <Col xs="6">
       <TextField
           fullWidth
           type="text"
           placeholder="KG"
          //  onChange={({target}) => setWeight(weight => ({...weight,weight2:target.value}))}
           className='form-control-custom'
           autoFocus
           />
       </Col>
      </Row>
   </Col>
 </Row>
 </>
  );
}