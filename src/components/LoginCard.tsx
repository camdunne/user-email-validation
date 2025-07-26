import './LoginCard.css'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '../common/Card'
import EnterEmailStep from './steps/EnterEmailStep'
import VerifyWithCodeStep from './steps/VerifyCodeStep'
import SuccessStep from './steps/SuccessStep'
import Stepper from './Stepper'


const LoginCard = () => {
  const [step, setStep] = useState(0)

  return (
    <div id="parentContainer">
      <Card id="content" variant="outlined" style={{ margin: '20px', maxWidth: '500px' }}>
        <CardContent style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="h5">CompanyName</Typography>
          <Typography variant="subtitle1" style={{ fontSize: '.9em', fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Typography variant="body1" style={{ fontSize: '.8em' }}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Typography>
        </CardContent>
        <Card id="signin" variant="outlined" style={{ maxWidth: '400px' }}>
          <CardContent>
            <Stepper step={step} setStep={setStep} />
            <br />
            <EnterEmailStep step={step} setStep={setStep} />
            <VerifyWithCodeStep step={step} setStep={setStep} />
            <SuccessStep step={step} />
          </CardContent>
        </Card >
        <CardContent id="footer" style={{ textAlign: 'center' }}>
          {/* <div style={{ height: '4em' }}></div> */}
          <Typography variant="body2" style={{ color: 'grey', fontSize: '.6em' }}>@CompanyName</Typography>
        </CardContent>
      </Card >
    </div>
  )
}

export default LoginCard