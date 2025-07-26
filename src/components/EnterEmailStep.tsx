import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import validator from 'validator'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

const EnterEmailStep = () => {
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel >Email</FormLabel>
        <FormHelperText>{errMsg}</FormHelperText>
        <TextField
          id="email"
          size="small"
          variant="outlined"
          placeholder="Enter your email"
          value={input}
          onChange={handleChange} />
        <Button variant="contained" type="submit">Next</Button>
      </FormControl>
    </form >
  )
}

export default EnterEmailStep