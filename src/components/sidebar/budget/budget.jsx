import React, { useState } from "react";
import { TeacherInfoPages, TeachersProfileTopPages } from "../Student/id/style";
import { BudjetContainer } from "./styles";
import Income from "./income";
import Category from "./category";
import CategoryModal from "./modalcategory";
import Expense from "./expense";

const BudjetComponent = () => {
  const [currentPage, setCurrentPage] = useState("page1");

  function PageState() {
    const pages = {
      page1: <Income />,
      page2: <Category />,
      page3: <Expense />,
    };
    return pages[currentPage];
  }
  function ModalState() {
    const pages = {
      page1: "Button",
      page2: <CategoryModal />,
      page3: "Button",
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
            Income
          </TeacherInfoPages>
          <TeacherInfoPages
            $BorderNoSides
            onClick={() => setCurrentPage("page2")}
            colorActive={currentPage === "page2"}
          >
            Category
          </TeacherInfoPages>
          <TeacherInfoPages
            borderType="right"
            onClick={() => setCurrentPage("page3")}
            colorActive={currentPage === "page3"}
          >
            Expense
          </TeacherInfoPages>
        </TeachersProfileTopPages>
        {ModalState()}
      </div>
      {PageState()}
    </BudjetContainer>
  );
};

export default BudjetComponent;
