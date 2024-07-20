import Language from '@mui/icons-material/Language'
import React from 'react'
import { FlexLeft, FlexRight, InputCon, InputCon1, LogoLang, NextBtn, SignCon, SIgnWrap } from './style';
import image from "../../assets/login/representation-user-experience-interface-design 1.png"
import { InputName, InputPWrapp, Line } from '../requestDemo/reqstyle';
import { Link } from 'react-router-dom';
import goback from "../../assets/login/chapstrelka.png"


const ForgotPasswordPage = () => {
  return (
    <SignCon>
        <FlexLeft>
            <InputCon>
            <LogoLang>
            <button>Logotype</button> 
            <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
            <Language></Language><p>EN</p>
            </div>
            </LogoLang>
                
                <SIgnWrap>
                    <div>
                        <h1>Sign In</h1>
                    </div>
                <InputCon1>
                <InputPWrapp>
                    <p>Email</p>
                    <InputName  placeholder='Enter email address' type="text" />
                </InputPWrapp>
             
                </InputCon1>
                <div>
                    <Link to="/changepassword" style={{textDecoration: 'none'}}>
                    <NextBtn>SEND</NextBtn>
                    </Link>
                </div>
                <Line></Line>
                <Link to="/signlogin" style={{textDecoration: 'none'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={goback} alt="fg" />
                    <p style={{color:  '#2C2669',

                            /* Bold/14px -> 16px */
                            fontFamily: "Public Sans",
                            fontSize: 14,
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 0,
                            cursor: 'pointer'/* 114.286% */}}>Back</p>
                </div>
                </Link>
                
                
                </SIgnWrap>
            </InputCon>
        </FlexLeft>




        <FlexRight><img src={image} alt="" /></FlexRight>
    </SignCon>
  )
}

export default ForgotPasswordPage;