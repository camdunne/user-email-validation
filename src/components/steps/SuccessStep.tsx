import Typography from '@mui/material/Typography'

type SuccessStepProps = {
  step: number
}

const SuccessStep = ({ step }: SuccessStepProps) => {
  if (step === 2) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>🎉 Congratulations</Typography>
        <br />
        <Typography variant='body1' style={{ fontSize: '.6em' }}>Welcome to the CompanyName Cloud</Typography>
      </div>
    )
  } else {
    return null
  }
}

export default SuccessStep