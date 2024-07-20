import React, { useState } from 'react'
import { Allp, LogoLang } from '../loginPage/style'
import { AnderSmith, FlexEnd, Pii, SidebarLeft, SmallLine, Termiz, Wrapper } from './style'
import img1 from "../../assets/sidebar/Non-categorized.png"
import img2 from "../../assets/sidebar/System.png"
import img3 from "../../assets/sidebar/System (1).png"
import img4 from "../../assets/sidebar/Non-categorized (1).png"
import img5 from "../../assets/sidebar/Non-categorized (2).png"
import img6 from "../../assets/sidebar/E-commerce.png"
import img7 from "../../assets/sidebar/bell (1).png"
import img8 from "../../assets/sidebar/System (2).png"
import avatar from "../../assets/sidebar/Avatar.png"
// import { Divider } from '@mui/material'
// import { Line } from '../requestDemo/reqstyle'
import { Link, useLocation } from 'react-router-dom'
// import ProfilePage from './rightbar/profile'

function Mysidebar  ()  {
    const methodLocation = useLocation()
  const currentLocation = methodLocation.pathname;

  return (
    
    <SidebarLeft>
        <div  style={{ position: "relative", height: "" }}>
        <LogoLang>
                    <button>Logotype</button>
                </LogoLang>
            <Wrapper>

                
                <Termiz>
                    
                    <img src={img1} alt="termiz" />
                    <Pii>
                    Termiz

                    </Pii>
                   
                </Termiz>
                <SmallLine></SmallLine>

                <Link to="/leads">
                <Termiz  activeColor={currentLocation === "/leads"}>
                    <img src={img2} alt="termiz" />
                    <Pii>
                    Leads

                    </Pii>
                </Termiz>
                </Link>
                <Termiz>
                    <img src={img3} alt="termiz" />
                    <Pii>
                    Teachers

                    </Pii>
                </Termiz>
                <Termiz>
                    <img src={img4} alt="termiz" />
                    <Pii>
                    Groups

                    </Pii>
                </Termiz>
                <Termiz>
                    <img src={img5} alt="termiz" />
                    <Pii>
                    Students

                    </Pii>
                </Termiz>
                <Termiz>
                    <img src={img6} alt="termiz" />
                    <Pii>
                    Budgets

                    </Pii>
                </Termiz>
                <SmallLine></SmallLine>
                <Termiz>
                    <img src={img7} alt="termiz" />
                    <Pii>
                    Notification

                    </Pii>
                </Termiz>
                <Termiz>
                    <img src={img8} alt="termiz" />
                    <Pii>
                    Settings

                    </Pii>
                </Termiz>

                
            </Wrapper>

        {/* 2 */}

        </div>
        <Link to="/profile" 
        
  >
        <FlexEnd activeColor={currentLocation === "/profile"}>
            <AnderSmith>
            <img src={avatar} alt="ava" />
            <h1>Ander Smith</h1>
            </AnderSmith>
        </FlexEnd>
        </Link>
        
    </SidebarLeft>
    
    // </div>
  )
}

export default Mysidebar;