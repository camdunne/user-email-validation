import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '../common/Card'
import EmailValidationCard from './EmailValidationCard'


const LoginCard = () => {
  return (
    <Card variant="outlined" style={{ margin: '20px', maxWidth: '500px', height: '80%' }}>
      <>
        <CardContent style={{ textAlign: 'center' }}>
          <Typography variant="h5">Company Name</Typography>
          <Typography variant="subtitle1" style={{ fontSize: '.9em', fontWeight: 'bold' }}>The universal data management platform</Typography>
          <Typography variant="body1" style={{ fontSize: '.8em' }}>Manage any data as multi-dementional ararys and access with any tool at global scale.</Typography>
        </CardContent>
        <EmailValidationCard></EmailValidationCard>
      </>
    </Card >
  )
}

export default LoginCard