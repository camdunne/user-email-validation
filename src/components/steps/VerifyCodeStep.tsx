import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'

type VerifyCodeStepProps = {
  step: number
  setStep: (step: number) => void
}

const VerifyCodeStep = ({ step, setStep }: VerifyCodeStepProps) => {
  const [input, setInput] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [errMsg, setErrMsg] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setError(false)
    setErrMsg('')
  }

  const handleClearInput = () => {

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // const isValidEmail = validator.isEmail(input)
    // if (!isValidEmail) {
    //   setError(true)
    //   setErrMsg('Invalid Email Address.')
    //   return
    // }
    // go to next step
    setStep(2)
  }

  if (step === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <FormControl error={error} fullWidth>
          <FormLabel>Please enter the unique 4-digit code that we sent in your inbox.</FormLabel>
          <TextField
            id="email"
            size="small"
            variant="outlined"
            placeholder="Enter your email"
            error={error}
            helperText={errMsg}
            value={input}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '20px' }}
          />
          <Button variant="contained" onClick={handleClearInput} fullWidth>Clear code</Button>
          <Button variant="contained" type="submit" fullWidth>Submit</Button>
        </FormControl>
      </form >
    )
  } else {
    return null
  }
}

export default VerifyCodeStep