import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import validator from 'validator'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'

type EnterEmailStepProps = {
  step: number
  setStep: (step: number) => void
}

const EnterEmailStep = ({ step, setStep }: EnterEmailStepProps) => {
  const [input, setInput] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [errMsg, setErrMsg] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setError(false)
    setErrMsg('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isValidEmail = validator.isEmail(input)
    if (!isValidEmail) {
      setError(true)
      setErrMsg('Invalid Email Address.')
      return
    }
    // go to next step
    setStep(1)
  }

  if (step === 0) {
    return (
      <form onSubmit={handleSubmit}>
        <FormControl error={error} fullWidth>
          <FormLabel>Email</FormLabel>
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
          <Button variant="contained" type="submit" fullWidth>Next</Button>
        </FormControl>
      </form >
    )
  } else {
    return null
  }
}

export default EnterEmailStep