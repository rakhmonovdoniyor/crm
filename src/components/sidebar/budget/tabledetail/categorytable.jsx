import * as React from "react";
import Table from "@mui/joy/Table";
import { EditDelete, EditDeleteBtn, LeadCol, Thtag } from "../styles";
import { Users } from "../../../../data/data";
import profil from "../../../../assets/leads/image 17.png";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import {
  InputContainer,
  InputStyledIcon,
  LeadsCon,
  LeadsCon2,
  ResetButton,
  SearchIcon,
} from "../styles";

import { Link } from "react-router-dom";

export default function CategoryTable() {
  const data = Users.maindata.slice(0, 2);
  const dataLength = data.length;
  console.log("data:", data.length);
  return (
    <div>
      <LeadCol>
        <Table hoverRow>
          <thead>
            <tr>
              <th style={{ width: "5%" }}></th>
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
                Category
              </th>

              {/* <th
                style={{
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px"  
                }}
              >
                {" "}
                Course
              </th>
              <th
                style={{
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px"  
                }}
              >
                Teacher
              </th>
              <th
                style={{
                  padding: "20px",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px"  
                }}
              >
                Days
              </th>
              <th
                style={{
                  padding: "20px",
                  width: "12%",
                  color: " #A098D5",
                  fontFamily: "Public Sans",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "14px"  
                }}
              >
                Rooms
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
              ></th>

              {/* <th style={{width:'5%'}}></th> */}
            </tr>
          </thead>

          <tbody>
            {data.map((value, index, key) => (
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
                  Office ishlari uchun
                </td>

                {/* <td
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
                    IT Bootcamp
                  </td>

                  <td
                    style={{
                      color: " #2C2669",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    U.Umida
                  </td>

                  <td
                    style={{
                      color: " #2C2669",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
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
                        lineHeight: "14px",
                      }}
                    >
                      Mon, Wed, Fri
                    </h5>
                  </td>
                  <td
                    style={{
                      color: " #2C2669",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "16px",
                    }}
                  >
                    Room 2
                  </td> */}
                <td
                  style={{
                    color: " #2C2669",
                    fontFamily: "Public Sans",
                    paddingLeft: "20px",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "16px",
                  }}
                >
                  <EditDeleteBtn>
                    <EditDelete $edit>
                      <CreateOutlinedIcon />
                    </EditDelete>
                    <EditDelete>
                      <DeleteForeverOutlinedIcon />
                    </EditDelete>
                  </EditDeleteBtn>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </LeadCol>
    </div>
  );
}
