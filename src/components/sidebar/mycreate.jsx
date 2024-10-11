import React, { useState } from "react";
import { Allp, LogoLang } from "../loginPage/style";
import {
  AccordionContent,
  AccordionHeader,
  AccordionWrapper,
  AccorIcon,
  AnderSmith,
  FlexEnd,
  Pii,
  SidebarLeft,
  SmallLine,
  Termiz,
  Wrapper,
} from "./style";
import img1 from "../../assets/sidebar/Non-categorized.png";
import img2 from "../../assets/sidebar/System.png";
import img3 from "../../assets/sidebar/System (1).png";
import img4 from "../../assets/sidebar/Non-categorized (1).png";
import img5 from "../../assets/sidebar/Non-categorized (2).png";
import img6 from "../../assets/sidebar/E-commerce.png";
import img7 from "../../assets/sidebar/bell (1).png";
import img8 from "../../assets/sidebar/System (2).png";
import avatar from "../../assets/sidebar/Avatar.png";
// import { Divider } from '@mui/material'
// import { Line } from '../requestDemo/reqstyle'
import { Link, useLocation } from "react-router-dom";
// import ProfilePage from './rightbar/profile'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Mysidebar() {
  const methodLocation = useLocation();
  const currentLocation = methodLocation.pathname;

  // State for accordion
  const [isOpen, setIsOpen] = useState(false);

  // State for fetched data
  const [data, setData] = useState([]);

  // Toggle accordion open/closed
  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  // Close accordion
  const closeAccordion = () => {
    setIsOpen(false);
  };

  return (
    <SidebarLeft>
      <div style={{ position: "relative", height: "" }}>
        <LogoLang>
          <button>Logotype</button>
        </LogoLang>
        <Wrapper>
          <Termiz>
            <img src={img1} alt="termiz" />
            <Pii>Termiz</Pii>
          </Termiz>
          <SmallLine></SmallLine>

          <Link to="/leads">
            <Termiz activeColor={currentLocation === "/leads"}>
              <img src={img2} alt="termiz" />
              <Pii>Leads</Pii>
            </Termiz>
          </Link>

          <Link to="/teacher">
            <Termiz>
              <img src={img3} alt="termiz" />
              <Pii>Teachers</Pii>
            </Termiz>
          </Link>
          <Link to="/groups">
            <Termiz>
              <img src={img4} alt="groups" />
              <Pii>Groups</Pii>
            </Termiz>
          </Link>
          <Link to="/student">
            <Termiz>
              <img src={img5} alt="termiz" />
              <Pii>Students</Pii>
            </Termiz>
          </Link>
          <Link to="/budget">
            <Termiz>
              <img src={img6} alt="termiz" />
              <Pii>Budgets</Pii>
            </Termiz>
          </Link>
          <SmallLine></SmallLine>
          <Link to="/notification">
            <Termiz>
              <img src={img7} alt="termiz" />
              <Pii>Notification</Pii>
            </Termiz>
          </Link>
          <Termiz>
            {/* <img src={img8} alt="termiz" />
            <Pii>Settings</Pii> */}

            <AccordionWrapper>
              <AccordionHeader
                onClick={toggleAccordion}
                setColor={
                  currentLocation === "/office" ||
                  currentLocation === "/CEO" ||
                  currentLocation === "/archive"
                }
              >
                <div>
                  <img src={img8} alt="settingisico" />
                  Settings
                </div>
                <AccorIcon rotateIcon={isOpen}>
                  <KeyboardArrowDownIcon />
                </AccorIcon>
              </AccordionHeader>
              <Link to="/office" style={{ textDecoration: "none" }}>
                <AccordionContent
                  isOpen={isOpen}
                  setColor2={currentLocation === "/office"}
                  onClick={closeAccordion}
                >
                  <div>Office</div>
                </AccordionContent>
              </Link>
              <Link to="/CEO" style={{ textDecoration: "none" }}>
                <AccordionContent
                  isOpen={isOpen}
                  setColor2={currentLocation === "/CEO"}
                  onClick={closeAccordion}
                >
                  <div>CEO</div>
                </AccordionContent>
              </Link>
              <Link to="/archive" style={{ textDecoration: "none" }}>
                <AccordionContent
                  isOpen={isOpen}
                  setColor2={currentLocation === "/archive"}
                  onClick={closeAccordion}
                >
                  <div>Archive</div>
                </AccordionContent>
              </Link>
            </AccordionWrapper>
          </Termiz>
        </Wrapper>

        {/* 2 */}
      </div>
      <Link to="/profile">
        <FlexEnd activeColor={currentLocation === "/profile"}>
          <AnderSmith>
            <img src={avatar} alt="ava" />
            <h1>Ander Smith</h1>
          </AnderSmith>
        </FlexEnd>
      </Link>
    </SidebarLeft>

    // </div>
  );
}

export default Mysidebar;
