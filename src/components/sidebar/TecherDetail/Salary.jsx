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

// import TeacherSalary from "./teacherSalary";
import Income from "./salaryinfo/income"
import Expense from "./salaryinfo/expense"
import Expense2 from "./salaryinfo/mui";

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
      page1: <Income resultData={resultData}/>,
      page3: <Expense2/>,
     
    }
    return pages[currentPage]
  }


  return (
    
    <TeacherProfileContainer>
      <TeachersProfileTopPages>
        <TeacherInfoPages borderType="left" onClick={()=> setCurrentPage("page1")} colorActive={ currentPage === "page1"}>
          Income
        </TeacherInfoPages>
        <TeacherInfoPages borderType="right" onClick={()=> setCurrentPage("page3")} colorActive={ currentPage === "page3"}>
          Expense
        </TeacherInfoPages>
        
      </TeachersProfileTopPages>

      {PageState()}

    </TeacherProfileContainer>
   
  );
};

export default TeacherPagesController;