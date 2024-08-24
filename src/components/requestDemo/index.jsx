import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AS,
  Btnwrap,
  Container,
  Container2,
  Container3,
  Container4,
  InputName,
  InputPWrapp,
  Line,
  LogBtn,
  LogBtnWrap,
  MiniWrap,
  PhoneEmail,
  Reqdemo,
  SendButton,
  SendRequest,
} from "./reqstyle";
import { LogButton } from "../../styles/homeStyle/style";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import phone1 from "../../assets/req/Frame (1).png";
import email from "../../assets/req/Frame (2).png";
import Navbar from "../homePage";

import Example from "./numberInput";

function Request2() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [phone, setValue] = useState();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("error");
    try {
      const response = await axios.post("http://localhost:5053/crm/sign-up", {
        name,
        surname,
        country,
        email,
        password,
        number,
      });
      console.log(response);
      //   navigate("/sidebar");

      console.log("Login successful", response.data);
      // Handle successful login
    } catch (error) {
      //   alert("Password or email wrong!");
      setError("Invalid username or password");
    }
  };

  return (
    <Container>
      <Container2>
        <Container4>
          <form onSubmit={handleSubmit}>
            <h1>Fill out an aplication</h1>
            <InputPWrapp>
              <p>Name</p>
              <InputName
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputPWrapp>
            <InputPWrapp>
              <p>SurName</p>
              <InputName
                type="text"
                placeholder="SurName"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </InputPWrapp>
            <InputPWrapp>
              <p>country</p>
              <InputName
                type="text"
                placeholder="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </InputPWrapp>
            <InputPWrapp>
              <p>Number</p>
              <InputName
                type="number"
                placeholder="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </InputPWrapp>
            <InputPWrapp>
              <p>Email</p>
              <InputName
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputPWrapp>
            <InputPWrapp>
              <p>Password</p>
              <InputName
                type="number"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputPWrapp>

            <button type="submit">Send</button>

            <Line>{/* <h1></h1> */}</Line>

            <MiniWrap>
              <p $ptag>Are you already registered?</p>
              <Link to="/signlogin">
                <LogBtnWrap>
                  <LogBtn>Login</LogBtn>
                </LogBtnWrap>
              </Link>
            </MiniWrap>
          </form>
        </Container4>
      </Container2>

      <Container3>
        <Reqdemo>
          <h1>Request demo</h1>
          <p>
            If you wand to know ore about Options opportunities. fill out <br />{" "}
            the application and enjoy 14 days for free
          </p>
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
  );
}
export default Request2;
