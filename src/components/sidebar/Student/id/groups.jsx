import React from "react";
import {
  AvatarCon,
  BoxWrap,
  FourWrap,
  GroupWrap,
  GroupWrap2,
  GroupWrap3,
  HJ,
  LineBottom,
  LineBottom4,
  LineBottom5,
} from "./Stuentdetailstyle";
import profile from "../../../../assets/sidebar/Avatar (1).png";
import { Users } from "../../../../data/data";
import { Bottomdiv } from "./style";
import { LogButton } from "../../../../styles/homeStyle/style";
import Grouptable from "./tab";

const Groups = () => {
  const data = Users.maindata.slice(0, 2);
  const dataLength = data.length;
  console.log("data:", data.length);

  return (
    <GroupWrap3>
      <GroupWrap2>
        {data.map((value, key, index) => {
          return (
            <>
              <BoxWrap>
                <AvatarCon>
                  <img src={profile} alt="" />
                </AvatarCon>
                <FourWrap>
                  <Bottomdiv>
                    <h1
                      style={{
                        color: "#2C2669",

                        /* Medium/18px -> 24px */
                        fontFamily: "Public Sans",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "24px",
                      }}
                    >
                      {value.car.name}
                    </h1>{" "}
                    <p>Group name</p>
                  </Bottomdiv>

                  <Bottomdiv>
                    <h1
                      style={{
                        color: "#6053B9",

                        /* Medium/18px -> 24px */
                        fontFamily: "Public Sans",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "32px",
                      }}
                    >
                      {value.car.name}
                    </h1>{" "}
                    <p>Course</p>
                  </Bottomdiv>
                  <Bottomdiv>
                    <h1
                      style={{
                        color: "#6053B9",

                        /* Medium/18px -> 24px */
                        fontFamily: "Public Sans",
                        fontSize: "15px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "24px",
                      }}
                    >
                      {value.car.date}
                    </h1>{" "}
                    <p>Start date</p>
                  </Bottomdiv>
                  <Bottomdiv>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <HJ>12-students</HJ>
                      <HJ>2-rooms</HJ>
                    </div>
                    <p>Students & room</p>
                  </Bottomdiv>
                </FourWrap>
                <LineBottom></LineBottom>
                <LineBottom4>
                  <LineBottom5>
                    <h1>09:00 - 11:00</h1>
                    <p>Mon, Tue, Wed, Thu, Fri</p>
                  </LineBottom5>

                  <div>
                    <LogButton>See group</LogButton>
                  </div>
                </LineBottom4>
              </BoxWrap>
            </>
          );
        })}
      </GroupWrap2>
      <Grouptable />
    </GroupWrap3>
  );
};

export default Groups;
