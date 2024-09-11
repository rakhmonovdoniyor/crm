import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  TeacherInfoPages,
  TeacherProfileContainer,
  TeachersProfileTopPages,
  WrapCenter,
} from "../../TecherDetail/style";
import { Users } from "../../../../data/data";

import { GroupContainer } from "./style";
import Groups from "./groups";
import Comment from "./comment";
import SMS from "./sms";
import HistoryS from "./history";
// import TeacherSalary from "./teacherSalary";

const StudentFourTabs = () => {
  //data by id
  let { id } = useParams();
  const resultData = Users.maindata.find((value) => value.id === parseInt(id));

  //page change   ///////Controller
  const [currentPage, setCurrentPage] = useState("page1");

  function PageState() {
    const pages = {
      page1: <Groups resultData={resultData} />,
      page2: <Comment />,
      page3: <SMS />,
      page4: <HistoryS />,
    };
    return pages[currentPage];
  }

  return (
    <WrapCenter style={{ marginLeft: "0px" }}>
      <GroupContainer>
        <TeachersProfileTopPages>
          <TeacherInfoPages
            borderType="left"
            onClick={() => setCurrentPage("page1")}
            colorActive={currentPage === "page1"}
          >
            Groups
          </TeacherInfoPages>
          <TeacherInfoPages
            $BorderNoSides
            onClick={() => setCurrentPage("page2")}
            colorActive={currentPage === "page2"}
          >
            Comment
          </TeacherInfoPages>
          <TeacherInfoPages
            $BorderNoSides
            onClick={() => setCurrentPage("page3")}
            colorActive={currentPage === "page3"}
          >
            SMS
          </TeacherInfoPages>
          <TeacherInfoPages
            borderType="right"
            onClick={() => setCurrentPage("page4")}
            colorActive={currentPage === "page4"}
          >
            History
          </TeacherInfoPages>
        </TeachersProfileTopPages>

        {PageState()}
      </GroupContainer>
    </WrapCenter>
  );
};

export default StudentFourTabs;
