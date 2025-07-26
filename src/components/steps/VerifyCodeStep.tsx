import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

type VerifyCodeStepProps = {
  step: number
  setStep: (step: number) => void
}

const defaultCodeState = new Array(4).fill('')
const MAGIC_CODE = '9876'

const VerifyCodeStep = ({ step, setStep }: VerifyCodeStepProps) => {
  const [codeMap, setCodeMap] = useState<string[]>(defaultCodeState)
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [errMsg, setErrMsg] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setCodeMap((codeMap: string[]) => {
      codeMap[key] = e.target.value
      // check if should reenablesubmitbutton
      const disableSubmitButton = codeMap.filter(el => el !== '').length !== codeMap.length
      setDisableSubmit(disableSubmitButton)

      return [...codeMap]
    })
    setError(false)
    setErrMsg('')
  }

  const handleClearInput = () => {
    setCodeMap(defaultCodeState)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(codeMap)
    const isValid = codeMap.join('') === MAGIC_CODE

    if (!isValid) {
      setError(true)
      setErrMsg('This code is wrong. Please try again.')
      return
    }
    // go to next step
    setStep(2)
  }



  if (step === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Please enter the unique 4-digit code that we sent in your inbox.</FormLabel>
          <div style={{ display: 'flex' }}>
            {codeMap.map((input, i) => {
              const key = i.toString()
              return <TextField
                error={error}
                style={{ margin: '8px' }}
                id={key}
                key={key}
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, key)}
                size="small"
                variant="outlined"
                slotProps={{ htmlInput: { maxLength: 1 } }}
              />
            })}
          </div>
          <FormHelperText error={error}>{errMsg}</FormHelperText>
          <Button
            variant="outlined"
            onClick={handleClearInput}
            fullWidth>
            Clear code
          </Button>
          <Button
            variant="contained"
            type="submit"
            disabled={disableSubmit}
            fullWidth
            style={{ marginTop: '10px' }}
          >
            Submit
          </Button>
        </FormControl>
      </form >
    )
  } else {
    return null
  }
}

export default VerifyCodeStep