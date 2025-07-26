import { useState } from 'react'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '../common/Card'
import EnterEmailStep from './EnterEmailStep'
import VerifyWithCodeStep from './VerifyCodeStep'
import Stepper from './Stepper'


const LoginCard = () => {
  const [step, setStep] = useState(0)

  return (
    <Card variant="outlined" style={{ margin: '20px', maxWidth: '500px', height: '80%' }}>
      <>
        <CardContent style={{ textAlign: 'center' }}>
          <Typography variant="h5">Company Name</Typography>
          <Typography variant="subtitle1" style={{ fontSize: '.9em', fontWeight: 'bold' }}>The universal data management platform</Typography>
          <Typography variant="body1" style={{ fontSize: '.8em' }}>Manage any data as multi-dementional arrays and access with any tool at global scale.</Typography>
        </CardContent>
        <Card variant="outlined" style={{ maxWidth: '400px' }}>
          <CardContent>
            <Typography variant="body1" style={{ fontSize: '.9em', fontWeight: 'bold' }}>Sign in to Company Name Cloud</Typography>
            <br />
            <Stepper step={step} />
            <br />
            <EnterEmailStep step={step} setStep={setStep}></EnterEmailStep>
            <VerifyWithCodeStep step={step} setStep={setStep}></VerifyWithCodeStep>
          </CardContent>
        </Card >
      </>
    </Card >
  )
}

export default LoginCard