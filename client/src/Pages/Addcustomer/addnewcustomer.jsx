
// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Button,
//   Stepper,
//   Step,
//   StepLabel,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   useForm,
//   Controller,
//   FormProvider,
//   useFormContext,
// } from "react-hook-form";
// import "./addcustomer.css"
// import Step1 from "./Step1"
// import Step2 from './Step2'
// import Step3 from './Step3'
// import Step4 from './Step4'


// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginRight: theme.spacing(1),
//   },
// }));

// function getSteps() {
//   return [
//     "Account",
//     "Personal",
//     "Payment",
//     "Finish",
//   ];
// }
// const AccountForm = () => {
  

//   // const { customerData } = useState({})
//   const getData = (data) =>{
//     console.log("hjghfgdjgfdj", data)
//   }

//   return (
//     <>
//       <Step1 customerData = {getData} />
//     </>
//   );
// };
// const PersonalForm = () => {
// //   const { control } = useFormContext();
//   return (
//     <>
//       <Step2 />
//     </>
//   );
// };
// const PaymentForm = () => {
//   return (
//     <>
//       <Step3 />
//     </>
//   );
// };
// const FinishForm = () => {
//   return (
//     <>
//       <Step4 />
//     </>
//   );
// };

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AccountForm />;
//     case 1:
//       return <PersonalForm />;
//     case 2:
//       return <PaymentForm />;
//     case 3:
//       return <FinishForm />;
//     default:
//       return "unknown step";
//   }
// }

// const Addnewcustomer = () => {
//   const classes = useStyles();
//   const methods = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       gender: "",
//       email: "",
//       city: "",
//       country: "",
//       phoneNumber: "",
//       lengthValue: "",
//       lenghAdjustment: "",
//       lengthTotalValue: "",
//       cardMonth: "",
//       cardYear: "",
//     },
//   });
//   const [activeStep, setActiveStep] = useState(0);
//   const [skippedSteps, setSkippedSteps] = useState([]);
//   const steps = getSteps();

//   const isStepOptional = (step) => {
//     return step === 1 || step === 2;
//   };

//   const isStepSkipped = (step) => {
//     return skippedSteps.includes(step);
//   };

//   const handleNext = (data) => {
//     console.log(data);
//     if (activeStep == steps.length - 1) {
//       // fetch("https://jsonplaceholder.typicode.com/comments")
//       //   .then((data) => data.json())
//       //   .then((res) => {
//       //     console.log(res);
//           setActiveStep(activeStep + 1);
//       //   });
//     } else {
//       setActiveStep(activeStep + 1);
//       setSkippedSteps(
//         skippedSteps.filter((skipItem) => skipItem !== activeStep)
//       );
//     }
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepSkipped(activeStep)) {
//       setSkippedSteps([...skippedSteps, activeStep]);
//     }
//     setActiveStep(activeStep + 1);
//   };

//   return (
//     <div>
//       <Stepper alternativeLabel activeStep={activeStep}>
//         {steps.map((step, index) => {
//           const labelProps = {};
//           const stepProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = (
//               <Typography
//                 variant="caption"
//                 align="center"
//                 style={{ display: "block" }}
//               >
//                 {/* optional */}
//               </Typography>
//             );
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step {...stepProps} key={index}>
//               <StepLabel {...labelProps}>{step}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>

//       {activeStep === steps.length ? (
//         <Typography variant="h3" align="center">
//           Thank You
//         </Typography>
//       ) : (
//         <>
//           <FormProvider {...methods}>
//             <form onSubmit={methods.handleSubmit(handleNext)}>
//               {getStepContent(activeStep)}

//               <Button
//                 className={classes.button}
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//               >
//                 back
//               </Button>
//               {isStepOptional(activeStep) && (
//                 <Button
//                   className={classes.button}
//                   variant="contained"
//                   color="primary"
//                   onClick={handleSkip}
//                 >
//                   skip
//                 </Button>
//               )}
//               <Button
//                 className={classes.button}
//                 variant="contained"
//                 color="primary"
//                 // onClick={handleNext}

//                 type="submit"
//               >
//                 {activeStep === steps.length - 1 ? "Finish" : "Next"}
//               </Button>
//             </form>
//           </FormProvider>
//         </>
//       )}
//     </div>
//   );
// };

// export default Addnewcustomer;






import React, { useState, useContext } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import "./addcustomer.css"
import Step1 from "./Step1"
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { axiosInstance } from "./../../config"
import { Context } from "../../context/Context";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Account",
    "Personal",
    "Payment",
    "Finish",
  ];
}
const AccountForm = () => {
  return (
    <>
    <Step1/>
    </>
  );
};
const PersonalForm = () => {
  return (
    <>
      <Step2/>
    </>
  );
};
const PaymentForm = () => {
  return (
    <>
     <Step3/>
    </>
  );
};
const FinishForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Step4/>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AccountForm />;
    case 1:
      return <PersonalForm />;
    // case 2:
    //   return <PaymentForm />;
    // case 3:
    //   return <FinishForm />;
    // default:
    //   return "unknown step";
  }
}

const Addnewcustomer = () => {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit } = methods;
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const { user } = useContext(Context)

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = async(data) => {
    console.log(data)
 
   const customerData = {
    firstname: data.firstname, 
    lastname: data.lastname,
    gender:data.gender,
    email:data.email,
    city:data.city,
    country:data.country,
    phone:data.phone
    }



    
    
    const measurement = {
      weight: data.weight,
      height:data.height,
      jacket:[
        {
          length:{
            value:Number(data.jacketStandardlengthValue),
            adjustment:Number(data.jacketStandardlengthAdjustment),
            total_value:Number(data.jacketStandardlengthTotal)
          },
          chest:{
            value:Number(data.jacketStandardchestValue),
            adjustment:Number(data.jacketStandardchestAdjustment),
            total_value:Number(data.jacketStandardchestTotal)
          },
          waist:{
            value:Number(data.jacketStandardwaistValue),
            adjustment:Number(data.jacketStandardwaistAdjustment),
            total_value:Number(data.jacketStandardwaistTotal)
          },
          hips:{
            value:Number(data.jacketStandardhipsValue),
            adjustment:Number(data.jacketStandardhipsAdjustment),
            total_value:Number(data.jacketStandardhipsTotal)
          },
          shoulder:{
            value:Number(data.jacketStandardshoulderValue),
            adjustment:Number(data.jacketStandardshoulderAdjustment),
            total_value:Number(data.jacketStandardshoulderTotal)
          },
          bicep:{
            value:Number(data.jacketStandardbicepValue),
            adjustment:Number(data.jacketStandardbicepAdjustment),
            total_value:Number(data.jacketStandardbicepTotal)
          },
          left_sleeve:{
            value:Number(data.jacketStandardleftSleeveValue),
            adjustment:Number(data.jacketStandardleftSleeveAdjustment),
            total_value:Number(data.jacketStandardleftSleeveTotal)
          },
          right_sleeve:{
            value:Number(data.jacketStandardrightSleeveValue),
            adjustment:Number(data.jacketStandardrightSleeveAdjustment),
            total_value:Number(data.jacketStandardrightSleeveTotal)
          },
          front:{
            value:Number(data.jacketStandardfrontValue),
            adjustment:Number(data.jacketStandardfrontAdjustment),
            total_value:Number(data.jacketStandardfrontTotal)
          },
          back:{
            value:Number(data.jacketStandardbackValue),
            adjustment:Number(data.jacketStandardbackAdjustment),
            total_value:Number(data.jacketStandardbackTotal)
          },
          cuff:{
            value:Number(data.jacketStandardcuffValue),
            adjustment:Number(data.jacketStandardcuffAdjustment),
            total_value:Number(data.jacketStandardcuffTotal)
          },
          first_button:{
            value:Number(data.jacketStandardfirstbuttonValue),
            adjustment:Number(data.jacketStandardfirstbuttonAdjustment),
            total_value:Number(data.jacketStandardfirstbuttonTotal)
          },
          fitting:data.fitting
        },
        {
          length:{
            value:Number(data.jacketManuallengthValue),
            adjustment:Number(data.jacketManuallengthAdjustment),
            total_value:Number(data.jacketManuallengthTotal)
          },
          chest:{
            value:Number(data.jacketManualchestValue),
            adjustment:Number(data.jacketManualchestAdjustment),
            total_value:Number(data.jacketManualchestTotal)
          },
          waist:{
            value:Number(data.jacketManualwaistValue),
            adjustment:Number(data.jacketManualwaistAdjustment),
            total_value:Number(data.jacketManualwaistTotal)
          },
          hips:{
            value:Number(data.jacketManualhipsValue),
            adjustment:Number(data.jacketManualhipsAdjustment),
            total_value:Number(data.jacketManualhipsTotal)
          },
          shoulder:{
            value:Number(data.jacketManualshoulderValue),
            adjustment:Number(data.jacketManualshoulderAdjustment),
            total_value:Number(data.jacketManualshoulderTotal)
          },
          bicep:{
            value:Number(data.jacketManualbicepValue),
            adjustment:Number(data.jacketManualbicepAdjustment),
            total_value:Number(data.jacketManualbicepTotal)
          },
          left_sleeve:{
            value:Number(data.jacketManualleftSleeveValue),
            adjustment:Number(data.jacketManualleftSleeveAdjustment),
            total_value:Number(data.jacketManualleftSleeveTotal)
          },
          right_sleeve:{
            value:Number(data.jacketManualrightSleeveValue),
            adjustment:Number(data.jacketManualrightSleeveAdjustment),
            total_value:Number(data.jacketManualrightSleeveTotal)
          },
          front:{
            value:Number(data.jacketManualfrontValue),
            adjustment:Number(data.jacketManualfrontAdjustment),
            total_value:Number(data.jacketManualfrontTotal)
          },
          back:{
            value:Number(data.jacketManualbackValue),
            adjustment:Number(data.jacketManualbackAdjustment),
            total_value:Number(data.jacketManualbackTotal)
          },
          cuff:{
            value:Number(data.jacketManualcuffValue),
            adjustment:Number(data.jacketManualcuffAdjustment),
            total_value:Number(data.jacketManualcuffTotal)
          },
          first_button:{
            value:Number(data.jacketManualfirstbuttonValue),
            adjustment:Number(data.jacketManualfirstbuttonAdjustment),
            total_value:Number(data.jacketManualfirstbuttonTotal)
          },
          fitting:data.fitting
        },
        {
          length:{
            value:Number(data.jacketFinishlengthValue)
          },
          chest:{
            value:Number(data.jacketFinishchestValue)
          },
          waist:{
            value:Number(data.jacketFinishwaistValue)
          },
          hips:{
            value:Number(data.jacketFinishhipsValue)
          },
          shoulder:{
            value:Number(data.jacketFinishshoulderValue)
          },
          bicep:{
            value:Number(data.jacketFinishbicepValue)
          },
          left_sleeve:{
            value:Number(data.jacketStandardleftSleeveValue)
          },
          right_sleeve:{
            value:Number(data.jacketFinishrightSleeveValue)
          },
          front:{
            value:Number(data.jacketStandardfrontValue)
          },
          back:{
            value:Number(data.jacketStandardbackValue)
          },
          cuff:{
            value:Number(data.jacketStandardcuffValue)
          },
          first_button:{
            value:Number(data.jacketStandardfirstbuttonValue)
          },
          fitting:data.fitting
        }
      ],
      pant:{
        length:{
          value:Number(data.PantStandardlengthValue),
          adjustment:Number(data.PantStandardlengthAdjustment),
          total_value:Number(data.PantStandardlengthTotal)
        },
        waist:{
          value:Number(data.PantStandardwaistValue),
          adjustment:Number(data.PantStandardwaistAdjustment),
          total_value:Number(data.PantStandardwaistTotal)
        },
        hips:{
          value:Number(data.PantStandardhipsValue),
          adjustment:Number(data.PantStandardhipsAdjustment),
          total_value:Number(data.PantStandardhipsTotal)
        },
        crotch:{
          value:Number(data.PantStandardcrotchValue),
          adjustment:Number(data.PantStandardcrotchAdjustment),
          total_value:Number(data.PantStandardcrotchTotal)
        },
        thigh:{
          value:Number(data.PantStandardthighValue),
          adjustment:Number(data.PantStandardthighAdjustment),
          total_value:Number(data.PantStandardthighTotal)
        },
        calf:{
          value:Number(data.PantStandardcalfValue),
          adjustment:Number(data.PantStandardcalfAdjustment),
          total_value:Number(data.PantStandardcalfTotal)
        },
        knee:{
          value:Number(data.PantStandardkneeValue),
          adjustment:Number(data.PantStandardkneeAdjustment),
          total_value:Number(data.PantStandardkneeTotal)
        },
        cuff:{
          value:Number(data.PantStandardcuffValue),
          adjustment:Number(data.PantStandardcuffAdjustment),
          total_value:Number(data.PantStandardcuffTotal)
        },
        fitting:data.fitting
      },
      vest:{
        length:{
          value:Number(data.VestStandardlengthValue),
          adjustment:Number(data.VestStandardlengthAdjustment),
          total_value:Number(data.VestStandardlengthTotal)
        },
        chest:{
          value:Number(data.VestStandardchestValue),
          adjustment:Number(data.VestStandardchestAdjustment),
          total_value:Number(data.VestStandardchestTotal)
        },
        waist:{
          value:Number(data.VestStandardwaistValue),
          adjustment:Number(data.VestStandardwaistAdjustment),
          total_value:Number(data.VestStandardwaistTotal)
        },
        hips:{
          value:Number(data.VestStandardhipsValue),
          adjustment:Number(data.VestStandardhipsAdjustment),
          total_value:Number(data.VestStandardhipsTotal)
        },
        shoulder:{
          value:Number(data.VestStandardshoulderValue),
          adjustment:Number(data.VestStandardshoulderAdjustment),
          total_value:Number(data.VestStandardshoulderTotal)
        },
        fitting:data.fitting
      },
      shirt:{
        length:{
          value:Number(data.ShirtStandardlengthValue),
          adjustment:Number(data.ShirtStandardlengthAdjustment),
          total_value:Number(data.ShirtStandardlengthTotal)
        },
        chest:{
          value:Number(data.ShirtStandardchestValue),
          adjustment:Number(data.ShirtStandardchestAdjustment),
          total_value:Number(data.ShirtStandardchestTotal)
        },
        waist:{
          value:Number(data.ShirtStandardwaistValue),
          adjustment:Number(data.ShirtStandardwaistAdjustment),
          total_value:Number(data.ShirtStandardwaistTotal)
        },
        hips:{
          value:Number(data.ShirtStandardhipsValue),
          adjustment:Number(data.ShirtStandardhipsAdjustment),
          total_value:Number(data.ShirtStandardhipsTotal)
        },
        shoulder:{
          value:Number(data.ShirtStandardshoulderValue),
          adjustment:Number(data.ShirtStandardshoulderAdjustment),
          total_value:Number(data.ShirtStandardshoulderTotal)
        },
        neck:{
          value:Number(data.ShirtStandardneckValue),
          adjustment:Number(data.ShirtStandardneckAdjustment),
          total_value:Number(data.ShirtStandardneckTotal)
        },
        bicep:{
          value:Number(data.ShirtStandardbicepValue),
          adjustment:Number(data.ShirtStandardbicepAdjustment),
          total_value:Number(data.ShirtStandardbicepTotal)
        },
        left_sleeve:{
          value:Number(data.ShirtStandardleftSleeveValue),
          adjustment:Number(data.ShirtStandardleftSleeveAdjustment),
          total_value:Number(data.ShirtStandardleftSleeveTotal)
        },
        right_sleeve:{
          value:Number(data.ShirtStandardrightSleeveValue),
          adjustment:Number(data.ShirtStandardrightSleeveAdjustment),
          total_value:Number(data.ShirtStandardrightSleeveTotal)
        },
        left_cuff:{
          value:Number(data.ShirtStandardleftcuffValue),
          adjustment:Number(data.ShirtStandardleftcuffAdjustment),
          total_value:Number(data.ShirtStandardleftcuffTotal)
        },
        right_cuff:{
          value:Number(data.ShirtStandardrightcuffValue),
          adjustment:Number(data.ShirtStandardrightcuffAdjustment),
          total_value:Number(data.ShirtStandardrightcuffTotal)
        },
        arm_hole:{
          value:Number(data.ShirtStandardarmHoleValue),
          adjustment:Number(data.ShirtStandardarmHoleAdjustment),
          total_value:Number(data.ShirtStandardarmHoleTotal)
        },
        fitting:data.fitting
      },
      overcoat:{
        length:{
          value:Number(data.OvercoatStandardlengthValue),
          adjustment:Number(data.OvercoatStandardlengthAdjustment),
          total_value:Number(data.OvercoatStandardlengthTotal)
        },
        chest:{
          value:Number(data.OvercoatStandardchestValue),
          adjustment:Number(data.OvercoatStandardchestAdjustment),
          total_value:Number(data.OvercoatStandardchestTotal)
        },
        waist:{
          value:Number(data.OvercoatStandardwaistValue),
          adjustment:Number(data.OvercoatStandardwaistAdjustment),
          total_value:Number(data.OvercoatStandardwaistTotal)
        },
        hips:{
          value:Number(data.OvercoatStandardhipsValue),
          adjustment:Number(data.OvercoatStandardhipsAdjustment),
          total_value:Number(data.OvercoatStandardhipsTotal)
        },
        shoulder:{
          value:Number(data.OvercoatStandardshoulderValue),
          adjustment:Number(data.OvercoatStandardshoulderAdjustment),
          total_value:Number(data.OvercoatStandardshoulderTotal)
        },
        bicep:{
          value:Number(data.OvercoatStandardbicepValue),
          adjustment:Number(data.OvercoatStandardbicepAdjustment),
          total_value:Number(data.OvercoatStandardbicepTotal)
        },
        left_sleeve:{
          value:Number(data.OvercoatStandardleftSleeveValue),
          adjustment:Number(data.OvercoatStandardleftSleeveAdjustment),
          total_value:Number(data.OvercoatStandardleftSleeveTotal)
        },
        right_sleeve:{
          value:Number(data.OvercoatStandardrightSleeveValue),
          adjustment:Number(data.OvercoatStandardrightSleeveAdjustment),
          total_value:Number(data.OvercoatStandardrightSleeveTotal)
        },
        front:{
          value:Number(data.OvercoatStandardfrontValue),
          adjustment:Number(data.OvercoatStandardfrontAdjustment),
          total_value:Number(data.OvercoatStandardfrontTotal)
        },
        back:{
          value:Number(data.OvercoatStandardbackValue),
          adjustment:Number(data.OvercoatStandardbackAdjustment),
          total_value:Number(data.OvercoatStandardbackTotal)
        },
        sleeve_cuff:{
          value:Number(data.OvercoatStandardSleevecuffValue),
          adjustment:Number(data.OvercoatStandardSleevecuffAdjustment),
          total_value:Number(data.OvercoatStandardSleevecuffTotal)
        },
        fitting:data.fitting
      },
      longtail:{
        front_length:{
          value:Number(data.LongTailStandardfrontlengthValue),
          adjustment:Number(data.LongTailStandardfrontlengthAdjustment),
          total_value:Number(data.LongTailStandardfrontlengthTotal)
        },
        back_length:{
          value:Number(data.LongTailStandardbacklengthValue),
          adjustment:Number(data.LongTailStandardbacklengthAdjustment),
          total_value:Number(data.LongTailStandardbacklengthTotal)
        },
        chest:{
          value:Number(data.LongTailStandardchestValue),
          adjustment:Number(data.LongTailStandardchestAdjustment),
          total_value:Number(data.LongTailStandardchestTotal)
        },
        waist:{
          value:Number(data.LongTailStandardwaistValue),
          adjustment:Number(data.LongTailStandardwaistAdjustment),
          total_value:Number(data.LongTailStandardwaistTotal)
        },
        hips:{
          value:Number(data.LongTailStandardhipsValue),
          adjustment:Number(data.LongTailStandardhipsAdjustment),
          total_value:Number(data.LongTailStandardhipsTotal)
        },
        shoulder:{
          value:Number(data.LongTailStandardshoulderValue),
          adjustment:Number(data.LongTailStandardshoulderAdjustment),
          total_value:Number(data.LongTailStandardshoulderTotal)
        },
        bicep:{
          value:Number(data.LongTailStandardbicepValue),
          adjustment:Number(data.LongTailStandardbicepAdjustment),
          total_value:Number(data.LongTailStandardbicepTotal)
        },
        left_sleeve:{
          value:Number(data.LongTailStandardleftSleeveValue),
          adjustment:Number(data.LongTailStandardleftSleeveAdjustment),
          total_value:Number(data.LongTailStandardleftSleeveTotal)
        },
        right_sleeve:{
          value:Number(data.LongTailStandardrightSleeveValue),
          adjustment:Number(data.LongTailStandardrightSleeveAdjustment),
          total_value:Number(data.LongTailStandardrightSleeveTotal)
        },
        cuff:{
          value:Number(data.LongTailStandardcuffValue),
          adjustment:Number(data.LongTailStandardcuffAdjustment),
          total_value:Number(data.LongTailStandardcuffTotal)
        },
        first_button_position:{
          value:Number(data.LongTailStandardfirstbuttonPositionValue),
          adjustment:Number(data.LongTailStandardfirstbuttonPositionAdjustment),
          total_value:Number(data.LongTailStandardfirstbuttonPositionTotal)
        },
        fitting:data.fitting
      }
    }
    // console.log(measurement)


    const customer = {
      token:user.token,
      user:customerData,
      measurement: measurement
    }  

    if (activeStep == steps.length - 1) {
     const res = await axiosInstance.post("customer/create", customer)
      if(res){
        console.log("----->", res.data)
      }
    } else {
      setActiveStep(activeStep + 1)
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="mb-5">
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit((data)=>handleNext(data))}>
            
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>

             
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default Addnewcustomer;