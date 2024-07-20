import Language from '@mui/icons-material/Language'
import React from 'react'
import { FlexLeft, FlexRight, InputCon, InputCon1, LogoLang, NextBtn, SignCon, SIgnWrap } from './style';
import image from "../../assets/login/representation-user-experience-interface-design 1.png"
import { InputName, InputPWrapp, Line } from '../requestDemo/reqstyle';
import { Link } from 'react-router-dom';
import App from './hiddenpassword';
const SignLogin = () => {
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
                    <p>Name</p>
                    <InputName  placeholder='Enter email address' type="text" />
                </InputPWrapp>
                <InputPWrapp>
                    <p>Name</p>
                    
                    <App/>
                </InputPWrapp>
                </InputCon1>
                <Link to="/sidebar">
                <div>
                    <NextBtn>NEXT</NextBtn>
                </div>
                </Link>
                <Line></Line>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div >
                        <p style={{display: 'flex'}}>Don’t have an account? |
                            <Link to="/requestdemo" style={{textDecoration: 'none'}}>
                            <p
                            style={{
                            color:  '#6053B9',

                            /* Bold/14px -> 16px */
                            fontFamily: "Public Sans",
                            fontSize: 14,
                            fontStyle: 'normal',
                            fontWeight: 700,
                            cursor: 'pointer'}}> Fill out an aplication</p>
                            </Link>
                            </p>
                    </div>

                    <div>
                        <Link to="/forgotPassword" style={{textDecoration: 'none'}}>
                        <p  style={{
                            color:  '#6053B9',

                            /* Bold/14px -> 16px */
                            fontFamily: "Public Sans",
                            fontSize: 14,
                            fontStyle: 'normal',
                            fontWeight: 700,
                            cursor: 'pointer'}}>Forgot Password ?   </p>
                            </Link>
                    </div>
                </div>
                
                </SIgnWrap>
            </InputCon>
        </FlexLeft>




        <FlexRight><img src={image} alt="" /></FlexRight>
    </SignCon>
  )
}

export default SignLogin;