import React from 'react'
import { RadioFlex, RadioFlex1, StafRadio } from '../style'
import { Checkbox, Radio, RadioGroup } from "@mui/joy";
const Radio1 = () => {
  return (
    <div>
    <form style={{display : 'grid', gap: "50px"}} >
        <RadioFlex>
            
            <Checkbox
  color="primary"
  disabled={false}
  label=" CEO"
  size="md"
/>
           
            
<Checkbox
  color="primary"
  disabled={false}
  label="Administration"
  size="md"
/>
            
          
        </RadioFlex>
        
    </form>
    </div>
  )
}

export default Radio1