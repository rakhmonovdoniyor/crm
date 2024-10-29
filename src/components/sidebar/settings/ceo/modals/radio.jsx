import React from 'react'
import { RadioFlex, RadioFlex1, StafRadio } from '../style'
import { Checkbox, Radio, RadioGroup } from "@mui/joy";
const Radio2 = () => {
  return (
    <div>
    <form   >
       
        <RadioFlex1>
        <Checkbox
  color="primary"
  disabled={false}
  label="Demo 1"
  size="md"
/>
<Checkbox
  color="primary"
  disabled={false}
  label="Demo 2"
  size="md"
/>
<Checkbox
  color="primary"
  disabled={false}
  label="Demo 3"
  size="md"
/>
<Checkbox
  color="primary"
  disabled={false}
  label="Demo 4"
  size="md"
/>
        </RadioFlex1>
    </form>
    </div>
  )
}

export default Radio2