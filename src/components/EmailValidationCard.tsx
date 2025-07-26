import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '../common/Card'
import EnterEmailStep from './EnterEmailStep'


const EmailValidationCard = () => {
  return (
    <Card variant="outlined" style={{ maxWidth: '400px' }}>
      <>
        <CardContent style={{ textAlign: 'center' }}>
          <Typography variant="body1" style={{ fontSize: '.9em', fontWeight: 'bold' }}>Sign in to Company Name Cloud</Typography>
          <Typography>Enter Email</Typography>

          <EnterEmailStep></EnterEmailStep>
        </CardContent>
      </>
    </Card >
  )
}

export default EmailValidationCard