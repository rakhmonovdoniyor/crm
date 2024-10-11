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
      page1: "Button",
      page2: "ss",
      page3: "Button",
      page4: "Button",
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
            $BorderNoSides
            onClick={() => setCurrentPage("page2")}
            colorActive={currentPage === "page2"}
          >
            Category
          </TeacherInfoPages>
          <TeacherInfoPages
            // $BorderNoSides
            onClick={() => setCurrentPage("page3")}
            colorActive={currentPage === "page3"}
          >
            Category
          </TeacherInfoPages>
          <TeacherInfoPages
            borderType="right"
            onClick={() => setCurrentPage("page4")}
            colorActive={currentPage === "page4"}
          >
            Branches
          </TeacherInfoPages>
        </TeachersProfileTopPages>
        {ModalState()}
      </div>
      {PageState()}
    </BudjetContainer>
  );
};

export default CeoCom;
