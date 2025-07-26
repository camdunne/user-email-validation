import MuiStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Enter Email',
  'Verify with code'
]
type StepperProps = {
  step: number
}

const Stepper = ({ step }: StepperProps) => {
  return (
    <MuiStepper activeStep={step} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  )
}

export default Stepper