import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  TeacherInfoPages,
  TeacherProfileContainer,
  TeachersProfileTopPages,
  WrapCenter,
} from "./style";
import {  Users } from "../../../data/data";
// import TeacherGroup from "./teacherGroup";
// import TeacherSalary from "./teacherSalary";
// import TeacherProfile from "./teacherProfile";
import DetailCom from ".";
import Group from "./Group";
import SalaryTab from "./Salary";
import { LeadsCon } from "../leads/style";
// import TeacherSalary from "./teacherSalary";

const TeacherPagesController = () => {
  //data by id
  let { id } = useParams();
  const resultData = Users.maindata.find(
    (value) => value.id === parseInt(id)
  );

  //page change   ///////Controller
  const [currentPage, setCurrentPage] = useState("page1")

  function PageState(){
    const pages ={
      page1: <DetailCom resultData={resultData}/>,
      page2: <Group/>,
      page3: <SalaryTab/>
    }
    return pages[currentPage]
  }


  return (
    <WrapCenter>
    <TeacherProfileContainer>
      <TeachersProfileTopPages>
        <TeacherInfoPages borderType="left" onClick={()=> setCurrentPage("page1")} colorActive={ currentPage === "page1"}>
          Profile
        </TeacherInfoPages>
        <TeacherInfoPages $BorderNoSides onClick={()=> setCurrentPage("page2")} colorActive={ currentPage === "page2"}>
          Groups
        </TeacherInfoPages>
        <TeacherInfoPages borderType="right" onClick={()=> setCurrentPage("page3")}  colorActive={currentPage === "page3"}>
          Salary
        </TeacherInfoPages>
      </TeachersProfileTopPages>

      {PageState()}

    </TeacherProfileContainer>
    </WrapCenter>
  );
};

export default TeacherPagesController;