import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
  SendButton1,
  SendRequest,
} from "./reqstyle";
import "react-phone-number-input/style.css";
import phone1 from "../../assets/req/Frame (1).png";


function Request2() {
  const [phone, setValue] = useState();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name, surname, country, number }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/signlogin");
      }
    } catch (error) {
      alert("Password or email wrong!");
      console.log("Password or email wrong");
    }
  };

  return (
    <Container>
      <Container2>
        <Container4>
          <form onSubmit={handleSubmit}>
            <h1>Fill out an application</h1>
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
              <p>Country</p>
              <InputName
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </InputPWrapp>
            <InputPWrapp>
              <p>Phone Number</p>
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
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputPWrapp>
            <InputPWrapp>
              <p>Password</p>
              <InputName
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputPWrapp>
            <LogBtnWrap style={{ padding: "10px 10px 10px 0px" }}>
              <SendButton1  type="submit">SEND</SendButton1>
            </LogBtnWrap>
            <Line />
            <MiniWrap style={{ paddingTop: 10 }}>
              <p>Are you already registered?</p>
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
            If you want to know more about Options opportunities, fill out the application and enjoy 14 days for free.
          </p>
          <Line />
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
