import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import { Padding } from '@mui/icons-material';
import { ModalInputContainer, ModalLabel } from './reqstyle';

 export function Example() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [phone, setPhone,setValue] = useState()
  return (
        <>
        
        <PhoneInput className='pohneinput'
      placeholder="Enter phone number"
      value={phone}
      defaultCountry='UZ'
    //   onChange={setValue}
      onChange={(phone) => setValue(phone)}
      inputStyle={{ width: '250px' , height: '20px' }}
      buttonStyle={{
        
          height: "58px",
          borderRadius: "8px 0 0 8px",
          background: "#EFEEF8",
      }}
      />
        </>




   
      
  )
}

export default Example;