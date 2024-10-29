import Language from "@mui/icons-material/Language";
import React from "react";
import axios from "axios";
import {
  DemoAc,
  DemoAc2Wrapper,
  EmailText,
  FlexLeft,
  FlexRight,
  InfoWrapper,
  InputCon,
  InputCon1,
  LogoLang,
  NextBtn,
  PasswordLabel,
  PasswordText,
  SignCon,
  SIgnWrap,
} from "./style";
import image from "../../assets/login/representation-user-experience-interface-design 1.png";
import { InputName, InputPWrapp, Line } from "../requestDemo/reqstyle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';

 

const SignLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("error");
    try {
      const response = await axios.post("http://localhost:5050/auth/sign-in", {
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/profile");
        console.log("succes");
      } else {
        console.log(" no succes");
      }
      console.log(response);
      // navigate("/profile");

      console.log("Login successful", response.data);
      // Handle successful login
    } catch (error) {
        alert("Password or email wrong!");
      setError("Invalid username or password");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // alert(`Copied to clipboard: ${text}`);
  };
  

  return (
    <SignCon>
      <FlexLeft>
        <InputCon>
          <LogoLang>
            <button>Logotype</button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Language></Language>
              <p>EN</p>
            </div>
          </LogoLang>

          <SIgnWrap>
            <DemoAc>
              <h1>Sign In</h1>
               
              <DemoAc2Wrapper>
      <h3>Email:</h3>
      <InfoWrapper>
        <EmailText onClick={() => copyToClipboard('saturn@gmail.com')}>
          saturn@gmail.com
        </EmailText>
        <IconButton onClick={() => copyToClipboard('saturn@gmail.com')}>
          <ContentCopyIcon />
        </IconButton>
      </InfoWrapper>
      <PasswordLabel>Password</PasswordLabel>
      <InfoWrapper>
        <PasswordText onClick={() => copyToClipboard('1234')}>
          1234
        </PasswordText>
        <IconButton onClick={() => copyToClipboard('1234')}>
          <ContentCopyIcon />
        </IconButton>
      </InfoWrapper>
    </DemoAc2Wrapper>
              </DemoAc>
             

            <InputCon1 onSubmit={handleSubmit}>
              <p>Name</p>
              <InputName
                placeholder="Enter email address"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <p>password</p>
              <InputName
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
             

              <NextBtn type="submit">NEXT</NextBtn>
            </InputCon1>

            <div></div>

            <Line></Line>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p style={{ display: "flex" }}>
                  Don’t have an account? |
                  <Link to="/requestdemo" style={{ textDecoration: "none" }}>
                    <p
                      style={{
                        color: "#6053B9",

                        fontFamily: "Public Sans",
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      Fill out an aplication
                    </p>
                  </Link>
                </p>
              </div>

              <div>
                <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
                  <p
                    style={{
                      color: "#6053B9",
                      fontFamily: "Public Sans",
                      fontSize: 14,
                      fontStyle: "normal",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Forgot Password ?{" "}
                  </p>
                </Link>
              </div>
            </div>
          </SIgnWrap>
        </InputCon>
      </FlexLeft>

      <FlexRight>
        <img src={image} alt="no" />
      </FlexRight>
    </SignCon>
  );
};

export default SignLogin;
