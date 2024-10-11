import Language from "@mui/icons-material/Language";
import React from "react";
import axios from "axios";
import {
  FlexLeft,
  FlexRight,
  InputCon,
  InputCon1,
  LogoLang,
  NextBtn,
  SignCon,
  SIgnWrap,
} from "./style";
import image from "../../assets/login/representation-user-experience-interface-design 1.png";
import { InputName, InputPWrapp, Line } from "../requestDemo/reqstyle";
import { Link, useNavigate } from "react-router-dom";
import App from "./hiddenpassword";
import { useState } from "react";

const SignLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("error");
    try {
      const response = await axios.post("http://localhost:5053/sign-in", {
        email,
        password,
      });
      // if (response.status === 200) {
      //   navigate("/profile");
      //   console.log("succes");
      // } else {
      //   console.log(" no succes");
      // }
      // console.log(response);
      navigate("/profile");

      console.log("Login successful", response.data);
      // Handle successful login
    } catch (error) {
      //   alert("Password or email wrong!");
      setError("Invalid username or password");
    }
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
            <div>
              <h1>Sign In</h1>
            </div>

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
              {/* <App
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /> */}

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

                        /* Bold/14px -> 16px */
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

                      /* Bold/14px -> 16px */
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
        <img src={image} alt="" />
      </FlexRight>
    </SignCon>
  );
};

export default SignLogin;
