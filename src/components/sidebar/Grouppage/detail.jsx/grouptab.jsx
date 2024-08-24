import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  TeacherInfoPages,
  TeacherProfileContainer,
  TeachersProfileTopPages,
  WrapCenter,
} from "../../TecherDetail/style";
import {  Users } from "../../../../data/data";
// import TeacherGroup from "./teacherGroup";
// import TeacherSalary from "./teacherSalary";
// import TeacherProfile from "./teacherProfile";
// import DetailCom from ".";
// import Group from "./detail";
// import SalaryTab from "./Salary";
// import { LeadsCon } from "../leads/style";
import Attandance from "./Attandance";
import IndividualPrice from "./indorice";
import History from "./History";
import { GroupContainer } from "./style";
// import TeacherSalary from "./teacherSalary";

const GroupTabs = () => {
  //data by id
  let { id } = useParams();
  const resultData = Users.maindata.find(
    (value) => value.id === parseInt(id)
  );

  //page change   ///////Controller
  const [currentPage, setCurrentPage] = useState("page1")

  function PageState(){
    const pages ={
      page1: <Attandance resultData={resultData}/>,
      page2: <IndividualPrice/>,
      page3: <History/>
    }
    return pages[currentPage]
  }


  return (
    <WrapCenter style={{marginLeft: '0px'}}>
    <GroupContainer>
      <TeachersProfileTopPages>
        <TeacherInfoPages borderType="left" onClick={()=> setCurrentPage("page1")} colorActive={ currentPage === "page1"}>
        Attandance
        </TeacherInfoPages>
        <TeacherInfoPages $BorderNoSides onClick={()=> setCurrentPage("page2")} colorActive={ currentPage === "page2"}>
        IndividualPrice
        </TeacherInfoPages>
        <TeacherInfoPages borderType="right" onClick={()=> setCurrentPage("page3")}  colorActive={currentPage === "page3"}>
        History
        </TeacherInfoPages>
      </TeachersProfileTopPages>

      {PageState()}

    </GroupContainer>
    </WrapCenter>
  );
};

export default GroupTabs;