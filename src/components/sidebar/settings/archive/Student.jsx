import * as React from "react";
import Table from "@mui/joy/Table";

import { Users } from "../../../../data/data";
import profil from "../../../../assets/leads/image 17.png";

import { Link } from "react-router-dom";
import { LeadCol } from "../../budget/styles";
import CachedIcon from "@mui/icons-material/Cached";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { ButtonEditResume, WrapBtn } from "../ceo/style";
import { BtnLast } from "./style";
export default function Students() {
  const data = Users.maindata.slice(0, 5);
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <div>
      <LeadCol>
        <Table hoverRow>
          <thead>
            <tr>
              <th style={{ width: "0.5%" }}></th>
              <th
                style={{
                  width: "30%",
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
                Group name
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
                Phone Number
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
                Role
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
                Days
              </th> */}

              <th
                style={{
                  padding: "20px",
                  width: "10%",
                  //  display: 'flex', justifyContent:'center',
                  textAlign: "center",
                  paddingRight: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px" /* 116.667% */,
                }}
              >
                Action
              </th>

              {/* <th style={{width:'5%'}}></th> */}
            </tr>
          </thead>

          <tbody>
            {data.map((value, index, key) => (
              <Link to={`${value.id}`} style={{ display: "contents" }}>
                <tr key={key}>
                  <td> {index + 1}</td>
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
                      lineHeight: "16px" /* 116.667% */,
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
                      lineHeight: "16px" /* 116.667% */,
                    }}
                  >
                    (91) 234 56 78
                  </td>

                  <td
                    style={{
                      color: " #2C2669",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px" /* 116.667% */,
                    }}
                  >
                    Teacher
                  </td>

                  {/* <td
                    style={{
                      color: " #2C2669",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px"  
                    }}
                  >
                    08:05 - 09:05 <br />
                    <h5
                      style={{
                        color: " #A098D5",
                        fontFamily: "Public Sans",
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "14px"  
                      }}
                    >
                      Mon, Wed, Fri
                    </h5>
                  </td> */}

                  <td
                    style={{
                      color: " #2C2669",
                      fontFamily: "Public Sans",
                      paddingLeft: "20px",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px" /* 116.667% */,
                    }}
                  >
                    <WrapBtn>
                      <ButtonEditResume>
                        <CachedIcon></CachedIcon>
                      </ButtonEditResume>
                      <ButtonEditResume $delete>
                        <DeleteForeverOutlined
                          style={{
                            color: "red",

                            borderRadius: "4px",
                          }}
                        ></DeleteForeverOutlined>
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
