import MuiStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const steps = [
  'Enter Email',
  'Verify with code'
]
type StepperProps = {
  step: number
  setStep: (step: number | ((step: number) => number)) => void
}

const Stepper = ({ step, setStep }: StepperProps) => {
  if (step === 2) {
    return null
  }

  const handlePrev = () => {
    setStep((prev: number) => {
      if (prev === 0) return prev

      return prev - 1
    })
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        {step === 1 ? <IconButton onClick={handlePrev}><ArrowBackIosIcon /></IconButton> : null}
        <Typography variant="h6" style={{ fontSize: '.9em', fontWeight: 'bold', paddingTop: '.7em' }}>
          Sign in to CompanyName Cloud
        </Typography>

      </div>
      <br />
      <MuiStepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </MuiStepper>
    </>
  )
}

export default Stepper