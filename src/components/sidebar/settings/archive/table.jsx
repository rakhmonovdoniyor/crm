import React, { useState } from "react";

import { BudjetContainer } from "../../budget/styles";
import {
  TeacherInfoPages,
  TeachersProfileTopPages,
} from "../../TecherDetail/style";
import Groups from "./Groups";
import Student from "./Student";
import Staff from "./Staff";
import Leads from "./Leads";

const ArchiveCom = () => {
  const [currentPage, setCurrentPage] = useState("page1");

  function PageState() {
    const pages = {
      page1: <Groups />,
      page2: <Student />,
      page3: <Staff />,
      page4: <Leads />,
    };
    return pages[currentPage];
  }
  function ModalState() {
    const pages = {
      page1: " ",
      page2: "",
      page3: " ",
      page4: " ",
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
            Group
          </TeacherInfoPages>
          <TeacherInfoPages
            $BorderNoSides
            onClick={() => setCurrentPage("page2")}
            colorActive={currentPage === "page2"}
          >
            Students
          </TeacherInfoPages>
          <TeacherInfoPages
            // $BorderNoSides
            onClick={() => setCurrentPage("page3")}
            colorActive={currentPage === "page3"}
          >
            Staff
          </TeacherInfoPages>
          <TeacherInfoPages
            borderType="right"
            onClick={() => setCurrentPage("page4")}
            colorActive={currentPage === "page4"}
          >
            Leads
          </TeacherInfoPages>
        </TeachersProfileTopPages>
        {ModalState()}
      </div>
      {PageState()}
    </BudjetContainer>
  );
};

export default ArchiveCom;
