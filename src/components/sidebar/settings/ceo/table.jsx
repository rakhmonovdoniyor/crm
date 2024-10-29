import React, { useState } from "react";

// import Course from "./course";
// import Rooms from "./rooms";
// import SmsTemple from "./smstemple";
// import SmsLogo from "./smsLogo";
import { BudjetContainer } from "../../budget/styles";
import {
  TeacherInfoPages,
  TeachersProfileTopPages,
} from "../../TecherDetail/style";
import Branch from "./branch";
import Staff from "./staff";
import AddleadModal from "../../leads/addleadmod";
import NewBranch from "./modals/branchmodal";
import NewStaff from "./modals/staffmodal";

const CeoCom = () => {
  const [currentPage, setCurrentPage] = useState("page1");

  function PageState() {
    const pages = {
      page1: <Branch />,

      page4: <Staff />,
    };
    return pages[currentPage];
  }
  function ModalState() {
    const pages = {
      page1: <NewStaff />,
      //   page2: "ss",
      //   page3: "Button",
      page4: <NewBranch /> ,
    };
    return pages[currentPage];
  }  
  return (
    <BudjetContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <TeachersProfileTopPages $width100 $marginBottom0>
          <TeacherInfoPages
            borderType="left"
            onClick={() => setCurrentPage("page1")}
            colorActive={currentPage === "page1"}
          >
            Staff
          </TeacherInfoPages>
      
          <TeacherInfoPages
            borderType="right"
            onClick={() => setCurrentPage("page4")}
            colorActive={currentPage === "page4"}
          >
            Branch
          </TeacherInfoPages>
        </TeachersProfileTopPages>
        {ModalState()}
      </div>
      {PageState()}
    </BudjetContainer>
  );
};

export default CeoCom;
