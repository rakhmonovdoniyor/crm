import Language from '@mui/icons-material/Language'
import React from 'react'
import { Allp, FlexLeft, FlexRight, InputCon, InputCon1, LogoLang, NextBtn, SignCon, SIgnWrap } from './style';
import image from "../../assets/login/representation-user-experience-interface-design 1.png"
import { InputName, InputPWrapp, Line } from '../requestDemo/reqstyle';
import { Link } from 'react-router-dom';
import App from './hiddenpassword';
const ChangePasswordPage = () => {
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
                    <Allp>
                        <h1>Change Password </h1>
                        <p>Please enter a new password for personal security</p>
                    </Allp>
                <InputCon1>
                <InputPWrapp>
                    <p>New Password</p>
                    {/* <InputName  placeholder='Enter email address' type="text" /> */}
                    <App/>
                </InputPWrapp>
                <InputPWrapp>
                    <p>Repeat New Password</p>
                    
                    <App/>
                </InputPWrapp>
                </InputCon1>
                <div>
                    <NextBtn>NEXT</NextBtn>
                </div>
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

export default ChangePasswordPage;