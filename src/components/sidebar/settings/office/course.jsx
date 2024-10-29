import React from "react";
import { Boxes, ButtonSet, SetCong, SetFlex1, SetFlex2 } from "./style";
import course from "../../../../assets/image 18.png"
import course1 from "../../../../assets/office/image1.png"
import course2 from "../../../../assets/office/image.png"
const Course = () => {
  return (
    <div>
      <SetCong>
        <Boxes>
          <SetFlex1>
            <img src={course} alt="no" style={{width:340,borderRadius:10}}/>
          </SetFlex1>
          <SetFlex2>
            <h1>English Foundation Course</h1>
            <p>90 minutes</p>
            <div>
              <ButtonSet>2000000</ButtonSet>
            </div>
          </SetFlex2>
        </Boxes>
        <Boxes>
          <SetFlex1><img src={course} alt="no" style={{width:340,borderRadius:10}}/></SetFlex1>
          <SetFlex2>
            <h1>English Foundation Course</h1>
            <p>90 minutes</p>
            <div>
              <ButtonSet>2000000</ButtonSet>
            </div>
          </SetFlex2>
        </Boxes>
        <Boxes>
          <SetFlex1><img src={course} alt="no" style={{width:340,borderRadius:10}}/></SetFlex1>
          <SetFlex2>
            <h1>English Foundation Course</h1>
            <p>90 minutes</p>
            <div>
              <ButtonSet>2000000</ButtonSet>
            </div>
          </SetFlex2>
        </Boxes>
        <Boxes>
          <SetFlex1><img src={course1} alt="no" style={{width:340,borderRadius:10}}/></SetFlex1>
          <SetFlex2>
            <h1>English Foundation Course</h1>
            <p>90 minutes</p>
            <div>
              <ButtonSet>2000000</ButtonSet>
            </div>
          </SetFlex2>
        </Boxes>
        <Boxes>
          <SetFlex1><img src={course2} alt="no" style={{width:340,borderRadius:10}}/></SetFlex1>
          <SetFlex2>
            <h1>English Foundation Course</h1>
            <p>90 minutes</p>
            <div>
              <ButtonSet>2000000</ButtonSet>
            </div>
          </SetFlex2>
        </Boxes>
        <Boxes>
          <SetFlex1><img src={course} alt="no" style={{width:340,borderRadius:10}}/></SetFlex1>
          <SetFlex2>
            <h1>English Foundation Course</h1>
            <p>90 minutes</p>
            <div>
              <ButtonSet>2000000</ButtonSet>
            </div>
          </SetFlex2>
        </Boxes>
      </SetCong>
    </div>
  );
};

export default Course;
