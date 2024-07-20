import React from 'react'
import { AS, Btnwrap, Container, Container2, Container3, Container4, InputName, InputPWrapp, Line, LogBtn, LogBtnWrap, MiniWrap, PhoneEmail, Reqdemo, SendButton, SendRequest } from './reqstyle'
import { LogButton } from '../../styles/homeStyle/style'
// import Example from './numberInput'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import phone1 from "../../assets/req/Frame (1).png"
import email from "../../assets/req/Frame (2).png"
import Navbar from '../homePage'
import { Link } from 'react-router-dom'
import Example from './numberInput'

 function Request2  ()  {
    
        // `value` will be the parsed phone number in E.164 format.
        // Example: "+12133734253".
        const [phone, setValue] = useState()
     
  return (
    <Container>
    
        <Container2>
            <Container4>
                <h1>Fill out an aplication</h1>
                <InputPWrapp>
                    <p>Name</p>
                    <InputName  placeholder='Name' type="text" />
                </InputPWrapp>
                <InputPWrapp>
                    <p>Name</p>
                    <InputName placeholder='Surname' type="text" />
                </InputPWrapp>
                <InputPWrapp>
                    <p>Name</p>
                    <InputName type="text" />
                    <Example/>
                    {/* <PhoneInput 
      placeholder="Enter phone number"
      value={phone}
      defaultCountry='UZ'
    //   onChange={setValue}
      onChange={(phone) => setValue(phone)}
      inputStyle={{ padding: "300px" }}
      buttonStyle={{
          height: "58px",
          borderRadius: "8px 0 0 8px",
          background: "#EFEEF8",
      }}
      /> */}
                </InputPWrapp>
                <InputPWrapp>
                    <p>Name</p>
                    <InputName  placeholder='Email' type="text" />
                </InputPWrapp>
                <InputPWrapp>
                    <p>Name</p>
                    <InputName  placeholder='Country name' type="text" />
                </InputPWrapp>

                <div>
                    <Link to="/sidebar" style={{textDecoration: 'none'}}>
                    <SendButton>Send</SendButton>
                    </Link>
                    
                </div>
                <Line>
                    {/* <h1></h1> */}
                </Line>

                <MiniWrap>
                    <p $ptag >Are you already registered?</p>
                    <Link to="/signlogin">
                    <LogBtnWrap>
                    <LogBtn>Login</LogBtn>
                    </LogBtnWrap>
                   
                    </Link>
                </MiniWrap>
               
            </Container4>
        </Container2>




        <Container3>
            <Reqdemo>
                <h1>Request demo</h1>
                <p>If you wand to know ore about Options  opportunities. fill out <br /> the
                application and enjoy 14 days for free</p>
                <Line></Line>
            </Reqdemo>
            <AS>
                <h3>Contact us if you have any questions</h3>

                <PhoneEmail>
                    <img src={phone1} alt="" />
                    <p>(99) 999-99-99</p>
                </PhoneEmail>
                <PhoneEmail>
                <img src={email} alt="" />
                <p>info@gmail.com</p>

                </PhoneEmail>
                <Btnwrap>
                <SendRequest>Send Request</SendRequest>
                </Btnwrap>
                
            </AS>

        </Container3>
    </Container>
  )
}
;
export default Request2;