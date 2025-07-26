import MuiCard from '@mui/material/Card'
import { styled } from '@mui/material/styles'

const Card = styled(MuiCard)(() => ({
  // display: 'flex',
  flexGrow: 1,
  borderRadius: '16px',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: 8,
  gap: 4,
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
}));

export default Card