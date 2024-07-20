import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HomeComponent from './components/homePage';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/homePage';
import ReqPage from './components/requestDemo/reqpage';
import SignLogin from './components/loginPage/sign';
import ForgotPasswordPage from './components/loginPage/forgot';
import ChangePasswordPage from './components/loginPage/changepassword';
import Mysidebar from './components/sidebar/mycreate';
import ProfilePage from './components/sidebar/profile/profile';
import Leads from './components/sidebar/leads/leads';
import LeadsComponent from './components/sidebar/leads/leads';
// import Request from './components/requestDemo/navreq';
// import ReqPage from './components/homePage';


function Router () {

  const location = useLocation()
  const hideComponent = location.pathname !=="/" && 
  location.pathname !== "/requestdemo"&&
  location.pathname !== "/signlogin"&&
  location.pathname !== "/forgotPassword"&& 
  location.pathname !== "/changepassword"; 
 return(


<div style={{ display: "flex", width: "100%"}}>
      
      {hideComponent && <Mysidebar/>}

{/* auth wrapper */}
<div style={{
  width: "100%",
  backgroundColor: "#efeef8", 
  // padding: "40px"
  }}>
     <Routes>
      <Route path='/' element={<Navbar />}/>
      <Route path='/requestdemo' element={<ReqPage/>}/>
      <Route path='/signlogin' element={<SignLogin/>}/>
      <Route path='/forgotPassword' element={<ForgotPasswordPage/>}/>
      <Route path='/changepassword' element={<ChangePasswordPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/leads' element={<LeadsComponent/>}/>
     </Routes>
     </div>
    </div>
     
  )
};

export default Router;