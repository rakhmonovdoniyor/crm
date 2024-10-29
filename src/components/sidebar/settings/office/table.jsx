import React, { useState } from "react";

import Course from "./course";
import Rooms from "./rooms";
import SmsTemple from "./smstemple";
import SmsLogo from "./smsLogo";
import { BudjetContainer } from "../../budget/styles";
import {
  TeacherInfoPages,
  TeachersProfileTopPages,
} from "../../TecherDetail/style";
import NewRoom from "./modals/roomModal";
import SMSTemplate from "./modals/smstemplatesModal";
import NewCourse from "./modals/coursemodal";

const CeoCom = () => {
  const [currentPage, setCurrentPage] = useState("page1");

  function PageState() {
    const pages = {
      page1: <Course />,
      page2: <Rooms />,
      page3: <SmsTemple />,
      page4: <SmsLogo />,
    };
    return pages[currentPage];
  }
  function ModalState() {
    const pages = {
      page1:  <NewCourse/>,
      page2: <NewRoom/>,
      page3: <SMSTemplate/>,
      page4: "",
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
            Courses
          </TeacherInfoPages>
          <TeacherInfoPages
            $BorderRightSide
            onClick={() => setCurrentPage("page2")}
            colorActive={currentPage === "page2"}
          >
            Rooms
          </TeacherInfoPages>
          <TeacherInfoPages
           $BorderNoSides
            onClick={() => setCurrentPage("page3")}
            colorActive={currentPage === "page3"}
          >
            SMS Templates
          </TeacherInfoPages>
          <TeacherInfoPages
            borderType="right"
            onClick={() => setCurrentPage("page4")}
            colorActive={currentPage === "page4"}
          >
            SMS Logs
          </TeacherInfoPages>
        </TeachersProfileTopPages>
        {ModalState()}
      </div>
      {PageState()}
    </BudjetContainer>
  );
};

export default CeoCom;
