import * as React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { styled } from '@mui/system';

const InputPWrapp = styled('div')({
  marginBottom: '20px',
});

const Label = styled('p')({
  marginBottom: '5px',
  fontSize: '14px',
  color: '#333',
});

const StyledPhoneInput = styled(PhoneInput)({
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  border: 'none', // Borderni olib tashlash
  fontSize: '16px',
  '&:focus': {
    borderColor: '#6053B9',
    outline: 'none',
  },
});

export default function PhoneNumberInput({ value, onChange }) {
  return (
    <InputPWrapp>
      <Label>Number</Label>
      <StyledPhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={onChange}
      />
    </InputPWrapp>
  );
}
