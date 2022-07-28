// import React from 'react'
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import StandardSize from "./StandardSize"
// import Manualsize from './Manualsize';
// import Finishing from './Finishing';

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
//           <Box sx={{ p: 13 }}>
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
  
// export default function Jacket() {

//     const theme = useTheme();
//     const [value, setValue] = React.useState(0);
  
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
  
//     const handleChangeIndex = (index) => {
//       setValue(index);
//     };

//   return (
//   <fieldset>
//     <div class="form-card">
//     <Box>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           className="custom-inner-tabs-Nav"
//           aria-label="full width tabs example" >

//           <Tab label="Standard Size" {...a11yProps(12)} />
//           <Tab label="Manual Size" {...a11yProps(13)} />
//           <Tab label="Finishing Size" {...a11yProps(14)} />

//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex} >

//         <TabPanel value={12} index={12} dir={theme.direction}  className='sizes-boxes-navm'>
//              <StandardSize />
//         </TabPanel>
//         <TabPanel value={13} index={13} dir={theme.direction} className='sizes-boxes-navm'>
//              <Manualsize />
//         </TabPanel>
//         <TabPanel value={14} index={14} dir={theme.direction} className='sizes-boxes-navm'>
//              <Finishing />
//         </TabPanel>
       
//       </SwipeableViews>
//     </Box>

//     </div> 
    
// </fieldset>
//   );
// }



/////////////////////////

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function Jacket() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Standard Size" {...a11yProps(0)} />
//           <Tab label="Manual Size" {...a11yProps(1)} />
//           <Tab label="Finishing Size" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         <StandardSize/>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Manualsize/>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <Finishing/>
//       </TabPanel>
//     </Box>
//   );
// }


import React,{useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import StandardSize from "./StandardSize"
import Manualsize from './Manualsize';
import Finishing from './Finishing';
import Box from '@mui/material/Box';
import { Controller, useFormContext} from "react-hook-form";

export default function Jacket() {

  const { control } = useFormContext()
  const [standard, setStandard] = useState(true)
  const [manual, setManual] = useState(false)
  const [finish, setFinish] = useState(false)

  const changeToStandard = (e) => {
    setStandard(e.target.value)
    setManual(false)
    setFinish(false)
  }

  const changeToManual = (e)=> {
    setManual(e.target.value);
    setStandard(false);
    setFinish(false) ;
  }

  const changeToFinish = (e) => {
    setFinish(e.target.value)
    setStandard(false)
    setManual(false)
  }

  return (
    <Box>
     {/* <FormControl className='mb-2'>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="standard" control={<Radio />} checked={standard} label="Standard Size" onChange={changeToStandard} />
        <FormControlLabel value="manual" control={<Radio />} label="Manual Size" onChange={changeToManual} />
        <FormControlLabel value="finish" control={<Radio />} label="Finishing Size" onChange={changeToFinish} />
      </RadioGroup>
    </FormControl> */}
    <FormControl className='mb-2'>
    <Controller
        control={control}
        name="fitting"
        render={({ field: { onChange, value } }) => (
          <RadioGroup 
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value} 
            onChange={(e) => onChange(e.target.value)}
          >
          <FormControlLabel value="standard" control={<Radio value="standard" />} checked={standard} label="Standard Size" onChange={changeToStandard} />
          <FormControlLabel value="manual" control={<Radio value="manual" />} label="Manual Size" onChange={changeToManual} />
          <FormControlLabel value="finish" control={<Radio value="finish" />} label="Finishing Size" onChange={changeToFinish} />
          </RadioGroup>
        )}
      />
      </FormControl>
    { standard &&
      <div>
        <StandardSize/>
      </div>
    }
    { manual &&
      <div>
        <Manualsize/>
      </div>
    }
    { finish &&
      <div>
        <Finishing/>
      </div>
    }

    
    </Box> 
  );
}
