import React, { useState } from 'react'
import { ColGrid, Colimg, ColumnButton, GridButton, Gridimg, InputContainer, InputStyledIcon, LeadBody, Leadhead, LeadsCon, LeadsCon2, ResetButton, SearchIcon, SearchSection, SearchSectionOption } from './style'
import column from "../../../assets/leads/Frame (4).png"
import grid from "../../../assets/leads/Frame (5).png"
import search from "../../../assets/leads/serach.png"
import strelka from "../../../assets/leads/strelka.png"
import reset from "../../../assets/leads/reset.png"
import AddleadModal from './addleadmod'
import LeadGrid from './leadgridcolumn/leadgrid'
import LeadColumn from './leadcolumn/leadcolumn'

const LeadsComponent = () => {


  const [active, setActive] = useState(true);

  const handleOpenGrid = () => {
    setActive(false);
  };
  const handleOpenColumn = () => {
    setActive(true);
  };

  const svgCloumn = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
     <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" fill="white"/>
     <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" fill="black" fill-opacity="0.2"/>
     </svg>
const svgGrid = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
     <path d="M14 21C13.4477 21 13 20.5523 13 20V12C13 11.4477 13.4477 11 14 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H14ZM4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H4ZM9 11V5H5V11H9ZM4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V4ZM15 5V7H19V5H15Z" fill="white"/>
     </svg>

  return (
    <LeadsCon>
      <LeadsCon2>
        <ColGrid>
        <div style={{ display: "flex" }}>
          <GridButton  onClick={handleOpenColumn} activeColor={active}>{svgCloumn}</GridButton>
          <ColumnButton onClick={ handleOpenGrid} activeColor={active}>{svgGrid}</ColumnButton>
        </div>

        </ColGrid>
        <InputContainer>
          <SearchIcon src={search} alt="icon" />
          <InputStyledIcon type="text" placeholder="Search student..." />
        </InputContainer>
        <InputContainer>
          {/* <SearchIcon src={search} alt="icon" /> */}
          <InputStyledIcon type="text" placeholder="Search lead section" />
          <SearchIcon src={strelka} alt="icon" />
        </InputContainer>
        <InputContainer>
          {/* <SearchIcon src={search} alt="icon" /> */}
          <InputStyledIcon type="text" placeholder="Search lead section" />
          <SearchIcon src={strelka} alt="icon" />
        </InputContainer>
      
        <ResetButton $maxWidth>
          <img src={reset} alt="icon" />
          Reset filter
        </ResetButton>
        <div>
         <AddleadModal/>
        </div>
        
      </LeadsCon2>
      <Leadhead>
        {active ? <LeadColumn/> : < LeadGrid/>}
        </Leadhead>
    </LeadsCon>
  )
}

export default LeadsComponent