import * as React from "react";
import Table from "@mui/joy/Table";
import { Users } from "../../../../data/data";
import profil from "../../../../assets/leads/image 17.png";

import { Link } from "react-router-dom";
import { LeadCol } from "../../budget/styles";
import { ButtonSet } from "../office/style";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { ButtonEditResume, WrapBtn } from "./style";
export default function Staff() {
  const data = Users.maindata.slice(0, 3);
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <div>
      {/* </InputTeachWrap> */}

      <LeadCol>
        <Table hoverRow>
          <thead>
            <tr>
              <th
                style={{
                  width: "0.5%",
                }}
              ></th>
              <th
                style={{
                  width: "40%",
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px" /* 116.667% */,
                  paddingLeft: "80px",
                }}
              >
                {" "}
                Full name
              </th>

              <th
                style={{
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px" /* 116.667% */,
                }}
              >
                {" "}
                Phone number
              </th>
              {/* <th
                style={{
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px",
                }}
              >
                Groups
              </th> */}
              <th
                style={{
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px",
                }}
              >
                Balance
              </th>
              {/* <th
                style={{
                  padding: "20px",
                  width: "20%",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px",
                }}
              >
                Role
              </th> */}

              <th
                style={{
                  padding: "20px",
                  width: "10%",

                  textAlign: "center",
                  paddingRight: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px",
                }}
              ></th>

              {/* <th style={{width:'5%'}}></th> */}
            </tr>
          </thead>

          <tbody>
            {data.map((value, index, key) => (
              <Link to={`${value.id}`} style={{ display: "contents" }}>
                <tr key={key}>
                  <td
                    style={{
                      paddingBottom: "10px",
                      //   display: "flex",
                      //   justifyContent: "center",
                      //   alignItems: "center",
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "30px",
                      gap: "10px",
                      color: "  #2C2669",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    <img src={profil} alt="" />
                    {value.car.name}
                  </td>

                  <td
                    style={{
                      padding: "20px",
                      color: "  #6053B9",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "16px",
                    }}
                  >
                    Active
                  </td>

                  {/* <td
                    style={{
                      color: " #6053B9",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    New elementary
                  </td> */}

                  {/* <td
                    style={{
                      color: " #6053B9",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    IT Bootcamp
                    <br /> */}
                  {/* </td> */}
                  <td
                    style={{
                      color: " #6053B9",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    <ButtonSet>1.200.000</ButtonSet>
                  </td>
                  <td
                    style={{
                      display: "flex",
                      gap: "10px",
                      color: " #6053B9",
                      fontFamily: "Public Sans",
                      paddingLeft: "20px",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    <WrapBtn>
                      <ButtonEditResume>
                        <EditOutlinedIcon></EditOutlinedIcon>
                      </ButtonEditResume>
                      <ButtonEditResume>
                        <PauseOutlinedIcon></PauseOutlinedIcon>
                      </ButtonEditResume>
                    </WrapBtn>
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </Table>
      </LeadCol>
    </div>
  );
}
